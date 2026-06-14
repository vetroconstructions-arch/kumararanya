
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
