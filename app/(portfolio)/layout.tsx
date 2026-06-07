import "../globals.css";
import type { Metadata } from "next";
import SidebarToggle from "@/components/SidebarToggle";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";
import { FloatingDock } from "@/components/FloatingDock";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Script from "next/script";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/sections/ThemeProvider";
import { ModeToggle } from "@/components/DarkModeToggle";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Alswanger's Portfolio",
  description:
    "From Fairfield CT, UCONN Digital Marketing Graduate,",
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
    description:
      "From Fairfield CT, UCONN Digital Marketing Graduate,",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  
  },
};
  const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Alswanger",
  url: "https://danielalswanger.com",
  image: "https://danielalswanger.com/profile.jpg",
  alumniOf: "University of Connecticut",
  sameAs: [
    "https://www.linkedin.com/in/danielalswanger",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en"  suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
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
          <Script
            id="person-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
  }}
/>
          <SidebarProvider defaultOpen={false}> 
            <SidebarInset>

              {children}
            
            </SidebarInset>
            <AppSidebar side="right" />

            <FloatingDock/>
            <SidebarToggle/>

              {/* Mode Toggle - Desktop: bottom right next to AI chat, Mobile: top right next to burger menu */}
              <div className="fixed md:bottom-6 md:right-24 top-4 right-18 md:top-auto md:left-auto z-20">
                <div className="w-10 h-10 md:w-12 md:h-12">
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
