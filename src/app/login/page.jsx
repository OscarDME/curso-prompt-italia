// src/app/login/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.message || "Codice non valido.");
        setLoading(false);
        return;
      }

      router.push("/curso");
    } catch (err) {
      setError("Si è verificato un errore. Riprova.");
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
            <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-slate-200 sm:text-lg">
              Inserisci il codice di acquisto che hai ricevuto all’interno del
              prodotto su Hotmart. Lo trovi nel corso che ti è arrivato via
              email, nell’accesso.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mx-auto max-w-md text-left">
                <Label
                  htmlFor="code"
                  className="flex items-center gap-2 text-base text-slate-100"
                >
                  <Lock className="h-5 w-5" />
                  Codice di acquisto
                </Label>

                {/* Input + eye toggle */}
                <div className="relative mt-2">
                  <Input
                    id="code"
                    type={showCode ? "text" : "password"}
                    autoComplete="off"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="h-14 rounded-xl border-white/20 bg-black/30 pr-12 text-lg text-slate-100 placeholder:text-slate-500 focus-visible:ring-[#36C5FF]"
                    placeholder="Incolla qui il tuo codice..."
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowCode((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-2 text-slate-300 transition hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#36C5FF]"
                    aria-label={showCode ? "Nascondi codice" : "Mostra codice"}
                    title={showCode ? "Nascondi" : "Mostra"}
                  >
                    {showCode ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <p className="mx-auto max-w-md rounded-md border border-red-500/20 bg-red-950/40 px-3 py-2 text-sm text-red-400">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={loading || !code}
                className="group mx-auto flex w-full max-w-md justify-center rounded-full bg-gradient-to-r from-[#00E7FF] via-[#36C5FF] to-[#A855FF] py-6 text-lg text-white shadow-[0_0_40px_rgba(88,28,135,0.5)] transition-all hover:brightness-110 disabled:opacity-60"
              >
                {loading ? "Verifica in corso..." : "ENTRA NEL CORSO"}
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">
                Se non trovi il tuo codice, controlla la cartella Spam o
                Promozioni dell’email con cui hai ricevuto l’accesso al tuo
                corso su Hotmart.
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
