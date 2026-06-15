import { seoMatrix } from '../../seoMatrixData';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';

// Static Route Generation for Vercel Edge caching
export async function generateStaticParams() {
  return seoMatrix.map((item) => ({
    keyword: item.slug,
  }));
}

export function generateMetadata({ params }) {
  const data = seoMatrix.find(item => item.slug === params.keyword);
  
  if (!data) return { title: 'Not Found' };
  
  return {
    title: `${data.title} | Aranya PMRDA NA Plots`,
    description: data.hook,
    alternates: {
      canonical: `https://www.kumararanya.in/search/${params.keyword}`
    }
  }
}

export default function KeywordPage({ params }) {
  const data = seoMatrix.find(item => item.slug === params.keyword);

  if (!data) return <div>Data not found</div>;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": `What is the best option for ${data.title.toLowerCase()}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Aranya offers premium 25+ Acre PMRDA Sanctioned NA Bungalow plots ideally suited for ${data.title.toLowerCase()}. With 18% CAGR, it is the premier choice.`
      }
    }]
  };

  return (
    <main style={{ minHeight: '100vh', background: '#0a192f', color: 'white', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header style={{ padding: '150px 20px 80px', textAlign: 'center', background: 'linear-gradient(rgba(10,25,47,0.9), rgba(10,25,47,1))' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '20px', fontFamily: 'Cinzel, serif', textTransform: 'capitalize' }}>
          {data.title}
        </h1>
        <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto 40px', color: '#ccc', lineHeight: '1.8' }}>
          {data.hook}
        </p>
        
        <Link href="/" style={{ padding: '15px 40px', background: 'var(--secondary)', color: 'var(--primary)', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', borderRadius: '4px' }}>
          Explore Masterplan
        </Link>
      </header>

      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', color: 'white', marginBottom: '30px' }}>Why Aranya for {data.subject.replace(/\b\w/g, l => l.toUpperCase())}?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '15px', fontSize: '20px' }}>1. 100% Title Clear & PMRDA Sanctioned</h3>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Skip the legal anxiety. Every plot comes with an impeccable chain of title and ready-to-construct PMRDA sanctions.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '15px', fontSize: '20px' }}>2. High Yield (18% CAGR)</h3>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Secure appreciating land in the Hinjewadi-Marunji IT corridor before the Ring Road drives valuations out of reach.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '15px', fontSize: '20px' }}>3. 25-Acre Exclusive Community</h3>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Limited to just 180 plots. Enjoy 45-ft boulevards, a 2.5 acre clubhouse, and Miyawaki forest biophilic design.</p>
          </div>
        </div>
      </section>

      <footer style={{ padding: '80px 20px', textAlign: 'center', background: '#050d1a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 style={{ fontSize: '32px', color: 'white', marginBottom: '20px' }}>Ready to Invest in {data.geo.replace(/\b\w/g, l => l.toUpperCase())}?</h2>
        <p style={{ color: '#aaa', marginBottom: '40px' }}>Plots ranging from 2,240 sq.ft to 7,600 sq.ft. Starting at ₹1.49 Cr.</p>
        <Link href="/#contact" style={{ padding: '15px 40px', background: 'transparent', border: '2px solid var(--secondary)', color: 'var(--secondary)', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', borderRadius: '4px' }}>
          Contact Sales Team
        </Link>
      </footer>
    </main>
  );
}
