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
        "sameAs": [
          "https://en.wikipedia.org/wiki/Hinjawadi",
          "https://en.wikipedia.org/wiki/Pune_Metropolitan_Region_Development_Authority",
          "https://maharera.mahaonline.gov.in/"
        ],
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#overview h1", "#overview p", "#pricing h2", "#pricing p"]
        }
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
        "sameAs": [
          "https://en.wikipedia.org/wiki/Hinjawadi",
          "https://en.wikipedia.org/wiki/Pune_Metropolitan_Region_Development_Authority",
          "https://maharera.mahaonline.gov.in/"
        ],
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
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Hinjewadi, Pune"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Marunji, Pune"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Pimpri-Chinchwad, Maharashtra"
          }
        ],
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "MahaRERA Regulatory Registration",
          "identifier": "P52100050000",
          "recognizedBy": {
            "@type": "GovernmentOrganization",
            "name": "Maharashtra Real Estate Regulatory Authority (MahaRERA)",
            "url": "https://maharera.mahaonline.gov.in/"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.kumararanya.in/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Pune Real Estate",
            "item": "https://www.kumararanya.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hinjewadi NA Bungalow Plots",
            "item": "https://www.kumararanya.in/aranya-na-bungalow-plots-hinjewadi/pricing"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Kumar Aranya Masterplan & Layout",
            "item": "https://www.kumararanya.in/aranya-na-bungalow-plots-hinjewadi/masterplan"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://www.kumararanya.in/#product",
        "name": "Kumar Aranya Bungalow Plots in Hinjewadi",
        "image": "https://www.kumararanya.in/assets/images/clubhouse.jpg",
        "description": "100% Title Clear PMRDA NA Bungalow Plots (2,400 to 7,600 sq.ft) located near Hinjewadi, Pune. The apex of Pune Real Estate investment.",
        "brand": {
          "@type": "Brand",
          "name": "Kumar Aranya"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1248"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Dr. Rajesh Kulkarni (NRI, Dubai)" },
            "datePublished": "2026-03-15",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "100% Title Clear NA plots near Hinjewadi IT Park. Seamless purchasing experience and outstanding capital appreciation."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Siddharth Deshmukh (IT Director, Hinjewadi Phase 1)" },
            "datePublished": "2026-04-10",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "The 2,400 sq.ft villa plot layout and 45-ft concrete boulevards are unmatched in West Pune."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ananya Sharma (Wealth Advisor, Mumbai)" },
            "datePublished": "2026-05-22",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Kumar Aranya offers the highest CAGR potential in Pune real estate. Highly recommend for portfolio diversification."
          }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "url": "https://www.kumararanya.in/aranya-na-bungalow-plots-hinjewadi/pricing",
          "priceCurrency": "INR",
          "lowPrice": "17200000",
          "highPrice": "54466667",
          "offerCount": "89"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.kumararanya.in/#faq",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#faq h2", "#faq .faq-answer"]
        },
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
          },
          {
            "@type": "Question",
            "name": "What is the starting price for plots at Kumar Aranya in Hinjewadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Premium 2,400 sq.ft to 7,600 sq.ft NA Bungalow Plots at Kumar Aranya start at ₹1.72 Cr with attractive payment plans and NRI financing assistance."
            }
          },
          {
            "@type": "Question",
            "name": "How far is Kumar Aranya from Hinjewadi IT Park Phase 1 and Marunji?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kumar Aranya is strategically located on the Hinjewadi-Marunji link corridor, just 12-15 minutes from Hinjewadi IT Park Phase 1, Phase 2, and the upcoming Ring Road interchange."
            }
          }
        ]
      },
      {
        "@type": "RealEstateListing",
        "@id": "https://www.kumararanya.in/#listing",
        "name": "Kumar Aranya NA Bungalow Plots in Hinjewadi",
        "datePosted": "2026-01-01",
        "validThrough": "2028-12-31",
        "description": "Exclusive 2,400 to 7,600 sq.ft PMRDA NA Bungalow Plots in Marunji / Hinjewadi IT Corridor.",
        "offers": {
          "@type": "Offer",
          "price": "17200000",
          "priceCurrency": "INR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5987",
          "longitude": "73.7380"
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
    </>
  );
}
