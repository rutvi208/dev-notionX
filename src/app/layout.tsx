import type { Metadata } from "next";
import { siteConfig } from '@/app/config/site';
import "./globals.css";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google"; // <-- correct names

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  // Bricolage is a variable font — no need to pass weights; still you can pass if needed
  display: "swap",
  variable: "--font-bricolage",
  preload: true, // Ensures font is prioritized
  adjustFontFallback: true, // Reduces layout shift
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-sans-pro", // keep your existing var name if you like
  preload: true, // Ensures font is prioritized
  adjustFontFallback: true, // Reduces layout shift
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `AI SEO & Generative Engine Optimization for Brands - ${siteConfig.name}`,
    template: "%s | NotionX",
  },
  description:
    "NotionX helps brands get discovered in AI search results. We specialize in AI SEO, GEO and improving visibility across AI-powered platforms.",
  keywords: [
    "AI SEO",
    "Generative Engine Optimization",
    "GEO",
    "AI Marketing",
    "SEO for AI Search",
    "ChatGPT SEO",
    "Perplexity optimization",
    "AI search visibility",
    "NotionX",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `AI SEO & Generative Engine Optimization for Brands - ${siteConfig.name}`,
    description: "NotionX helps brands get discovered in AI search results.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.paths.images}/notionX.webp`,
        width: 1200,
        height: 630,
        alt: "NotionX AI SEO - Get discovered in AI search results",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotionX — AI SEO for Brands",
    description: "Discover how NotionX helps brands rank in AI-powered search engines.",
    images: [`${siteConfig.url}${siteConfig.paths.images}/notionX.webp`],
    creator: "@notionxai",
    site: "@notionxai",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon16.png", sizes: "16x16", type: "image/png" },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name,
    "url": `${siteConfig.url}/`,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteConfig.url}/images/logo/navbar-logo.svg`,
      "width": "250",
      "height": "60"
    },
    "sameAs": Object.values(siteConfig.social),
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    "url": `${siteConfig.url}/`,
    "name": siteConfig.name,
    "description": "NotionX helps brands get discovered in AI search results through AI SEO and Generative Engine Optimization.",
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${bricolage.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KK4TC3HGNP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KK4TC3HGNP', { 
                send_page_view: false,
                anonymize_ip: true 
              });
            `,
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}