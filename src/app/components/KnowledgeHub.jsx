"use client";

import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Blog1Thumbnail from '@/../public/images/Blog-page/Blog1-Thumbnail.webp';
import Blog2Thumbnail from '@/../public/images/Blog-page/Blog2-Thumbnail.webp';
import Blog3Thumbnail from '@/../public/images/Blog-page/Blog3-Thumbnail.webp';

const CaseStudy = () => {

    const blogPosts = [
        {
            id: 1,
            href: "/blog/how-to-rank-your-website-or-brand-in-chatgpt-latest-strategy-guide",
            image: Blog1Thumbnail,
            tag: "#trending",
            title: "How to Rank Your Website or Brand in ChatGPT : Latest Strategy Guide",
            desc: "In the age of AI-powered search, visibility in Chat GPT is becoming - as crucial as ranking on Google. With 700 million weekly users interacting with Chat GPT - brands and websites must adapt to this new paradigm.",
            date: "Sep 12, 2025",
            readTime: "6 mins read",
            authorName: "Manthan D.",
        },
        {
            id: 2,
            href: "/blog/best-chatgpt-seo-agency-and-services-for-ai-search-ranking",
            image: Blog3Thumbnail,
            tag: "#trending",
            title: "Best ChatGPT SEO Agency & Services for AI Search Ranking",
            desc: "With ChatGPT, Perplexity, and other AI search engines altering how people search, companies face a new contest. If AI-powered search cannot find your content - your brand does not exist. Traditional SEO tactics will not earn you a spot in AI-powered answers.",
            date: "Oct 13, 2025",
            readTime: "6 mins read",
            authorName: "Manthan D.",
        },
        {
            id: 3,
            href: "/blog/complete-guide-to-chatgpt-rank-tracking-tools-in-2025",
            image: Blog2Thumbnail,
            tag: "#trending",
            title: "Complete Guide to ChatGPT Rank Tracking Tools in 2025!",
            desc: "The way people search online is evolving. AI tools like ChatGPT now influence how content is discovered. Traditional rank tracking methods no longer capture the full picture.",
            date: "Sep 25, 2025",
            readTime: "8 mins read",
            authorName: "Manthan D.",
        },
        ];
  
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white to-[#FDF7F3] scroll-m-4 sm:scroll-m-10" aria-labelledby="knowledge-hub">
        {/* Title Section */}
        <div className="mx-auto container pt-16 sm:pt-20 lg:pt-28 px-5 lg:px-8 2xl:px-0 mb-12 sm:mb-20 xl:mb-28">
            <div>
            <h2 className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">
                Knowledge Hub
            </h2>
            <p className="text-lg lg:text-xl content-font mt-3">
                Expert insights on dominating AI-powered search and becoming the answer customers discover.
            </p>
            </div>
        </div>

        {/* read more blogs */}
        <div className='container mx-auto justify-center place-items-center'>
            <div className='grid grid-col-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 xl:gap-7 px-4 lg:px-8 2xl:px-0'>

                {blogPosts.map((blog) => (
                    <div key={blog.id} className='p-3 lg:p-4 border border-[var(--stroke)] rounded-xl sm:rounded-[1.25rem] overflow-hidden
                    bg-[radial-gradient(ellipse_at_top_left,#FFF0E0_0%,#FCD0D4_30%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#FFF0E0_0%,#FCD0D4_30%,transparent_55%)]'>

                    <div className='flex flex-col gap-1 sm:gap-2 h-full items-stretch'>

                        {/* Image */}
                        <Link href={blog.href} rel="noopener noreferrer"
                        className='w-auto lg:h-44 rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                        <Image src={blog.image} alt={blog.title} className="object-cover h-full" />
                        </Link>

                        {/* Content */}
                        <Link href={blog.href} rel="noopener noreferrer"
                        className='bg-white flex flex-col justify-between flex-grow p-3 lg:p-4 rounded-b-xl sm:rounded-b-[0.875rem]'>

                        <span className="text-sm text-left text-[var(--foreground)] content-font">{blog.tag}</span>
                        <h3 className="heading-font font-medium text-lg lg:text-xl leading-5 sm:leading-6 tracking-[-0.06rem] my-2 hover:text-[var(--cta)]">{blog.title}</h3>
                        <p className="text-sm sm:text-base text-[#0f0a08c1] content-font mb-2 lg:mb-4">{blog.desc}</p>

                        <div className='flex sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row justify-between items-center mt-auto'>
                            <p className='text-[#444444] content-font text-xs'>by <strong>{blog.authorName}</strong> &nbsp; | &nbsp;{blog.date} &nbsp; | &nbsp; {blog.readTime}</p>
                            <p className='cursor-pointer group text-[var(--cta)] content-font text-sm sm:text-lg flex items-center font-bold hover:text-[var(--cta)] transition duration-300'>
                            Read More
                            <span className='text-[var(--cta)] ps-1 text-base sm:text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1'>
                                <HiMiniArrowSmallRight />
                            </span>
                            </p>
                        </div>
                        </Link>
                    </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='mt-8 sm:mt-10 lg:mt-12 mb-12 sm:mb-20 xl:mb-28 container mx-auto flex justify-center'>
            <Link href="/blog" className='group py-2.5 px-10 bg-[var(--cta)] cursor-pointer text-white flex items-center rounded-full text-base lg:text-lg font-bold hover:bg-white hover:text-[var(--cta)] hover:border-[0.0625rem] hover:border-[var(--cta)] transition duration-300' aria-label="Book a GEO Strategy Call">
                View All Blogs <span className='text-white group-hover:text-[var(--cta)] ps-2 text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1' aria-hidden="true"><HiMiniArrowSmallRight /></span>
            </Link>
        </div>
        
    </section>
  );
};

export default CaseStudy;