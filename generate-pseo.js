const fs = require('fs');
const path = require('path');

const locations = [
    "Marunji", "Hinjewadi Phase 1", "Hinjewadi Phase 2", "Hinjewadi Phase 3", "Maan", "Kasarsai", 
    "Punawale", "Tathawade", "Wakad", "Balewadi", "Baner", "Bavdhan", "Bhugaon", "Pirangut", 
    "Mulshi", "Paud Road", "Sus", "Mahalunge", "Ravet", "Kiwale", "Talegaon", "Somatane", 
    "Gahunje", "Chakan", "Moshi", "Kharadi", "Wagholi", "Hadapsar", "Manjari", "Undri", 
    "Pisoli", "NIBM", "Kondhwa", "Purandar Airport Zone"
];

const outDir = path.join(__dirname, 'locations');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

let template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
let sitemapPath = path.join(__dirname, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

locations.forEach(loc => {
    let slug = loc.toLowerCase().replace(/\s+/g, '-');
    let outputHtml = template;
    
    // Replace Title
    outputHtml = outputHtml.replace(
        /<title>Aranya Hinjewadi \| Premium NA Bungalow Plots \| Gated Community by Kumar Builders Pune<\/title>/g,
        `<title>Aranya ${loc} | Premium NA Bungalow Plots | Gated Community by Kumar Builders Pune</title>`
    );
    
    // Replace Meta Description
    outputHtml = outputHtml.replace(
        /Grand Gated NA Bungalow Plot Community in Hinjewadi, Pune/g,
        `Grand Gated NA Bungalow Plot Community near ${loc}, Pune`
    );

    // Replace Canonical
    outputHtml = outputHtml.replace(
        /<link rel="canonical" href="https:\/\/kumarbuildersaranya.com\/">/g,
        `<link rel="canonical" href="https://kumarbuildersaranya.com/locations/${slug}">`
    );

    // Replace H1
    outputHtml = outputHtml.replace(
        /<h1 class="translatable" data-en="Aranya Bungalow NA Plots" data-mr="अरण्य बंगलो NA प्लॉट्स">Aranya Bungalow NA Plots<\/h1>/g,
        `<h1 class="translatable" data-en="Aranya Bungalow NA Plots Near ${loc}" data-mr="${loc} जवळ अरण्य बंगलो NA प्लॉट्स">Aranya Bungalow NA Plots Near ${loc}</h1>`
    );
    
    // Fix relative assets (since it is one level deep)
    outputHtml = outputHtml.replace(/href="styles\.css"/g, 'href="../styles.css"');
    outputHtml = outputHtml.replace(/src="script\.js"/g, 'src="../script.js"');
    outputHtml = outputHtml.replace(/href="manifest\.json"/g, 'href="../manifest.json"');
    outputHtml = outputHtml.replace(/assets\/images\//g, '../assets/images/');
    
    fs.writeFileSync(path.join(outDir, `${slug}.html`), outputHtml);
    console.log(`Generated: locations/${slug}.html`);
    
    // Append to sitemap
    if (!sitemap.includes(`locations/${slug}`)) {
        let newUrlEntry = `  <url>
    <loc>https://kumarbuildersaranya.com/locations/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
        sitemap = sitemap.replace('</urlset>', newUrlEntry);
    }
});

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap updated with all programmatic URLs.');
