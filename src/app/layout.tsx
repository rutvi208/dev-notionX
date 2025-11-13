import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AI SEO & Generative Engine Optimization for Brands - NotionX",
    template: "%s | NotionX",
  },
  description:
    "NotionX helps brands get discovered in AI search results. We specialize in AI SEO, GEO and improving visibility across AI-powered platforms.",
  keywords: [
    "AI SEO",
    "Generative Engine Optimization",
    "AI Marketing",
    "SEO for AI Search",
    "NotionX",
  ],
  openGraph: {
    title: "AI SEO & Generative Engine Optimization for Brands - NotionX",
    description:"NotionX helps brands get discovered in AI search results.",
    url: "https://dev-notionx-v2.netlify.app/",
    siteName: "NotionX",
    images: [
      {
        url: "https://dev-notionx-v2.netlify.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NotionX AI SEO",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotionX – AI SEO for Brands",
    description:"Discover how NotionX helps brands rank in AI-powered search engines.",
    images: ["https://dev-notionx-v2.netlify.app/images/og-image.jpg"],
    creator: "@notionxai",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
  metadataBase: new URL("https://dev-notionx-v2.netlify.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NotionX",
    url: "https://dev-notionx-v2.netlify.app/",
    logo: "https://dev-notionx-v2.netlify.app/logo.png",
    sameAs: [
      "https://twitter.com/NotionXAI",
      "https://www.linkedin.com/company/notionxai/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://dev-notionx-v2.netlify.app/",
    name: "NotionX",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dev-notionx-v2.netlify.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <script defer src="https://www.googletagmanager.com/gtag/js?id=G-KK4TC3HGNP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KK4TC3HGNP', { send_page_view: false });
            `,
          }}
        />

        {/* ✅ JSON-LD Schema for entire site */}
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
        {children}
      </body>
    </html>
  );
}
