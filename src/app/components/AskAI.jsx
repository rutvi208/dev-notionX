"use client";

import Link from "next/link";
import Image from "next/image";
import ChatGPT from '@/../public/images/HeroSection/ChatGPT.svg';
import Perplexity from '@/../public/images/HeroSection/Perplexity.svg';
import Grok from '@/../public/images/HeroSection/Grok-logo.svg';
import Claude from '@/../public/images/HeroSection/Claude-logo.svg';

export default function AskAI() {
    return (
        <section
            className="sm:w-[56.25rem] container mx-auto mt-8 rounded-2xl p-8 lg:p-12 text-center mb-8 lg:mb-12
            bg-cta-gradient"
            aria-labelledby="middle-cta-heading"
        >
            <h3
                id="middle-cta-heading"
                className="heading-font text-xl lg:text-2xl mb-4 sm:mb-8 text-[var(--foreground)]"
            >
                Ask AI to summarise this article
            </h3>
            <div className="grid grid-cols-2 sm:flex justify-center items-center gap-6 sm:gap-10">
                <Link
                    href="#"
                    target="_blank"
                    className="flex items-center gap-2"
                    aria-label="Get your free AI visibility audit"
                >
                    <Image src={ChatGPT} alt="ChatGPT Logo" className="h-6 w-6 lg:h-8 lg:w-8" />
                    <span>ChatGPT</span>
                </Link>
                <Link
                    href="#"
                    target="_blank"
                    className="flex items-center gap-2"
                    aria-label="Get your free AI visibility audit"
                >
                    <Image src={Claude} alt="ChatGPT Logo" className="h-6 w-6 lg:h-8 lg:w-8" />
                    <span>Claude</span>
                </Link>
                <Link
                    href="#"
                    target="_blank"
                    className="flex items-center gap-2"
                    aria-label="Get your free AI visibility audit"
                >
                    <Image src={Grok} alt="ChatGPT Logo" className="h-6 w-6 lg:h-8 lg:w-8" />
                    <span>Grok</span>
                </Link>
                <Link
                    href="#"
                    target="_blank"
                    className="flex items-center gap-2"
                    aria-label="Get your free AI visibility audit"
                >
                    <Image src={Perplexity} alt="Perplexity Logo" className="h-6 w-6 lg:h-8 lg:w-8" />
                    <span>Perplexity</span>
                </Link>
            </div>
            
        </section>
    );
}
