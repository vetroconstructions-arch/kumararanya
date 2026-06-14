const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'insights');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

const articles = [
    {
        title: "NA Plots vs. Luxury Apartments in Pune: The 2026 ROI Analysis",
        slug: "na-plots-vs-apartments-pune-roi",
        description: "A deep dive into why high-net-worth investors are shifting from luxury apartments to NA Bungalow plots in West Pune, comparing 18% land CAGR against standard flat depreciation.",
        content: `
            <h3>The Shift in HNWI Investment Sentiment</h3>
            <p>For decades, luxury apartments in areas like Baner and Wakad were the go-to asset class for IT executives in Pune. However, post-2024, data indicates a massive migration of smart capital towards clear-title NA (Non-Agricultural) Bungalow plots in emerging corridors like Marunji and Hinjewadi Phase 3.</p>
            <h3>The Mathematics of Depreciation vs. Appreciation</h3>
            <p>An apartment is a depreciating asset sitting on an undivided, negligible share of land. Conversely, an NA plot is 100% land ownership. Historically, West Pune land prices have yielded an 18-22% Compound Annual Growth Rate (CAGR). An investment of ₹1.5 Cr in a plot is mathematically projected to outpace a similarly priced apartment by over ₹2 Cr in a 7-year holding period.</p>
            <h3>Conclusion</h3>
            <p>If your goal is generational wealth and zero depreciation, NA Plots within gated communities like Aranya offer unparalleled financial sovereignty.</p>
        `
    },
    {
        title: "MahaRERA Checklist: 7 Legal Documents Required to Buy Land in Maharashtra",
        slug: "maharera-checklist-buying-land-maharashtra",
        description: "Ensure your land investment is 100% secure. Here is the ultimate MahaRERA legal checklist for buying NA plots in Pune.",
        content: `
            <h3>Why Due Diligence Matters</h3>
            <p>Buying land in Maharashtra can be fraught with legal complexities. Purchasing inside a MahaRERA-approved gated community eliminates 99% of these risks. Here is what you must verify:</p>
            <ol>
                <li><strong>7/12 Extract (Saat Bara Utara):</strong> Proves the ownership and type of land.</li>
                <li><strong>NA Order (Non-Agricultural Tax Receipt):</strong> Ensures the land is legally converted for residential use.</li>
                <li><strong>Title Search Report:</strong> A 30-year history proving the land is free of encumbrances.</li>
                <li><strong>PMRDA Sanctioned Layout:</strong> The official authority approval for the masterplan.</li>
                <li><strong>RERA Registration Certificate:</strong> The ultimate safety net ensuring project delivery.</li>
            </ol>
            <p>At Aranya by Kumar Builders, all titles are 100% clear, NA-approved, and MahaRERA certified, offering absolute peace of mind.</p>
        `
    },
    {
        title: "How the Upcoming Pune Ring Road is Impacting West Pune Land Valuations",
        slug: "pune-ring-road-impact-land-valuation",
        description: "Analyze the economic impact of the 170km Pune Ring Road on land prices in Marunji, Hinjewadi, and West Pune.",
        content: `
            <h3>The Infrastructure Multiplier Effect</h3>
            <p>Infrastructure dictates real estate appreciation. The 170km Pune Ring Road is the most significant infrastructure project in the city's history, designed to divert heavy traffic and connect major industrial hubs.</p>
            <h3>The Marunji Advantage</h3>
            <p>Micro-locations like Marunji sit at the strategic intersection of the IT Hub (Hinjewadi) and the upcoming Ring Road alignments. Land parcels in these "influence zones" traditionally see a 40-60% spike in valuation upon project completion.</p>
            <p>Investing in Aranya NA Plots places your asset directly in the path of this massive infrastructure growth corridor.</p>
        `
    },
    {
        title: "Hinjewadi Phase 3 Extension: The Next Real Estate Goldmine?",
        slug: "hinjewadi-phase-3-extension-real-estate",
        description: "Why Marunji and Hinjewadi Phase 3 Extension are becoming the most sought-after luxury plotting destinations in Pune.",
        content: `
            <h3>Saturation of Phase 1 and 2</h3>
            <p>Hinjewadi Phases 1 and 2 are effectively saturated, characterized by high density and traffic. HNWIs and tech leaders are seeking luxury, space, and tranquility without increasing their commute time.</p>
            <h3>The Rise of the Extension</h3>
            <p>The Phase 3 Extension (Marunji) offers untouched ecology, expansive green covers, and immediate access to top IT parks (TCS, Tech Mahindra, Infosys). This has transformed it into the premier destination for luxury gated plotting communities like Aranya, offering the perfect work-life balance.</p>
        `
    },
    {
        title: "The Ultimate Guide to Securing Home Loans for NA Bungalow Plots in Pune",
        slug: "home-loans-na-bungalow-plots-pune",
        description: "Everything you need to know about financing your NA plot purchase and construction in Pune through top national banks.",
        content: `
            <h3>Plot Loans vs. Home Loans</h3>
            <p>Financing an NA plot is highly streamlined if the project is approved by major banks. Most top-tier banks offer "Composite Loans" which cover both the purchase of the plot and the construction of your bungalow.</p>
            <h3>Key Benefits in Approved Projects</h3>
            <p>Because Aranya is developed by the highly reputable Kumar Builders, the project carries pre-approvals from leading financial institutions (SBI, HDFC, ICICI). This means faster processing, lower interest rates, and up to 75-80% funding on the agreement value.</p>
            <p>Our dedicated financial advisory team handles the entire process, ensuring a seamless transaction for investors.</p>
        `
    }
];

// Base HTML Shell
const baseHtmlStart = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#c5a059">
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .article-container { max-width: 800px; margin: 120px auto 60px; padding: 40px; background: white; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
        .article-container h1 { color: var(--primary); font-size: 36px; margin-bottom: 20px; }
        .article-container h3 { color: var(--primary); margin-top: 30px; margin-bottom: 15px; }
        .article-container p, .article-container li { font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 20px; }
        .article-container ol { padding-left: 20px; }
        .hub-header { background: var(--primary); padding: 150px 20px 80px; text-align: center; color: white; }
        .article-card { background: white; padding: 30px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid var(--secondary); box-shadow: 0 10px 20px rgba(0,0,0,0.05); transition: transform 0.3s ease; }
        .article-card:hover { transform: translateY(-5px); }
        .article-card h2 { color: var(--primary); font-size: 22px; margin-bottom: 10px; }
        .article-card p { color: #666; font-size: 14px; margin-bottom: 20px; line-height: 1.6; }
        .article-card a { color: var(--secondary); text-decoration: none; font-weight: 600; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
    </style>
`;

const baseHtmlNav = `
</head>
<body style="background-color: #f9f9f9;">
    <!-- Navigation -->
    <nav class="navbar" style="background: var(--primary);">
        <div class="logo">ARANYA<span style="font-size:12px; display:block; letter-spacing: 2px;">BY KUMAR BUILDERS</span></div>
        <div class="nav-links">
            <a href="../#home">Home</a>
            <a href="../#layout">Masterplan</a>
            <a href="../#contact" class="btn btn-small">Enquire Now</a>
        </div>
    </nav>
`;

const baseHtmlFooter = `
    <!-- Footer -->
    <footer style="background: var(--primary); color: white; padding: 40px 20px; text-align: center;">
        <p style="font-size: 12px; opacity: 0.4;">&copy; 2026 Kumar Builders. All Rights Reserved. | Aranya Investment Insights</p>
    </footer>
</body>
</html>`;

// Generate Hub Index
let hubHtml = baseHtmlStart + `<title>Aranya Investment Insights | Pune Real Estate Market Reports</title>\n` + baseHtmlNav;
hubHtml += `
    <header class="hub-header">
        <h1 style="color: var(--secondary); font-size: 48px; margin-bottom: 10px;">Market Intelligence</h1>
        <p style="opacity: 0.8; max-width: 600px; margin: 0 auto;">Authoritative insights, financial analysis, and legal guides for investing in West Pune's luxury plotting market.</p>
    </header>
    <div style="max-width: 1000px; margin: -40px auto 80px; position: relative; z-index: 10; padding: 0 20px;">
`;

articles.forEach(article => {
    hubHtml += `
        <div class="article-card">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.slug}.html">Read Executive Report <i class="fas fa-arrow-right" style="margin-left: 5px;"></i></a>
        </div>
    `;
});
hubHtml += `</div>` + baseHtmlFooter;
fs.writeFileSync(path.join(outDir, 'index.html'), hubHtml);
console.log('Generated: insights/index.html');

// Read existing Sitemap
let sitemapPath = path.join(__dirname, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// Append Hub to Sitemap
if (!sitemap.includes(`insights/</loc>`)) {
    sitemap = sitemap.replace('</urlset>', `  <url>\n    <loc>https://kumarbuildersaranya.com/insights/</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n</urlset>`);
}

// Generate Individual Articles
articles.forEach(article => {
    let schemaDate = "2026-06-12T08:00:00+08:00";
    let articleHtml = baseHtmlStart + `
    <title>${article.title} | Aranya Insights</title>
    <meta name="description" content="${article.description}">
    <link rel="canonical" href="https://kumarbuildersaranya.com/insights/${article.slug}">
    
    <!-- Semantic Article Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${article.title}",
      "description": "${article.description}",
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
      },
      "datePublished": "${schemaDate}",
      "dateModified": "${schemaDate}"
    }
    </script>
    ` + baseHtmlNav;

    articleHtml += `
    <div class="article-container">
        <a href="index.html" style="color: var(--secondary); text-decoration: none; font-size: 12px; text-transform: uppercase; font-weight: 600;"><i class="fas fa-arrow-left"></i> Back to Insights</a>
        <h1 style="margin-top: 20px;">${article.title}</h1>
        <div style="border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 30px; font-size: 12px; color: #999;">Published by <strong>Kumar Builders Market Intelligence</strong> | June 2026</div>
        ${article.content}
        
        <div style="margin-top: 60px; padding: 30px; background: rgba(197, 160, 89, 0.1); border-radius: 8px; border: 1px solid var(--secondary); text-align: center;">
            <h3 style="margin-top: 0;">Secure Your Wealth Today</h3>
            <p style="font-size: 14px; margin-bottom: 20px;">Invest in Aranya NA Bungalow Plots near Hinjewadi IT Park starting from ₹1.47 Cr.</p>
            <a href="../#contact" class="btn" style="background: var(--primary); color: var(--secondary);">Enquire Now</a>
        </div>
    </div>
    ` + baseHtmlFooter;

    fs.writeFileSync(path.join(outDir, `${article.slug}.html`), articleHtml);
    console.log(`Generated: insights/${article.slug}.html`);

    // Append to sitemap
    if (!sitemap.includes(`insights/${article.slug}`)) {
        sitemap = sitemap.replace('</urlset>', `  <url>\n    <loc>https://kumarbuildersaranya.com/insights/${article.slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>`);
    }
});

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap updated with Topical Authority Hub URLs.');
