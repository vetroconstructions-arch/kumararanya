export default function SchemaMarkup() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aranya NA Bungalow Plots",
    "url": "https://www.kumararanya.in/",
    "description": "Best NA Bungalow Plots Project in Hinjewadi & West Pune.",
  };



  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}
