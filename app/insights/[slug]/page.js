import { insightsData } from '../../insightsData';
import Link from 'next/link';

export async function generateStaticParams() {
  return Object.keys(insightsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = insightsData[slug];
  if(!data) return { title: 'Not Found' };
  
  return {
    title: `${data.title} | Aranya Intelligence`,
    description: data.subtitle,
  }
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const data = insightsData[slug];

  if(!data) {
    return <main style={{ padding: '120px 20px', textAlign: 'center' }}><h1>Insight Not Found</h1></main>;
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', paddingBottom: '100px' }}>
      
      {/* Cinematic Hero */}
      <div style={{ height: '60vh', background: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${data.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px' }}>
          <h1 style={{ color: 'var(--secondary)', fontSize: '56px', marginBottom: '20px', lineHeight: '1.1' }}>{data.title}</h1>
          <p style={{ color: 'white', fontSize: '24px', fontWeight: '300', opacity: 0.9 }}>{data.subtitle}</p>
        </div>
      </div>

      {/* Content Blocks */}
      <div style={{ maxWidth: '900px', margin: '-50px auto 0', position: 'relative', background: 'white', padding: '60px', borderRadius: '16px', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }}>
        
        {data.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: '60px' }}>
            <h2 style={{ color: 'var(--primary)', fontSize: '32px', marginBottom: '20px', borderBottom: '2px solid var(--secondary)', paddingBottom: '10px', display: 'inline-block' }}>{sec.heading}</h2>
            
            {sec.type === 'text' && (
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#444' }}>{sec.content}</p>
            )}

            {sec.type === 'data-grid' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
                {sec.items.map((item, j) => (
                  <div key={j} style={{ background: '#fafafa', padding: '30px', borderRadius: '12px', border: '1px solid #eee', textAlign: 'center' }}>
                    <div style={{ fontSize: '36px', fontWeight: 'bold', color: item.color, marginBottom: '10px' }}>{item.value}</div>
                    <div style={{ fontSize: '14px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                  </div>
                ))}
              </div>
            )}

            {sec.type === 'comparison' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '30px' }}>
                <div style={{ background: '#fdfdfd', border: '1px solid #eee', padding: '30px', borderRadius: '12px' }}>
                  <h3 style={{ color: '#e74c3c', marginBottom: '20px', fontSize: '24px' }}>{sec.left.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {sec.left.points.map((p, k) => <li key={k} style={{ marginBottom: '15px', color: '#666', display: 'flex', alignItems: 'center' }}><span style={{ color: '#e74c3c', marginRight: '10px' }}>✕</span> {p}</li>)}
                  </ul>
                </div>
                <div style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid var(--secondary)', padding: '30px', borderRadius: '12px' }}>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '24px' }}>{sec.right.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {sec.right.points.map((p, k) => <li key={k} style={{ marginBottom: '15px', color: '#333', display: 'flex', alignItems: 'center', fontWeight: '500' }}><span style={{ color: 'var(--secondary)', marginRight: '10px' }}>✓</span> {p}</li>)}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* FAQ Accordion */}
        {data.faqs.length > 0 && (
          <div style={{ marginTop: '80px' }}>
            <h2 style={{ color: 'var(--primary)', fontSize: '36px', marginBottom: '40px', textAlign: 'center' }}>Frequently Asked Questions</h2>
            {data.faqs.map((faq, i) => (
              <details key={i} style={{ marginBottom: '20px', background: '#fafafa', borderRadius: '8px', overflow: 'hidden' }}>
                <summary style={{ padding: '20px', fontSize: '18px', fontWeight: 'bold', color: 'var(--primary)', cursor: 'pointer', outline: 'none' }}>
                  {faq.question}
                </summary>
                <div style={{ padding: '0 20px 20px', fontSize: '16px', lineHeight: '1.7', color: '#555' }}>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/#contact" className="btn" style={{ background: 'var(--primary)', color: 'var(--secondary)' }}>
            Schedule an Exclusive Site Visit
          </Link>
        </div>

      </div>
    </main>
  );
}
