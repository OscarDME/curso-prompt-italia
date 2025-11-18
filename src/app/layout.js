import "./globals.css";
import { Poppins } from "next/font/google";

// Si luego quieres un listener de Hotmart/params puedes importarlo aquí
// import HotmartSrcListener from "@/components/HotmartSrcListener";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Banco Secreto de Prompts — Plataforma del Curso",
  description:
    "Acceso privado al curso Banco Secreto de Prompts: módulos en video, recursos descargables y todo el contenido de la TSL organizado en un solo lugar.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        {/* Favicon con emoji (puedes cambiarlo por el tuyo) */}
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>`}
        />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'TU_PIXEL_ID_AQUI');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=TU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>

      <body className="min-h-screen bg-[#050B2C] text-slate-50 antialiased font-sans">
        {/* Glow de fondo global (como en la TSL) */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/40 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl" />
        </div>

        {/* Si quieres capturar src de Hotmart, pon aquí el listener */}
        {/* <HotmartSrcListener /> */}

        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
