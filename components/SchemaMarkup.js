export default function SchemaMarkup() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aranya NA Bungalow Plots in Hinjewadi",
    "alternateName": "Kumar Aranya PMRDA Sanctioned Plots",
    "url": "https://www.kumararanya.in/",
    "description": "Secure premium PMRDA sanctioned Aranya NA Bungalow Plots in Hinjewadi. The definitive Pune real estate investment.",
  };



  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}
