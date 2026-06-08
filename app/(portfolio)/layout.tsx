import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/DarkModeToggle";
import { FloatingDock } from "@/components/FloatingDock";
import MainframeMaintenancePage from "@/components/Maintenance/MainframeMaintenancePage";
import SidebarToggle from "@/components/SidebarToggle";
import { ThemeProvider } from "@/components/sections/ThemeProvider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SanityLive } from "@/sanity/lib/live";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Alswanger",
  description: "From Fairfield CT, UCONN Digital Marketing Graduate,",
  keywords: [
    "Daniel Alswanger",
    "Fairfield CT",
    "Dan Alswanger",
    "Daniel Alswanger UCONN",
    "Alswanger University of Connecticut",
    "Dan Als",
    "Dan Alswanger Ludlowe High School",
    "FLHS Daniel Alswanger",
    "Daniel Alswanger Tennis",
  ],
  authors: [{ name: "Daniel Alswanger" }],
  creator: "Daniel Alswanger",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Daniel Alswanger | Bachelors in Digital Marketing",
    description: "From Fairfield CT, UCONN Digital Marketing Graduate,",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Alswanger",
  url: "https://danielalswanger.com",
  image: "https://danielalswanger.com/profile.jpg",
  alumniOf: "University of Connecticut",
  sameAs: ["https://www.linkedin.com/in/danielalswanger"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontLinks = (
    <head>
      <link
        rel="stylesheet"
        href="https://db.onlinewebfonts.com/c/5ac3fe7c6abd2f62067f266d89671492?family=HelveticaNowDisplay-Medium"
      />
      <link
        rel="stylesheet"
        href="https://db.onlinewebfonts.com/c/1aa3377e489837a26d019bba501e779d?family=HelveticaNowDisplayW01-Rg"
      />
    </head>
  );

  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true") {
    return (
      <html lang="en">
        {fontLinks}
        <body className="maintenance-shell overflow-hidden bg-white text-black">
          <MainframeMaintenancePage />
        </body>
      </html>
    );
  }
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {fontLinks}
        <body
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Script
              src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
              strategy="afterInteractive"
            />
            <script type="application/ld+json">
              {JSON.stringify(personSchema)}
            </script>
            <SidebarProvider defaultOpen={false}>
              <SidebarInset>{children}</SidebarInset>
              <AppSidebar side="right" />
              <FloatingDock />
              <SidebarToggle />

              {/* Mode Toggle - Desktop: bottom right next to AI chat, Mobile: top right next to burger menu */}
              <div className="fixed top-4 right-18 z-20 md:top-auto md:right-24 md:bottom-6 md:left-auto">
                <div className="h-10 w-10 md:h-12 md:w-12">
                  <ModeToggle />
                </div>
              </div>
            </SidebarProvider>

            <SanityLive />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
