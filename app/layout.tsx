import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { PageTransition } from "@/components/page-transition";
import { Footer } from "@/components/footer";
import { DinoGame } from "@/components/dino-game";
import { ClickSound } from "@/components/click-sound";

// Söhne is Voxer's UI typeface but is a licensed Klim font, so this uses
// Inter — the fallback named in tri-nyc/design-system's own font tokens.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
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
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-[#f7f4ee] text-stone-900 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-300">
            <div className="flex flex-col min-h-screen">
              <div className="flex-1 pt-16 md:pt-20">
                <PageTransition>
                  {children}
                </PageTransition>
              </div>
              <Footer />
              <DinoGame />
            <ClickSound />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
