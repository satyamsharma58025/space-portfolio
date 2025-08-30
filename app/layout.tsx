import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { HomeButton } from "@/components/shared/home-button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { GlobalSearch } from "@/components/main/global-search";
import { ClientProviders } from "@/components/providers/client-providers";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

// Add Open Graph Image templates
const ogImage = {
  default: "https://raw.githubusercontent.com/satyamsharma58025/space-portfolio/main/public/og-image.jpg",
  blog: "https://raw.githubusercontent.com/satyamsharma58025/space-portfolio/main/public/blog-og-image.jpg",
};

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <ClientProviders>
          <StarsCanvas />
          <Navbar />
          <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
            <ThemeToggle />
            <GlobalSearch />
          </div>
          {children}
          <Footer />
          <HomeButton />
        </ClientProviders>
      </body>
    </html>
  );
}
