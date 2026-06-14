const fs = require('fs');

const htmlContent = fs.readFileSync('/tmp/aranya_backup/_old_html_backup/index.html', 'utf8');
const scriptContent = fs.readFileSync('/tmp/aranya_backup/_old_html_backup/script.js', 'utf8');

const headMatch = htmlContent.match(/<head>([\s\S]*?)<\/head>/i);
let schemas = [];
if (headMatch) {
    const headInner = headMatch[1];
    const scriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
    let match;
    while ((match = scriptRegex.exec(headInner)) !== null) {
        schemas.push(match[1].trim());
    }
}

const bodyMatch = htmlContent.match(/<body>([\s\S]*?)<\/body>/i);
let bodyHtml = "";
if (bodyMatch) {
    bodyHtml = bodyMatch[1];
    bodyHtml = bodyHtml.replace(/<script src="script.js"><\/script>/gi, '');
    bodyHtml = bodyHtml.replace(/assets\/images\//g, '/assets/images/');
}

// Write the data file
const dataObj = {
  script: scriptContent,
  schemas: schemas,
  body: bodyHtml
};
fs.writeFileSync('app/legacyData.json', JSON.stringify(dataObj));

// Write the Next.js Page
const pageJs = `
'use client';
import { useEffect } from 'react';
import legacyData from './legacyData.json';

export default function Home() {
  useEffect(() => {
    try {
      // Execute the vanilla JS perfectly
      const scriptFunc = new Function(legacyData.script);
      scriptFunc();
    } catch(e) { 
      console.error(e); 
    }
  }, []);

  return (
    <>
      {legacyData.schemas.map((schema, index) => (
        <script 
          key={index} 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: schema }} 
        />
      ))}
      <div dangerouslySetInnerHTML={{ __html: legacyData.body }} />
    </>
  );
}
`;

fs.writeFileSync('app/page.js', pageJs);
console.log("Success! Clean architecture built.");
