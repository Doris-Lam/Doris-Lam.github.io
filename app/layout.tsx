import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { PageTransition } from "@/components/page-transition";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DinoGame } from "@/components/dino-game";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Doris Lam",
  description: "Software engineer building accessible and impactful solutions",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/dino-sprite.png" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var p=location.pathname;if(p==='/'||p===''){document.documentElement.style.overflowY='hidden';}})();",
          }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${ibmPlexMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen bg-[#f7f4ee] text-stone-900 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-300">
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-1">
                <PageTransition>
                  {children}
                </PageTransition>
              </div>
              <Footer />
              <DinoGame />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
