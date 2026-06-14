const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'compare');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

// Target the highest-volume competitor brands in West Pune
const competitors = [
    {
        name: "Life Republic",
        slug: "aranya-vs-life-republic",
        competitorType: "Township Apartments & Villas",
        searchIntent: "Life Republic Hinjewadi",
        aranyaAdvantage: "100% Land Ownership via NA Plots vs. High-Density Township Apartments. Lower maintenance costs and historically higher CAGR (18%)."
    },
    {
        name: "Godrej Woodsville",
        slug: "aranya-vs-godrej-woodsville",
        competitorType: "Premium Apartments",
        searchIntent: "Godrej Woodsville Hinjewadi Phase 1",
        aranyaAdvantage: "Generational Wealth asset (Land) vs. Depreciating Asset (Apartment). Aranya offers custom bungalow construction without shared walls."
    },
    {
        name: "Lodha Panjeea",
        slug: "aranya-vs-lodha-panjeea",
        competitorType: "Luxury Apartments",
        searchIntent: "Lodha Hinjewadi",
        aranyaAdvantage: "Expansive 45ft boulevards and absolute privacy. You own the earth below and the sky above, unlike restricted apartment carpet areas."
    },
    {
        name: "Vaarivana",
        slug: "aranya-vs-vaarivana",
        competitorType: "Villa Township",
        searchIntent: "Vaarivana Urse",
        aranyaAdvantage: "Closer proximity to Hinjewadi IT Park (Phase 3) reducing daily commute by 45 minutes, while offering the same ultra-luxury club class amenities."
    }
];

// Base HTML Shell for Comparison Pages
const baseHtmlStart = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#c5a059">
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .compare-container { max-width: 1000px; margin: 120px auto 60px; padding: 40px; background: white; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
        .compare-table { width: 100%; border-collapse: collapse; margin-top: 30px; margin-bottom: 40px; }
        .compare-table th, .compare-table td { padding: 20px; text-align: left; border-bottom: 1px solid #eee; }
        .compare-table th { background: var(--primary); color: white; font-size: 18px; }
        .compare-table tr:last-child td { border-bottom: none; }
        .compare-table td:first-child { font-weight: 600; color: var(--primary); width: 25%; }
        .winner { background: rgba(197, 160, 89, 0.1); border-left: 4px solid var(--secondary); font-weight: 600; }
        .compare-header { background: var(--primary); padding: 150px 20px 80px; text-align: center; color: white; }
    </style>
`;

const baseHtmlNav = `
</head>
<body style="background-color: #f9f9f9;">
    <!-- Navigation -->
    <nav class="navbar" style="background: var(--primary);">
        <div class="logo">ARANYA<span style="font-size:12px; display:block; letter-spacing: 2px;">BY KUMAR BUILDERS</span></div>
        <div class="nav-links">
            <a href="../#home">Overview</a>
            <a href="../#layout">Masterplan</a>
            <a href="../#contact" class="btn btn-small">Enquire Now</a>
        </div>
    </nav>
`;

const baseHtmlFooter = `
    <!-- Footer -->
    <footer style="background: var(--primary); color: white; padding: 40px 20px; text-align: center;">
        <p style="font-size: 12px; opacity: 0.4;">&copy; 2026 Kumar Builders. All Rights Reserved. | Aranya vs Competitors</p>
    </footer>
</body>
</html>`;

// Read existing Sitemap
let sitemapPath = path.join(__dirname, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// Generate Individual Intercept Pages
competitors.forEach(comp => {
    let schemaDate = "2026-06-14T08:00:00+08:00";
    
    let interceptHtml = baseHtmlStart + `
    <title>Aranya by Kumar Builders vs ${comp.name} | West Pune Real Estate Comparison</title>
    <meta name="description" content="Detailed comparison between Aranya NA Bungalow Plots and ${comp.name}. Discover why smart investors are choosing clear title land over ${comp.competitorType.toLowerCase()} in Pune.">
    <link rel="canonical" href="https://kumarbuildersaranya.com/compare/${comp.slug}">
    
    <!-- Semantic Article Schema for Comparison -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Aranya vs ${comp.name}: Which is the better investment?",
      "description": "Objective real estate comparison of Aranya NA Plots and ${comp.name}.",
      "author": {
        "@type": "Organization",
        "name": "Kumar Builders Market Intelligence"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Kumar Builders",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kumarbuildersaranya.com/assets/images/entrance.jpg"
        }
      }
    }
    </script>
    ` + baseHtmlNav;

    interceptHtml += `
    <header class="compare-header">
        <h1 style="color: var(--secondary); font-size: 48px; margin-bottom: 10px;">Aranya vs. ${comp.name}</h1>
        <p style="opacity: 0.8; max-width: 600px; margin: 0 auto; font-size: 18px;">An objective investment comparison for High-Net-Worth Buyers in West Pune.</p>
    </header>

    <div class="compare-container">
        <p style="font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 20px;">When evaluating luxury real estate in West Pune, buyers frequently compare <strong>Aranya by Kumar Builders</strong> (Premium NA Bungalow Plots) with <strong>${comp.name}</strong> (${comp.competitorType}). Here is the mathematical and lifestyle breakdown to help you make the right investment decision.</p>
        
        <table class="compare-table">
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Aranya NA Plots</th>
                    <th>${comp.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Asset Class</td>
                    <td class="winner">100% Land Ownership (Appreciating Asset)</td>
                    <td>${comp.competitorType} (Depreciating Structure)</td>
                </tr>
                <tr>
                    <td>Customization</td>
                    <td class="winner">Absolute Freedom (Build your custom Bungalow)</td>
                    <td>Pre-determined developer floorplans</td>
                </tr>
                <tr>
                    <td>Privacy</td>
                    <td class="winner">Zero shared walls, independent estate living</td>
                    <td>High-density community living</td>
                </tr>
                <tr>
                    <td>Historical CAGR</td>
                    <td class="winner">18% - 22% (Land)</td>
                    <td>5% - 8% (Apartments/Villas)</td>
                </tr>
                <tr>
                    <td>Maintenance Costs</td>
                    <td class="winner">Low (Only community upkeep)</td>
                    <td>High (Sinking funds, structural maintenance)</td>
                </tr>
            </tbody>
        </table>

        <h3 style="color: var(--primary); font-size: 24px; margin-top: 40px;">The Aranya Advantage</h3>
        <p style="font-size: 16px; line-height: 1.8; color: #555;">${comp.aranyaAdvantage}</p>
        
        <div style="margin-top: 50px; padding: 40px; background: rgba(197, 160, 89, 0.1); border-radius: 8px; border: 1px solid var(--secondary); text-align: center;">
            <h3 style="margin-top: 0; color: var(--primary);">Ready to secure your legacy?</h3>
            <p style="font-size: 16px; margin-bottom: 25px; color: #555;">Schedule a private site visit to Aranya and experience the lakefront estates.</p>
            <a href="../#contact" class="btn" style="background: var(--primary); color: var(--secondary);">Enquire Now</a>
        </div>
    </div>
    ` + baseHtmlFooter;

    fs.writeFileSync(path.join(outDir, `${comp.slug}.html`), interceptHtml);
    console.log(`Generated Intercept Page: compare/${comp.slug}.html`);

    // Append to sitemap
    if (!sitemap.includes(`compare/${comp.slug}`)) {
        sitemap = sitemap.replace('</urlset>', `  <url>\n    <loc>https://kumarbuildersaranya.com/compare/${comp.slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>`);
    }
});

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap updated with Competitor Intercept URLs.');
