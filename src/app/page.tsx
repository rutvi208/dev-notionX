import HeroSection from '@/app/components/HeroSection';
import Whyus from "@/app/components/Whyus";
import Howitworks from '@/app/components/Howitworks';
import Plans from '@/app/components/Plans';
import Process from '@/app/components/Process';
import GeoSeo from '@/app/components/GeoSeo';
import CaseStudy from '@/app/components/CaseStudy';
import Cta from '@/app/components/CTA';
import Faq from '@/app/components/FAQ';
import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';
import ScrollButton from '@/app/components/ScrollButton';
import type { Metadata } from "next";
import { siteConfig } from '@/app/config/site';
import FAQSchema from '@/app/components/FAQSchema';

const faqs = [
  {
    question: "What is GEO and how is it different from traditional SEO?",
    answer:
      "GEO focuses on ranking in AI generated answers across platforms like Google AI Overviews, ChatGPT, and Perplexity, whereas traditional SEO targets search engines. With our GEO services, your brand becomes part of the direct AI answer.",
  },
  {
    question: "What's included in the AI Visibility Audit?",
    answer:
      "Our AI Visibility Audit reviews how your business appears across AI platforms, identifies gaps in visibility, analyzes competitor presence, and delivers a prioritized action plan. You'll see where you stand today and what's required to secure top placement in AI-generated results.",
  },
  {
    question: "How quickly will I see results from GEO services?",
    answer:
      "Most clients begin noticing visibility improvements within 60-90 days, depending on competition and industry. Full impact — where your brand consistently appears in AI-generated answers — typically takes 3-4 months of optimization.",
  },
  {
    question: "Can I cancel my GEO service anytime?",
    answer:
      "Yes. Our services are flexible, and you can cancel at any time. However, since GEO requires consistent optimization, we recommend committing to at least 3 months to see lasting results.",
  },
  {
    question: "Which AI platforms do you optimize for?",
    answer:
      "We optimize for Google AI Overviews, ChatGPT, and other leading AI-driven platforms.",
  },
  {
    question: "How do you measure GEO success?",
    answer:
      "Yes. AI platforms are rapidly expanding, and our strategies evolve with them. We continuously test and adapt to new algorithms, ensuring your brand stays ahead of competitors in emerging AI search environments.",
  },
  {
    question: "Is GEO future proof as AI evolves?",
    answer:
      "Yes. AI platforms are rapidly expanding, and our strategies evolve with them. We continuously test and adapt to new algorithms, ensuring your brand stays ahead of competitors in emerging AI search environments.",
  },
  {
    question: "What industries benefit the most from GEO?",
    answer:
      "GEO is highly effective for finance, healthcare, legal, real estate, e-commerce, SaaS, and local service businesses — any industry where being the trusted AI answer wins customer trust and conversions.",
  },
  {
    question: "Do I still need traditional SEO if I invest in GEO?",
    answer:
      " Yes, but their roles are different. Traditional SEO helps with long-term organic traffic from search engines, while GEO ensures your brand is visible inside AI generated answers. Together, they create a complete search strategy for today and the future.",
  },
  {
    question: "Do you know if GEO will work with my existing marketing strategy?",
    answer:
      "Absolutely. GEO is designed to complement SEO, paid ads, and content marketing. It integrates seamlessly with your current efforts to boost overall ROI.",
  }
];

export const metadata: Metadata = {
  title: `AI SEO & Generative Engine Optimization for Brands - ${siteConfig.name}`,
  description:
    "NotionX helps brands get discovered in AI search results. We specialize in AI SEO, GEO and improving visibility across AI-powered platforms like ChatGPT, Perplexity, and Google AI.",
  keywords: [
    "AI SEO",
    "Generative Engine Optimization",
    "GEO",
    "AI search optimization",
    "ChatGPT SEO",
    "Perplexity optimization",
    "AI-powered search",
    "brand visibility AI"
  ],
  openGraph: {
    url: siteConfig.url,
    title: `AI SEO & Generative Engine Optimization for Brands - ${siteConfig.name}`,
    description: "NotionX helps brands get discovered in AI search results. We specialize in AI SEO, GEO and improving visibility across AI-powered platforms.",
    images: [`${siteConfig.url}${siteConfig.paths.images}/notionX.webp`],
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `AI SEO & Generative Engine Optimization for Brands - ${siteConfig.name}`,
    description: "NotionX helps brands get discovered in AI search results. We specialize in AI SEO, GEO and improving visibility across AI-powered platforms.",
    images: [`${siteConfig.url}${siteConfig.paths.images}/notionX.webp`],
    creator: "@notionxai",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${siteConfig.url}/`
    }
  ]
};

// WebPage Schema with enhanced details
const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/#webpage`,
  "url": `${siteConfig.url}/`,
  "name": "AI SEO & Generative Engine Optimization for Brands",
  "description":
    "NotionX helps brands get discovered in AI search results. We specialize in AI SEO, GEO and improving visibility across AI-powered platforms.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`
  },
  "about": {
    "@type": "Thing",
    "name": "AI SEO and Generative Engine Optimization"
  },
  "publisher": {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteConfig.url}/images/logo/navbar-logo.svg`
    }
  },
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "ReadAction",
    "target": [`${siteConfig.url}/`]
  }
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI SEO & Generative Engine Optimization",
  "provider": {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI SEO Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Professional GEO Plan",
          "description": "Technical SEO Audit, Local GEO Enhancement, Schema development, Executive Monthly Reviews, Monthly Strategy Reports, Monthly 30 Minutes Strategic Call"
        },
        "price": "1499",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1499",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        },
        "availability": "https://schema.org/InStock",
        "url": `${siteConfig.url}/#pricing`,
        "eligibleRegion": {
          "@type": "Place",
          "name": "Worldwide"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise GEO Plan",
          "description": "Everything in Professional, Custom GEO Strategy, Custom Schema Development, Competitor GEO Analysis, Structured Data Testing, Dedicated account manager, Monthly 1 Hour Strategic Call"
        },
        "price": "2499",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "2499",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        },
        "availability": "https://schema.org/InStock",
        "url": `${siteConfig.url}/#pricing`,
        "eligibleRegion": {
          "@type": "Place",
          "name": "Worldwide"
        }
      }
    ]
  },
  "serviceOutput": [
    "Improved AI search visibility",
    "Increased brand mentions in ChatGPT",
    "Higher ranking in Google AI Overviews",
    "Enhanced Perplexity platform presence"
  ]
};

// FAQ Schema - Replace with actual FAQs from your FAQ component
// const faqSchema = {
//   "@context": "https://schema.org",
//   "@type": "FAQPage",
//   "mainEntity": [
//     {
//       "@type": "Question",
//       "name": "What is AI SEO?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "AI SEO is the practice of optimizing your content and website to rank well in AI-powered search engines and platforms like ChatGPT, Perplexity, and Google's AI Overviews."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "What is Generative Engine Optimization (GEO)?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Generative Engine Optimization (GEO) is the process of optimizing your content to be featured and cited by AI language models and generative search engines when they answer user queries."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "How does NotionX help with AI search visibility?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "NotionX helps brands optimize their content, improve their digital presence, and implement strategies specifically designed to increase visibility in AI-powered search results and citations."
//       }
//     }
//     // Add more FAQs from your actual FAQ component
//   ]
// };

export default function Home() {
  return (
    <div>
      {/* Enhanced Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      /> */}

      

      <ScrollToTop />
      <ScrollButton/>

      {/* Semantic HTML with proper landmarks */}
      <header id="/">
        <HeroSection/>
      </header>

      <main>
        <section aria-label="Why choose NotionX">
          <Whyus/>
        </section>

        <section id="howitworks" className="scroll-m-10 lg:scroll-m-20" aria-label="How it works">
          <Howitworks/>
        </section>

        <section id="pricing" aria-label="Pricing plans">
          <Plans/>
        </section>

        <section aria-label="Our process">
          <Process/>
        </section>

        <section aria-label="GEO and SEO insights">
          <GeoSeo/>
        </section>

        <section aria-label="Case studies">
          <CaseStudy/>
        </section>

        <section aria-label="Call to action">
          <Cta/>
        </section>

        <section aria-label="Frequently asked questions">
          <Faq/>
          <FAQSchema faqs={faqs} />
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}