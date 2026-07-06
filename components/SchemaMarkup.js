export default function SchemaMarkup() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.kumararanya.in/#website",
        "url": "https://www.kumararanya.in/",
        "name": "Kumar Aranya Bungalow Plots in Hinjewadi",
        "alternateName": "Pune Real Estate - Aranya NA Bungalow Plots",
        "description": "Secure premium PMRDA sanctioned NA Bungalow Plots at Kumar Aranya in Hinjewadi. The definitive Pune real estate investment.",
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://www.kumararanya.in/#organization",
        "name": "Kumar Aranya Bungalow Plots in Hinjewadi",
        "url": "https://www.kumararanya.in/",
        "logo": "https://www.kumararanya.in/favicon.png",
        "image": "https://www.kumararanya.in/assets/images/scenic_villa.png",
        "description": "The leading developer of premium NA Bungalow Plots in the Pune Real Estate market.",
        "telephone": "+917744009295",
        "email": "propsmartrealty@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kumar Aranya, Near Hinjewadi IT Park Phase 1",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411057",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5987",
          "longitude": "73.7380"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.kumararanya.in/#product",
        "name": "Kumar Aranya Bungalow Plots in Hinjewadi",
        "image": "https://www.kumararanya.in/assets/images/clubhouse.jpg",
        "description": "100% Title Clear PMRDA NA Bungalow Plots located near Hinjewadi, Pune. The apex of Pune Real Estate investment.",
        "brand": {
          "@type": "Brand",
          "name": "Kumar Aranya"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1248"
        },
        "offers": {
          "@type": "AggregateOffer",
          "url": "https://www.kumararanya.in/aranya-na-bungalow-plots-hinjewadi/pricing",
          "priceCurrency": "INR",
          "lowPrice": "15600000",
          "offerCount": "89"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.kumararanya.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why are NA Bungalow Plots the best investment in Pune Real Estate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NA Bungalow Plots historically offer a 15-22% CAGR in Pune, vastly outperforming luxury apartments due to the compounding appreciation of sovereign land, specifically near high-growth IT corridors like Hinjewadi."
            }
          },
          {
            "@type": "Question",
            "name": "Is Kumar Aranya Bungalow Plots in Hinjewadi PMRDA Sanctioned?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Kumar Aranya Bungalow Plots are 100% Title Clear and PMRDA Sanctioned, ensuring zero legal risk and immediate building permissions."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
    </>
  );
}
