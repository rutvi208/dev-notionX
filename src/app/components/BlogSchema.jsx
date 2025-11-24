export default function BlogSchema({
    url,
    headline,
    description,
    image,
    datePublished,
    dateModified,
    authorName,
    authorUrl,
    publisherLogo,
    articleBody,
    articleSection,
    keywords = [],
    wordCount,
  }) {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      headline,
      description,
      image: {
        "@type": "ImageObject",
        url: image,
        width: 1200,
        height: 630,
      },
      datePublished,
      dateModified,
      author: {
        "@type": "Person",
        name: authorName,
        url: authorUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "NotionX",
        logo: {
          "@type": "ImageObject",
          url: publisherLogo,
          width: 250,
          height: 60,
        },
      },
      url,
      articleBody,
      articleSection,
      keywords,
      ...(wordCount && { wordCount }),
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    );
  }
  