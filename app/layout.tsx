import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://ahcdigitalsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AHC Digital Solutions | Özel Yazılım, Android, Web ve SEO",
    template: "%s | AHC Digital Solutions",
  },
  description:
    "AHC Digital Solutions; özel yazılım, Android uygulamaları, web tasarım ve geliştirme, yönetim panelleri, sistem entegrasyonları ve Google SEO çözümleri geliştirir.",
  applicationName: "AHC Digital Solutions",
  authors: [{ name: "AHC Digital Solutions" }],
  creator: "AHC Digital Solutions",
  publisher: "AHC Digital Solutions",
  category: "technology",
  keywords: [
    "AHC Digital Solutions",
    "özel yazılım",
    "Android uygulama geliştirme",
    "web tasarım",
    "web geliştirme",
    "yönetim paneli",
    "admin panel",
    "Google SEO",
    "yazılım geliştirme",
    "dijital çözümler",
    "Türkiye yazılım şirketi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "AHC Digital Solutions",
    title: "AHC Digital Solutions | Dijital Ürün ve Yazılım Geliştirme",
    description:
      "Özel yazılım, Android uygulamaları, web teknolojileri, yönetim sistemleri ve Google SEO çözümleri.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AHC Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AHC Digital Solutions | Dijital Ürün ve Yazılım Geliştirme",
    description:
      "Özel yazılım, Android uygulamaları, web teknolojileri, yönetim sistemleri ve Google SEO çözümleri.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#03050c",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AHC Digital Solutions",
  url: siteUrl,
  logo: `${siteUrl}/ahc-master-logo.png`,
  description:
    "Özel yazılım, Android uygulamaları, web teknolojileri, yönetim sistemleri ve Google SEO çözümleri geliştiren teknoloji markası.",
  areaServed: {
    "@type": "Country",
    name: "Türkiye",
  },
  knowsAbout: [
    "Özel Yazılım",
    "Android Uygulama Geliştirme",
    "Web Tasarım ve Geliştirme",
    "Yönetim Panelleri",
    "Sistem Entegrasyonları",
    "Google SEO",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AHC Digital Solutions",
  url: siteUrl,
  inLanguage: "tr-TR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
