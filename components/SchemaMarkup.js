export default function SchemaMarkup() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aranya NA Bungalow Plots",
    "url": "https://www.kumararanya.in/",
    "description": "Best NA Bungalow Plots Project in Hinjewadi & West Pune.",
  };

  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Aranya NA Bungalow Plots by Kumar Builders",
    "description": "Premium 100% Title Clear RERA approved NA plots in West Pune, starting at ₹1.4 Cr.",
    "url": "https://www.kumararanya.in/",
    "image": "https://www.kumararanya.in/assets/images/scenic_villa.png",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "14000000",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the price of NA plots at Aranya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premium NA bungalow plots at Aranya start from ₹1.4 Crore onwards. Pricing varies based on exact plot size, layout orientation, and proximity to the biodiversity park."
        }
      },
      {
        "@type": "Question",
        "name": "Is Aranya within PMC limits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the project is strategically located with seamless connectivity to PMC infrastructure, ensuring rapid property value appreciation and excellent civic amenities."
        }
      },
      {
        "@type": "Question",
        "name": "Can I build a G+2 villa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All plots come with 100% clear NA (Non-Agricultural) titles, 1.5 FSI, and approved G+2 building permissions."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Buy NA Plots at Aranya",
    "description": "Step-by-step process to book your premium NA bungalow plot at Aranya.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Virtual Review",
        "text": "Analyze the Interactive Masterplan and select your preferred plot dimensions."
      },
      {
        "@type": "HowToStep",
        "name": "Site Experience",
        "text": "Schedule a private tour to physically experience the location and infrastructure."
      },
      {
        "@type": "HowToStep",
        "name": "Secure Token",
        "text": "Submit a token amount to officially block the plot for 24-48 hours."
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
    </>
  );
}
