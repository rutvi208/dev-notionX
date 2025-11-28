
import Image from 'next/image';
import Arrow from '@/../public/images/OurProcess/Arrow.svg';
// import ProcessBg from './../../assets/backgrounds/ProcessBg.svg';
import LightStar from '@/../public/images/OurProcess/light-star.svg';
import MediumStar from '@/../public/images/OurProcess/medium-star.svg';
import DarkStar from '@/../public/images/OurProcess/dark-star.svg'; 
import ProcessBg1 from '@/../public/images/OurProcess/Process-bg1.webp';
import ProcessBg2 from '@/../public/images/OurProcess/Process-bg2.webp';
import ProcessBg3 from '@/../public/images/OurProcess/Process-bg3.webp';
import ProcessBg4 from '@/../public/images/OurProcess/Process-bg4.webp';

const processSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Optimize for AI Search with GEO",
  "description": "Our 4-step process to dominate AI-powered search results",
  "totalTime": "PT12W",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "1499"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "GEO Process",
      "text": "How we get your business featured in AI responses.",
      "itemListElement": [
        {
          "@type": "AIVisibilityAudit",
          "text": "We analyze your current AI presence and identify critical citation opportunities."
        },
        {
          "@type": "AISchemaDevelopment",
          "text": "We create structured data that AI engines prioritize for citation."
        },
        {
          "@type": "CitationBuilding",
          "text": "We establish your business as the authoritative source across the web."
        },
        {
          "@type": "AIMonitoringAndOptimization",
          "text": "We continuously track and improve your AI visibility."
        },
      ]
    }
    // ... repeat for other steps
  ]
}

const Process = () => {

    const processSteps = [
        {
          bg: ProcessBg1,
          title: "AI Visibility Audit",
          desc: "We analyze your current AI presence and identify critical citation opportunities.",
          items: [
            "AI mention tracking",
            "Competitor citation analysis",
            "AI answer gap identification"
          ]
        },
        {
            bg: ProcessBg2,
            title: "AI Schema Development",
            desc: "We create structured data that AI engines prioritize for citation.",
            items: [
              "LLM-optimized content creation",
              "Entity relationship mapping",
              "Prompt-aligned website updates"
            ]
          },
          {
            bg: ProcessBg3,
            title: "Citation Building",
            desc: "We establish your business as the authoritative source across the web.",
            items: [
              "AI training dataset inclusion",
              "Strategic content partnerships",
              "Authority signal amplification"
            ]
          },
          {
            bg: ProcessBg4,
            title: "AI Monitoring & Optimization",
            desc: "We continuously track and improve your AI visibility.",
            items: [
              "Weekly AI mention reports",
              "Prompt engineering updates",
              "Competitive position defense"
            ]
          },
      ];

    // Number of stars per row (enough to cover full screen width)
  const starCount = 30;

  // Utility to generate one zig-zag row
  const renderRow = (StarImage, rowKey) =>
    Array.from({ length: starCount }, (_, i) => (
      <div
        key={`${rowKey}-${i}`}
        className={`w-20 h-20 flex items-center justify-center ${
          i % 2 === 0 ? "translate-y-0" : "translate-y-8"
        }`}
      >
        <Image src={StarImage} alt="star" width={60} height={60} />
      </div>
    ));

    return (
        <section className='relative bg-white' aria-labelledby="our-process">
          {/* Enhanced Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
            />

            <div className="absolute inset-x-0 bottom-0 w-full flex flex-col items-center -space-y-2 overflow-hidden" aria-hidden="true">
                
                <div className="flex flex-row justify-center flex-nowrap overflow-visible opacity-50">
                    {renderRow(LightStar, "light")}
                </div>

                <div className="flex flex-row justify-center flex-nowrap overflow-visible">
                    {renderRow(LightStar, "light")}
                </div>

                <div className="flex flex-row justify-center flex-nowrap overflow-visible">
                    {renderRow(MediumStar, "medium")}
                </div>

                <div className="flex flex-row justify-center flex-nowrap overflow-visible">
                    {renderRow(DarkStar, "dark")}
                </div>
            </div>

            {/* content */}
            <div className="relative z-auto mx-auto container py-12 sm:py-20 lg:py-28 px-5 lg:px-8 2xl:px-0">
                <header>
                    <h2 id="our-process" className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">Our GEO Process</h2>
                    <p className="text-lg lg:text-xl content-font mt-3">How we get your business featured in AI responses.</p>
                </header>

                <div className="mt-12 lg:mt-20">
                    <ol className="grid gap-4 sm:gap-3 md:grid-cols-2 xl:grid-cols-4 list-none">
                        {processSteps.map((step, index) => (
                        <li key={index} className='relative overflow-hidden border-[0.0625rem] border-[var(--stroke)] rounded-2xl'>
                            <Image
                            src={step.bg}
                            alt="Step background"
                            loading="lazy"
                            className='absolute inset-0 object-cover h-full w-full'
                            aria-hidden="true"
                            />
                            <article className="relative z-10 p-3 lg:p-5 h-full flex flex-col justify-between">
                            <header>
                                <h3 className="heading-font font-semibold text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2">
                                {step.title}
                                </h3>
                                <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                {step.desc}
                                </p>
                            </header>
                            
                            <ul className="mt-10 sm:mt-12 lg:mt-18 flex flex-col space-y-2 items-start list-none">
                                {step.items.map((item, i) => (
                                <li key={i} className='flex flex-row space-x-3'>
                                    <Image src={Arrow} alt="arrow" aria-hidden="true" />
                                    <span className="content-font text-base">{item}</span>
                                </li>
                                ))}
                            </ul>
                            </article>
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Process;