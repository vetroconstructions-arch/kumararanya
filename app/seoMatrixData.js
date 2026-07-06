export const generateSeoMatrix = () => {
  // Hyper-Focused Marunji & Hinjewadi Keywords
  const intents = ["buy", "invest-in", "price-of", "review-of", "location-of", "pmrda-approved", "best", "premium"];
  const subjects = ["na-bungalow-plots", "plotting-projects", "residential-land", "villa-plots"];
  const geographies = ["hinjewadi", "marunji", "hinjewadi-phase-1", "hinjewadi-marunji-link-road", "pune-it-park"];
  const brands = ["aranya", "kumar-aranya", "kumar-builders-aranya"];
  
  const matrix = [];

  // Algorithmic Cross-Multiplication (Intent + Brand + Subject + Geo)
  intents.forEach(intent => {
    brands.forEach(brand => {
      subjects.forEach(subject => {
        geographies.forEach(geo => {
          // e.g. buy-kumar-aranya-na-bungalow-plots-in-hinjewadi
          const slug = `${intent}-${brand}-${subject}-in-${geo}`;
          
          // Convert slug to readable Title
          const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          
          matrix.push({
            slug,
            title,
            intent: intent.replace(/-/g, ' '),
            brand: brand.replace(/-/g, ' '),
            subject: subject.replace(/-/g, ' '),
            geo: geo.replace(/-/g, ' '),
            hook: `Searching for ${subject.replace(/-/g, ' ')} in ${geo.replace(/-/g, ' ')}? Discover why ${brand.replace(/-/g, ' ')} is the ultimate ${intent.replace(/-/g, ' ')} opportunity.`
          });
        });
      });
    });
  });

  // Add highly specific Long-Tail exact match queries for Marunji/Hinjewadi
  const marketKeywords = [
    "aranya-marunji-plotting",
    "aranya-marunji-plotting-price",
    "aranya-marunji-plotting-reviews",
    "na-bungalow-in-hinjewadi",
    "na-bungalow-plots-hinjewadi-pune",
    "kumar-aranya-hinjewadi-marunji-link-road",
    "pmrda-sanctioned-plots-marunji-hinjewadi"
  ];

  marketKeywords.forEach(slug => {
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    matrix.push({
      slug,
      title,
      intent: "exact-match",
      brand: "Aranya",
      subject: "Bungalow Plots",
      geo: "Hinjewadi Marunji",
      hook: `Exclusive access to ${title}. Secure your 100% Title Clear PMRDA NA Sanctioned plot today.`
    });
  });

  return matrix;
};

// Pre-compute the array for easy import
export const seoMatrix = generateSeoMatrix();
