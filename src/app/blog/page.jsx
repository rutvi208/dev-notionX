import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import HeroBg from '@/../public/images/backgrounds/HeroBg.svg';
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import Blog1Thumbnail from '@/../public/images/Blog-page/Blog1-Thumbnail.webp';
import Blog2Thumbnail from '@/../public/images/Blog-page/Blog2-Thumbnail.webp';
import Blog3Thumbnail from '@/../public/images/Blog-page/Blog3-Thumbnail.webp';
import Blog4Thumbnail from '@/../public/images/Blog-page/Blog4-Thumbnail.webp';
import Blog5Thumbnail from '@/../public/images/Blog-page/Blog5-Thumbnail.webp';
import { siteConfig } from "@/app/config/site";

const blogPosts = [
  {
    id: 1,
    href: "blog/how-to-rank-your-website-or-brand-in-chatgpt-latest-strategy-guide",
    image: Blog1Thumbnail,
    tag: "#trending",
    title: "How to Rank Your Website or Brand in ChatGPT : Latest Strategy Guide",
    desc: "This post explains the fundamental shift happening in search behavior and why businesses need to adapt.",
    date: "Sep 12, 2025",
    readTime: "6 mins read",
    dateISO: "2025-09-12", // Added for proper datetime attribute
    authorName: "Manthan D.",
  },
  {
    id: 2,
    href: "blog/complete-guide-to-chatgpt-rank-tracking-tools-in-2025",
    image: Blog2Thumbnail,
    tag: "#trending",
    title: "Complete Guide to ChatGPT Rank Tracking Tools in 2025!",
    desc: "This post explains the fundamental shift happening in search behavior and why businesses need to adapt.",
    date: "Sep 25, 2025",
    readTime: "8 mins read",
    dateISO: "2025-09-25",
    authorName: "Manthan D.",
  },
  {
    id: 3,
    href: "blog/best-chatgpt-seo-agency-and-services-for-ai-search-ranking",
    image: Blog3Thumbnail,
    tag: "#trending",
    title: "Best ChatGPT SEO Agency & Services for AI Search Ranking",
    desc: "This post explains the fundamental shift happening in search behavior and why businesses need to adapt.",
    date: "Oct 13, 2025",
    readTime: "6 mins read",
    dateISO: "2025-10-13",
    authorName: "Manthan D.",
  },
  {
    id: 4,
    href: "blog/how-to-rank-in-ai-overview-understand-the-seo-vs-geo-vs-aeo",
    image: Blog4Thumbnail,
    tag: "#trending",
    title: "How to Rank in AI Overview : Understand the SEO vs GEO vs AEO",
    desc: "This post explains the fundamental shift happening in search behavior and why businesses need to adapt.",
    date: "Oct 25, 2025",
    readTime: "7 mins read",
    dateISO: "2025-10-25",
    authorName: "Manthan D.",
  },
  {
    id: 5,
    href: "blog/how-ai-overviews-are-stealing-your-traffic-recovery-&-ranking-strategies-for-2025",
    image: Blog5Thumbnail,
    tag: "#trending",
    title: "How AI Overviews Are Stealing Your Traffic Recovery & Ranking Strategies for 2025.",
    desc: "This post explains the fundamental shift happening in search behavior and why businesses need to adapt.",
    date: "Nov 18, 2025",
    readTime: "8 mins read",
    dateISO: "2025-11-18",
    authorName: "Manthan D.",
  },
];

export const metadata = {
  title: "Blog | NotionX - AI SEO & GEO Insights",
  keywords: "AI SEO, GEO, AEO, ChatGPT SEO, AI search ranking, notionX Blogs",
  description: "Read the latest insights on AI SEO, Generative Engine Optimization, AI search visibility, and modern AI-powered marketing strategies. Explore expert tips, guides, and trends from NotionX.",
  openGraph: {
    title: "NotionX Blog - AI SEO & GEO Insights",
    description: "Read the latest insights on AI SEO, Generative Engine Optimization, AI search visibility, and modern AI-powered marketing strategies. Explore expert tips, guides, and trends from NotionX.",
    url: `${siteConfig.url}${siteConfig.paths.blog}`,
    images: [`${siteConfig.url}${siteConfig.paths.images}/notionX.webp`],
    type: "website",
  },
  twitter: {
    title: "NotionX Blog - AI SEO & GEO Insights",
    description: "Read the latest insights on AI SEO, Generative Engine Optimization, AI search visibility, and modern AI-powered marketing strategies. Explore expert tips, guides, and trends from NotionX.",
    images: [`${siteConfig.url}${siteConfig.paths.images}/notionX.webp`],
    card: "summary_large_image",
  },
  alternates: {
    canonical: `${siteConfig.url}${siteConfig.paths.blog}`,
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

const KnowledgeHub = () => {
  // Enhanced blog schema with more structured data
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}${siteConfig.paths.blog}#blog`,
    url: `${siteConfig.url}${siteConfig.paths.blog}`,
    name: "NotionX Blog",
    headline: "The Future of Search Is Here",
    description: "Insights and strategies on AI SEO, GEO, and AI-powered brand discovery.",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo/navbar-logo.svg`,
        width: 600,
        height: 60
      },
    },
    blogPost: blogPosts.map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.desc,
      datePublished: post.dateISO,
      url: `${siteConfig.url}/${post.href}`,
      image: {
        "@type": "ImageObject",
        //url: `${siteConfig.url}${siteConfig.paths.blogImages}/${post.image}`,
        url: `${siteConfig.url}${post.image.src}`,
      },
      author: {
        "@type": "Person",
        name: post.authorName
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/logo/navbar-logo.svg`
        }
      }
    }))
  };

  // Breadcrumb schema for better navigation in search results
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item:  `${siteConfig.url}${siteConfig.paths.blog}`
      }
    ]
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Main Content */}
      <main className='relative w-full min-h-screen overflow-visible'>
        {/* Background Image with proper semantic structure */}
        <figure className='absolute inset-0' aria-hidden="true">
          <Image
            src={HeroBg}
            alt=""  // Empty alt since it's decorative
            role="presentation"
            fill
            loading="lazy"
            className='object-cover h-full w-full'
            priority={false}
          />
        </figure>

        {/* Content Container */}
        <div className='absolute inset-0 z-10'>
          {/* Navigation Component */}
          <Navbar />
          
          {/* Hero Section - Header for the page */}
          <header 
            className="my-10 sm:my-12 lg:my-20 2xl:my-24 container mx-auto justify-center place-items-center text-center"
            role="banner"
          >
            <h1 className="heading-font text-3xl lg:text-5xl">
              The Future of Search Is Here
            </h1>
            <p className="content-font text-base mt-2 lg:mt-3 sm:w-8/12 lg:w-7/12 xl:w-5/12 2xl:w-4/12 px-3 mx-auto text-center">
              Learn how to optimize for AI-powered discovery and become the answer AI recommends when customers search for businesses like yours.
            </p>
          </header>

          {/* Blog Posts Section */}
          <section 
            className='container mx-auto mb-10 lg:mb-20 2xl:mb-24 justify-center place-items-center'
            aria-labelledby="blog-posts-heading"
            //role="feed"
            aria-busy="false"
          >
            {/* Hidden heading for screen readers */}
            <h2 id="blog-posts-heading" className="sr-only">
              Latest Blog Posts and Articles
            </h2>
            
            <div 
              className='grid grid-col-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 xl:gap-7 mx-4 sm:mx-0 lg:mx-5'
              //role="list"
            >
              {blogPosts.map((blog, index) => (
                <article 
                  key={blog.id} 
                  className='p-3 lg:p-4 border border-[var(--stroke)] rounded-xl sm:rounded-[1.25rem] overflow-hidden
                  bg-[radial-gradient(ellipse_at_top_left,#FFF0E0_0%,#FCD0D4_30%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#FFF0E0_0%,#FCD0D4_30%,transparent_55%)]'
                  //role="listitem"
                  aria-posinset={index + 1}
                  aria-setsize={blogPosts.length}
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <div className='flex flex-col gap-1 sm:gap-2 h-full items-stretch'>
                    
                    {/* Featured Image */}
                    {/* <figure className='w-auto rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                      <Link 
                        href={blog.href} 
                        rel="noopener noreferrer"
                        aria-label={`Read article: ${blog.title}`}
                      >
                        <Image 
                          src={blog.image} 
                          alt={`Featured image for ${blog.title}`}
                          width={600}
                          height={400}
                          className="object-cover"
                          loading="lazy"
                          itemProp="image"
                        />
                      </Link>
                    </figure> */}
                    <figure className='w-auto rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                      <Link 
                        href={blog.href} 
                        rel="noopener noreferrer"
                        aria-label={`Read article: ${blog.title}`}
                      >
                        <div className="relative w-full aspect-[2.5/1]">
                          <Image
                            src={blog.image}
                            alt={`Featured image for ${blog.title}`}
                            //fill
                            width={700}
                            height={280}
                            sizes="(max-width: 768px) 100vw, 620px"
                                  // LCP image optimization
                            priority={index === 0}                // Enables eager loading for LCP automatically
                            fetchPriority={index === 0 ? "high" : "auto"}  // Correct for Next.js 14+
                            className="object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                            //loading="lazy"
                            itemProp="image"
                          />
                        </div>
                      </Link>
                    </figure>

                    {/* Article Content Container */}
                    <div className='bg-white flex flex-col justify-between flex-grow p-3 lg:p-4 rounded-b-xl sm:rounded-b-[0.875rem]'>
                      {/* Article Header */}
                      <header>
                        {/* Category Tag */}
                        <span 
                          className="text-sm text-left text-[var(--foreground)] content-font inline-block"
                          itemProp="keywords"
                        >
                          {blog.tag}
                        </span>
                        
                        {/* Article Title */}
                        <h3
                          className="heading-font font-medium text-lg lg:text-xl leading-5 sm:leading-6 tracking-[-0.06rem] my-2"
                          itemProp="headline"
                        >
                          <Link 
                            href={blog.href} 
                            rel="noopener noreferrer"
                            className="hover:text-[var(--cta)] transition-colors duration-200"
                            itemProp="url"
                          >
                            {blog.title}
                          </Link>
                        </h3>
                      </header>
                      
                      {/* Article Description */}
                      <p 
                        className="text-sm sm:text-base text-[#0f0a08c1] content-font mb-2 lg:mb-4"
                        itemProp="description"
                      >
                        {blog.desc}
                      </p>

                      {/* Article Footer */}
                      <footer className='flex sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row justify-between items-center mt-auto'>
                        {/* Publication Date and Read Time */}
                        <div className='text-[#878483] content-font text-xs'>
                          <span className="author" itemProp="author">
                            By <strong>{blog.authorName}</strong>
                          </span>
                          <span aria-hidden="true"> | </span>
                          <time 
                            dateTime={blog.dateISO}
                            itemProp="datePublished"
                          >
                            {blog.date}
                          </time>
                          <span aria-hidden="true"> | </span>
                          <span itemProp="timeRequired">
                            {blog.readTime}
                          </span>
                        </div>
                        
                        {/* Read More Link */}
                        <Link 
                          href={blog.href}
                          className='cursor-pointer group text-[var(--cta)] content-font text-sm sm:text-lg flex items-center font-bold hover:text-[var(--cta)] transition duration-300'
                          aria-label={`Read more about ${blog.title}`}
                        >
                          <span>Read More</span>
                          {/* Hidden descriptive text for SEO + screen readers */}
                          <span className="sr-only">
                            about {blog.title}
                          </span>
                          <span 
                            className='text-[var(--cta)] ps-1 text-base sm:text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1'
                            aria-hidden="true"
                          >
                            <HiMiniArrowSmallRight />
                          </span>
                        </Link>
                      </footer>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            
           </section>

           {/* Footer Component */}
           <Footer />
         </div>
       </main>
     </>
   );
 };

 export default KnowledgeHub;