"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CursoLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await fetch("/api/logout", {
        method: "POST",
      });
      router.push("/login");
      router.refresh();
    } catch (err) {
      console.error("Errore durante la disconnessione", err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header con logo + pulsante esci */}
      <header className="border-b border-black/40 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            {/* Logo: al click va su /corso (home del corso) */}
            <Link href="/curso" className="flex items-center gap-2">
              <Image
                src="/logo2.png"
                alt="Banca Segreta di Prompt"
                width={120}
                height={32}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <Button
            size="sm"
            variant="outline"
            onClick={handleSignOut}
            disabled={loading}
            className="rounded-full border-white/30 bg-white/5 text-xs text-slate-100 hover:bg-white/10"
          >
            <LogOut className="mr-2 h-4 w-4" />
            {loading ? "Uscita in corso..." : "Esci"}
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        {children}
      </main>
    </div>
  );
}
