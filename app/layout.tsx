import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FilmPro — Sistema de Gestão para Aplicadores de Película, PPF e Envelopamento",
  description:
    "O FilmPro ajuda aplicadores de película, PPF, envelopamento e adesivos a controlarem clientes, serviços, orçamentos e estoque em um só lugar.",
  keywords: [
    "gestão película",
    "PPF sistema",
    "envelopamento automotivo",
    "software aplicadores",
    "FilmPro",
  ],
  openGraph: {
    title: "FilmPro — Gestão para Aplicadores de Película, PPF e Envelopamento",
    description:
      "Controle clientes, serviços, orçamentos e estoque em um só lugar. Feito para donos de loja e aplicadores de película, PPF e envelopamento.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "w3xpxbbqeh");`,
        }}
      />
    </html>
  );
}
