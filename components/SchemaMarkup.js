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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }} />
    </>
  );
}
