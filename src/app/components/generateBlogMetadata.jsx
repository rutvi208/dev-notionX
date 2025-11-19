import { siteConfig } from "@/app/config/site";

export function generateBlogMetadata({
    title,
    description,
    slug,
    imageName, 
    author,
    section,
    publishedTime,
    keywords = []
  }) {
    const baseUrl = siteConfig.url;
    const url = `${baseUrl}${siteConfig.paths.blog}/${slug}`;
    const imageUrl = `${baseUrl}${siteConfig.paths.blogImages}/${imageName}`;
  
    return {
      title: `${title} | ${siteConfig.name}`,
      description,
      keywords,
      openGraph: {
        title: `${title} | ${siteConfig.name}`,
        description,
        url,
        images: [imageUrl],
        type: "article",
        article: {
          published_time: publishedTime,
          author,
          section
        }
      },
      twitter: {
        title: `${title} | ${siteConfig.name}`,
        description,
        images: [imageUrl],
      },
      alternates: {
        canonical: url
      }
    };
  }