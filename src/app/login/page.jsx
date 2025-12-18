// src/app/login/page.jsx
"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Normalizza TUTTO ciò che di solito rompe il copia/incolla su mobile
function normalizeKey(raw) {
  if (!raw) return "";

  return String(raw)
    .trim()
    .replace(/\u200B|\u200C|\u200D|\uFEFF/g, "") // caratteri a larghezza zero
    .replace(/\r?\n|\r/g, "") // a capo
    .replace(/\s+/g, "") // spazi
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .toUpperCase();
}

export default function LoginPage() {
  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hint, setHint] = useState("");
  const router = useRouter();

  const normalizedCode = useMemo(() => normalizeKey(code), [code]);

  const setFriendlyError = (msg) => {
    setError(msg);
    setHint("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setHint("");

    const n = normalizedCode;

    if (!n) {
      setFriendlyError("Incolla la tua CHIAVE completa per entrare.");
      return;
    }

    // Se il tuo formato ha sempre questo prefisso, aiuta a rilevare incolli incompleti
    const expectedPrefix = "MI_CODIGO_DE_COMPRA_";
    if (!n.startsWith(expectedPrefix)) {
      setFriendlyError(
        "Questa CHIAVE non sembra completa. Copiala di nuovo da Hotmart e incollala così com’è (senza digitarla)."
      );
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: n }), // invia SEMPRE normalizzato
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setFriendlyError(
          data?.message ||
            "La CHIAVE non è stata validata. Copia la CHIAVE COMPLETA e incollala di nuovo (senza spazi)."
        );
        setLoading(false);
        return;
      }

      router.push("/curso");
    } catch {
      setFriendlyError(
        "Si è verificato un errore di connessione. Riprova tra qualche secondo."
      );
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <Card className="relative overflow-hidden rounded-3xl border-white/10 bg-slate-950/60 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.5)]">
          {/* Aura */}
          <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-[conic-gradient(from_140deg_at_10%_20%,#22d3ee_0,#a855f7_40%,#6366f1_70%,#22d3ee_100%)] opacity-40 blur-3xl" />

          <CardContent className="relative z-10 px-8 py-10 sm:px-12 sm:py-12 text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-1.5 text-sm font-medium text-sky-100">
              <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
              Accesso privato al corso
            </div>

            {/* Title */}
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white drop-shadow sm:text-4xl">
              Banco Segreto di{" "}
              <span className="bg-gradient-to-r from-[#37E5FF] via-[#6A5BFF] to-[#F973FF] bg-clip-text text-transparent">
                Prompt
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-slate-200 sm:text-lg">
              🔐 Incolla la tua <strong>CHIAVE UNICA</strong> (copiala da Hotmart).
              Non digitarla.
            </p>

            {/* Mini aviso */}
            <div className="mx-auto mb-6 max-w-md rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-200">
              ✅ <strong>Hai già accesso.</strong> Se non entra, quasi sempre è perché manca un carattere.
              <br />
              Ricopia la CHIAVE completa e incollala di nuovo.
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="mx-auto max-w-md text-left">
                <Label
                  htmlFor="code"
                  className="flex items-center gap-2 text-base text-slate-100"
                >
                  <Lock className="h-5 w-5" />
                  CHIAVE UNICA di accesso
                </Label>

                {/* Input + eye toggle */}
                <div className="relative mt-2">
                  <Input
                    id="code"
                    type={showCode ? "text" : "password"}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="characters"
                    spellCheck={false}
                    inputMode="text"
                    value={code}
                    onChange={(e) => {
                      setError("");
                      setHint("");
                      setCode(e.target.value);
                    }}
                    onPaste={() => {
                      setTimeout(
                        () => setHint('✅ Incollato. Ora tocca “ENTRA NEL CORSO”.'),
                        0
                      );
                    }}
                    className="h-14 rounded-xl border-white/20 bg-black/30 pr-12 text-lg text-slate-100 placeholder:text-slate-500 focus-visible:ring-[#36C5FF]"
                    placeholder="Incolla qui la tua CHIAVE..."
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowCode((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-2 text-slate-300 transition hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#36C5FF]"
                    aria-label={showCode ? "Nascondi chiave" : "Mostra chiave"}
                    title={showCode ? "Nascondi" : "Mostra"}
                  >
                    {showCode ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <div className="mt-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Tip mobile:</span>{" "}
                  rimuoviamo automaticamente gli spazi.
                </div>

                {normalizedCode && (
                  <div className="mt-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">
                    <span className="text-slate-400">Rilevato:</span>{" "}
                    <span className="font-mono break-all">{normalizedCode}</span>
                  </div>
                )}
              </div>

              {hint && (
                <p className="mx-auto max-w-md rounded-md border border-emerald-500/20 bg-emerald-950/30 px-3 py-2 text-sm text-emerald-300">
                  {hint}
                </p>
              )}

              {error && (
                <p className="mx-auto max-w-md rounded-md border border-red-500/20 bg-red-950/40 px-3 py-2 text-sm text-red-400">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={loading || !normalizedCode}
                className="group mx-auto flex w-full max-w-md justify-center rounded-full bg-gradient-to-r from-[#00E7FF] via-[#36C5FF] to-[#A855FF] py-6 text-lg text-white shadow-[0_0_40px_rgba(88,28,135,0.5)] transition-all hover:brightness-110 disabled:opacity-60"
              >
                {loading ? "Verifica in corso..." : "ENTRA NEL CORSO"}
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
                Se non trovi la tua CHIAVE, controlla Spam o Promozioni nell’email
                in cui hai ricevuto l’accesso.
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
