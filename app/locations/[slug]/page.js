export async function generateMetadata({ params }) {
  // Extract slug and replace hyphens with spaces for title case
  const { slug } = await params;
  const location = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: `Aranya ${location} | Premium NA Bungalow Plots | Gated Community`,
    description: `Grand Gated NA Bungalow Plot Community near ${location}, Pune. 2300-7500 SQFT RERA Approved Plots.`,
  }
}

import Link from 'next/link';

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main style={{ padding: '120px 20px', minHeight: '100vh', background: '#f9f9f9', textAlign: 'center' }}>
      <h1 style={{ color: 'var(--primary)', fontSize: '48px', marginBottom: '20px' }}>
        Aranya NA Bungalow Plots near <span style={{ color: 'var(--secondary)' }}>{location}</span>
      </h1>
      <p style={{ color: '#555', fontSize: '18px', maxWidth: '800px', margin: '0 auto 40px' }}>
        This page was dynamically generated using Next.js Server-Side Rendering. Instead of maintaining physical HTML files for every micro-location, Next.js generates this perfectly optimized SEO route on the fly.
      </p>
      <Link href="/#contact" className="btn" style={{ background: 'var(--primary)', color: 'var(--secondary)' }}>
        View Inventory
      </Link>
    </main>
  );
}
