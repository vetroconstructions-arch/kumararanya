export const generateSeoMatrix = () => {
  const intents = ["buy", "best", "invest-in", "pmrda-sanctioned", "ready-possession", "premium", "top"];
  const subjects = ["na-bungalow-plots", "residential-land", "gated-community-plots", "villa-plots"];
  const geographies = ["pune", "west-pune", "hinjewadi", "marunji", "wakad", "baner", "bavdhan", "kothrud", "kalyani-nagar", "kharadi", "viman-nagar", "aundh", "koregaon-park", "hadapsar"];
  
  const matrix = [];

  // Algorithmic Cross-Multiplication
  intents.forEach(intent => {
    subjects.forEach(subject => {
      geographies.forEach(geo => {
        // e.g. buy-na-bungalow-plots-in-hinjewadi
        const slug = `${intent}-${subject}-in-${geo}`;
        
        // Convert slug to readable Title
        const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
        matrix.push({
          slug,
          title,
          intent: intent.replace(/-/g, ' '),
          subject: subject.replace(/-/g, ' '),
          geo: geo.replace(/-/g, ' '),
          hook: `Looking to ${intent.replace(/-/g, ' ')} ${subject.replace(/-/g, ' ')} in ${geo.replace(/-/g, ' ')}? Aranya by Kumar Builders offers the ultimate 18% CAGR investment.`
        });
      });
    });
  });

  // Add highly specific Pune Real Estate Market long-tail keywords
  const marketKeywords = [
    "pune-real-estate-market-trends-2026",
    "land-vs-flat-investment-in-pune",
    "hinjewadi-plot-appreciation-rates",
    "pmrda-na-plot-guidelines-pune",
    "why-invest-in-marunji-real-estate"
  ];

  marketKeywords.forEach(slug => {
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    matrix.push({
      slug,
      title,
      intent: "research",
      subject: "real estate market",
      geo: "pune",
      hook: `Discover the latest data on ${title.toLowerCase()}. Learn why smart money is shifting to Aranya NA Bungalow Plots.`
    });
  });

  return matrix;
};

// Pre-compute the array for easy import
export const seoMatrix = generateSeoMatrix();
