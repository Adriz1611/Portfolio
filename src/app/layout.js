import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/self-made/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/self-made/dock";

// Primary font - Inter (clean, readable, professional)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

// Display font for headings - Space Grotesk (geometric, bold, modern)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

// Monospace font for code - JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
  fallback: ["SF Mono", "Monaco", "Consolas", "monospace"],
});

export const metadata = {
  metadataBase: new URL("https://adriz.me"),
  title: {
    default: "Adrij Bhadra | Full Stack Developer",
    template: "%s | Adrij Bhadra",
  },
  description:
    "Passionate Full Stack Developer crafting exceptional digital experiences with modern technologies. Specializing in React, Next.js, Node.js, and cloud technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Cloud Computing",
    "Portfolio",
    "DevOps",
    "AWS",
    "Docker",
    "Kubernetes",
  ],
  authors: [{ name: "Adrij Bhadra" }],
  creator: "Adrij Bhadra",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Adrij Bhadra Portfolio",
    title: "Adrij Bhadra | Full Stack Developer",
    description:
      "Passionate Full Stack Developer crafting exceptional digital experiences with modern technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrij Bhadra | Full Stack Developer",
    description:
      "Passionate Full Stack Developer crafting exceptional digital experiences with modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Preconnect to image CDNs */}
        <link rel="dns-prefetch" href="https://www.altere.in" />
        <link rel="dns-prefetch" href="https://cfstatic.give.do" />
        <link rel="dns-prefetch" href="https://gameessentials.in" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
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
