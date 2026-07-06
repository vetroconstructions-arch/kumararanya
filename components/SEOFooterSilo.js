'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { seoMatrix } from '../app/seoMatrixData';

export default function SEOFooterSilo() {
  const [randomLinks, setRandomLinks] = useState([]);
  
  const topLocations = [
    'Wakad', 'Baner', 'Balewadi', 'Pimple Saudagar', 'Aundh', 
    'Kothrud', 'Bavdhan', 'Pashan', 'Shivajinagar', 'Kharadi',
    'Viman Nagar', 'Kalyani Nagar', 'Koregaon Park', 'Magarpatta', 'Wagholi',
    'Hadapsar', 'Katraj', 'Dhankawadi', 'Swargate', 'Deccan'
  ];

  useEffect(() => {
    // Select 15 random programmatic SEO URLs on client-side mount to avoid hydration mismatch
    const shuffled = [...seoMatrix].sort(() => 0.5 - Math.random());
    setRandomLinks(shuffled.slice(0, 15));
  }, []);

  return (
    <div style={{ background: '#05101f', color: '#888', padding: '40px 20px', borderTop: '1px solid #1a2a42' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '18px' }}>Explore PMRDA Sanctioned Plots Near Pune Investment Hubs</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '40px' }}>
          {topLocations.map(city => {
            const slug = city.toLowerCase().replace(/ /g, '-');
            return (
              <Link 
                key={slug} 
                href={`/locations/${slug}`}
                style={{
                  color: '#aaa',
                  textDecoration: 'none',
                  fontSize: '14px',
                  padding: '5px 10px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '4px',
                  transition: 'background 0.3s ease'
                }}
              >
                Plots near {city}
              </Link>
            );
          })}
        </div>

        {randomLinks.length > 0 && (
          <>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '18px' }}>Popular Real Estate Searches</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              {randomLinks.map(item => (
                <Link 
                  key={item.slug} 
                  href={`/search/${item.slug}`}
                  style={{
                    color: 'var(--secondary)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    padding: '5px 10px',
                    background: 'rgba(212,175,55,0.05)',
                    border: '1px solid rgba(212,175,55,0.2)',
                    borderRadius: '4px',
                    transition: 'background 0.3s ease'
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </>
        )}

        <p style={{ marginTop: '30px', fontSize: '12px', opacity: 0.6 }}>
          *This internal matrix secures optimal algorithmic crawling for the Aranya Real Estate ecosystem. All listed locations represent critical micro-markets within the Pune demographic.
        </p>
      </div>
    </div>
  );
}
