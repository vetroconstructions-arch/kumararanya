import Link from 'next/link';

export default function SEOFooterSilo() {
  const topLocations = [
    'Wakad', 'Baner', 'Balewadi', 'Pimple Saudagar', 'Aundh', 
    'Kothrud', 'Bavdhan', 'Pashan', 'Shivajinagar', 'Kharadi',
    'Viman Nagar', 'Kalyani Nagar', 'Koregaon Park', 'Magarpatta', 'Wagholi',
    'Hadapsar', 'Katraj', 'Dhankawadi', 'Swargate', 'Deccan'
  ];

  return (
    <div style={{ background: '#05101f', color: '#888', padding: '40px 20px', borderTop: '1px solid #1a2a42' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '18px' }}>Explore PMRDA Sanctioned Plots Near Pune Investment Hubs</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
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
        <p style={{ marginTop: '30px', fontSize: '12px', opacity: 0.6 }}>
          *This internal matrix secures optimal algorithmic crawling for the Aranya Real Estate ecosystem. All listed locations represent critical micro-markets within the Pune demographic.
        </p>
      </div>
    </div>
  );
}
