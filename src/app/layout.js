import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/self-made/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/self-made/dock";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Adrij Bhadra | Full Stack Developer",
  description:
    "Passionate Full Stack Developer crafting exceptional digital experiences with modern technologies. Specializing in React, Next.js, Node.js, and cloud technologies.",
  keywords:
    "Full Stack Developer, React, Next.js, Node.js, TypeScript, Cloud Computing, Portfolio",
  author: "Adrij Bhadra",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
        style={{
          fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
          fontVariationSettings: '"opsz" auto',
        }}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
