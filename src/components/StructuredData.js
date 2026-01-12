import React from 'react';

export default function StructuredData({ item, contentType }) {
  // Handle missing item data
  if (!item) {
    return null;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": contentType === 'maps' ? "Map" : "SoftwareApplication",
    "name": item.title,
    "description": item.description,
    "image": item.thumbnail,
    "author": {
      "@type": "Person",
      "name": item.author?.name,
      "image": item.author?.avatar
    },
    "datePublished": item.datePublished || new Date().toISOString(),
    "dateModified": item.dateModified || new Date().toISOString(),
    "applicationCategory": "Game",
    "operatingSystem": "Minecraft Bedrock Edition",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": item.rating ? {
      "@type": "AggregateRating",
      "ratingValue": item.rating,
      "reviewCount": item.reviewCount || 1
    } : undefined,
    "keywords": item.tags?.join(", "),
    "downloadUrl": item.downloadUrl
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}
