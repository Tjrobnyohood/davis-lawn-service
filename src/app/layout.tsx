import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. DYNAMIC VIEWPORT CONFIG (Tactical Yellow Theme for Mobile)
export const viewport: Viewport = {
  themeColor: "#DFFF00",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// 2. SEARCH & SOCIAL METADATA (DAVIS.png Integration)
export const metadata: Metadata = {
  title: "Davis Lawn Service | Elite Property Maintenance OKC",
  description: "Professional multi-unit lawn care dispatch. Specializing in high-precision turf management across Edmond, Moore, and the OKC Metro.",
  keywords: ["Lawn Care OKC", "Mowing Edmond OK", "Davis Lawn Service", "Oklahoma City Yard Maintenance", "405 Lawn Care"],
  authors: [{ name: "Davis Lawn Service" }],
  metadataBase: new URL("https://davis-lawn-service.vercel.app"), // Replace with actual domain once live
  
  openGraph: {
    title: "Davis Lawn Service // 405 Sector",
    description: "Multi-unit dispatch for premium Oklahoma lawn care. Owner-verified quality.",
    url: "https://davis-lawn-service.vercel.app",
    siteName: "Davis Lawn Service",
    images: [
      {
        url: "https://davis-lawn-service.vercel.app/og-image.png", // Your sharp contrasting metadata image
        width: 1200,
        height: 630,
        alt: "Davis Lawn Service Tactical Turf Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },

  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* 3. GOOGLE LOCAL BUSINESS SCHEMA (SEO CRITICAL) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Davis Lawn Service",
              "alternateName": "Davis Lawn OKC",
              "description": "Professional lawn maintenance and tactical turf management in Oklahoma City.",
              "url": "https://davis-lawn-service.vercel.app",
              "telephone": "+14052594688", // Update with his real number
              "priceRange": "$$",
              "address": {
                "@type": "17200 South Sunnylane Road, Norman, OK 73071",
                "addressLocality": "Norman",
                "addressRegion": "OK",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "35.4676",
                "longitude": "-97.5164"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "07:00",
                  "closes": "19:00"
                }
              ],
              "areaServed": ["Oklahoma City", "Edmond", "Moore", "The Village", "Nichols Hills"]
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}