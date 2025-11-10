"use client";

import {useState } from 'react';

const faqs = [
  {
    question: "How do you rank your website in Chat GPT?",
    answer:
      "Focus on - content quality, structured data, and brand mentions. Make sure your website is easy for AI to - understand and reference.",
  },
  {
    question: "How to rank a brand on Chat GPT?",
    answer:
        "Use PR, influencer marketing, and monitor sentiment. Consistent brand visibility across online platforms helps - boost recognition.",
  },
  {
    question: "How to rank on Chat GPT for products?",
    answer:
      "Implement product schema and encourage user-generated content. Clear product details and reviews make it easier for Chat GPT to feature you.",
  },
  {
    question: "How to track Chat GPT visibility in search results?",
    answer:
      "Use brand monitoring tools and citation trackers. Regular audits can help you. Better spot gaps and improve performance.",
  },
  {
    question: "How to rank on Chat GPT in 2025?",
    answer:
      "Stay updated with - AI trends. Optimize for conversational relevance. Adapt as Chat GPT's algorithms evolve.",
  }
];

const BlogFAQ = () => {

const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
setOpenIndex(openIndex === index ? null : index);
};

  return (
    <div>
        <div className="container mx-auto place-items-center pt-20 px-5 lg:px-8 2xl:px-0">
            <h1 className="heading-font text-center font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">Quick Answers</h1>
            <p className="text-lg lg:text-xl text-center content-font mt-3">Everything you need to know about GEO and AI search optimization.</p>
                
            <div className="grid grid-cols-1 gap-3 lg:gap-5 my-16 lg:my-20 lg:w-[56.25rem]">
                {faqs.map((faq, index) => (
                    <div key={index} className="self-start">
                    <div className="rounded-lg border border-[var(--stroke)] text-lg lg:text-xl px-6">
                        {/* Question */}
                        <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex flex-row items-center justify-between py-4 text-left cursor-pointer"
                        >
                        <p className="content-font">{faq.question}</p>
                        <span className="text-[#AD8775] text-2xl 2xl:text-3xl">
                            {openIndex === index ? "-" : "+"}
                        </span>
                        </button>

                        {/* Answer */}
                        <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index ? "max-h-max" : "max-h-0"
                        }`}
                        >
                        <div className="pb-4">
                            <p className="text-base lg:text-lg xl:text-xl text-[#333]">
                            {faq.answer}
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default BlogFAQ