const fs = require('fs');

const dataPath = 'app/legacyData.json';
let legacyData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 1. FAQPage Schema for Zero-Click Domination
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Which is the best NA Bungalow Plot project in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Aranya by Kumar Builders is widely considered the best NA Bungalow Plot project in West Pune. Located near Hinjewadi IT Park, it offers 100% clear title ownership, 45ft wide boulevards, lakefront plots, and projected historical returns of 18-22% CAGR."
    }
  }, {
    "@type": "Question",
    "name": "Why are NA plots in West Pune a better investment than luxury apartments?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Unlike apartments which are depreciating concrete structures, NA Plots in West Pune offer 100% absolute land ownership. With finite land supply near the Ring Road and Hinjewadi Phase 3, Aranya NA Plots guarantee zero structural depreciation and maximum capital appreciation."
    }
  }]
};

// 2. AggregateRating Injection
// Find the LocalBusiness schema if it exists and inject the rating
let localBusinessInjected = false;
for (let i = 0; i < legacyData.schemas.length; i++) {
  try {
    let schemaObj = JSON.parse(legacyData.schemas[i]);
    if (schemaObj['@type'] === 'LocalBusiness' || schemaObj['@type'] === 'RealEstateAgent') {
      schemaObj.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1248"
      };
      legacyData.schemas[i] = JSON.stringify(schemaObj);
      localBusinessInjected = true;
    }
  } catch(e) {
    // Ignore parse errors on individual schemas
  }
}

// Push the new FAQ Schema
legacyData.schemas.push(JSON.stringify(faqSchema));

fs.writeFileSync(dataPath, JSON.stringify(legacyData, null, 2));
console.log("Superlative Schemas Successfully Injected into Next.js Data.");
