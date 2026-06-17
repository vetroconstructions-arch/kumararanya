import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0a192f', color: 'white', fontFamily: 'Inter, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '120px', fontWeight: '900', color: 'var(--secondary)', lineHeight: '1', marginBottom: '20px' }}>404</h1>
      <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Uncharted Territory</h2>
      <p style={{ color: '#aaa', maxWidth: '600px', marginBottom: '40px', lineHeight: '1.6', fontSize: '18px' }}>
        The page or listing you are looking for has either been sold or moved. Return to the masterplan to explore available premium bungalow plots in Pune.
      </p>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{ padding: '15px 30px', background: 'var(--secondary)', color: 'var(--primary)', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 10px 30px rgba(212,175,55,0.2)' }}>
          Return Home
        </Link>
        <Link href="/aranya-na-bungalow-plots-hinjewadi/pricing" style={{ padding: '15px 30px', background: 'transparent', color: 'white', border: '1px solid white', borderRadius: '8px', fontSize: '16px', textDecoration: 'none' }}>
          View Pricing & Availability
        </Link>
      </div>
    </div>
  );
}
