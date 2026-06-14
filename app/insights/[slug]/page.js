export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: `${title} | Aranya Insights`,
    description: `Market Intelligence Report on ${title} by Kumar Builders.`,
  }
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main style={{ padding: '120px 20px', minHeight: '100vh', background: '#f9f9f9' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: '36px', marginBottom: '20px' }}>{title}</h1>
        <div style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '30px', fontSize: '12px', color: '#999' }}>
          Published by <strong>Kumar Builders Market Intelligence</strong>
        </div>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
          This Insight Report is natively rendered via Next.js Dynamic Routing. It replaces the physically generated HTML files from the previous architecture.
        </p>
      </div>
    </main>
  );
}
