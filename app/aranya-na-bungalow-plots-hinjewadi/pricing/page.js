import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import PlotAvailability from '../../../components/PlotAvailability';

export const metadata = {
  title: 'Pricing & Dimensions | Aranya NA Bungalow Plots in Hinjewadi',
  description: 'Explore the pricing, dimensions, and investment potential of Aranya NA Bungalow Plots in Hinjewadi. Starting from ₹1.49 Cr for 2450 sq.ft to 7600 sq.ft.',
  alternates: {
    canonical: 'https://www.kumararanya.in/aranya-na-bungalow-plots-hinjewadi/pricing'
  }
};

export default function PricingPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '150px 20px 80px', textAlign: 'center', background: '#0a192f', color: 'white' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px', color: 'var(--secondary)' }}>Pricing & Dimensions</h1>
        <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          Secure your legacy with premium NA Bungalow Plots in Hinjewadi. 100% Title Clear.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderTop: '4px solid var(--secondary)' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '10px' }}>Compact Villas</h3>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '20px' }}>2,450 sq.ft</div>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>Starting at ₹1.49 Cr*</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px', color: '#444' }}>
              <li style={{ marginBottom: '10px' }}>✓ Ideal for 4 BHK G+2 Villa</li>
              <li style={{ marginBottom: '10px' }}>✓ 1.5 FSI Sanctioned</li>
              <li style={{ marginBottom: '10px' }}>✓ Vastu Compliant Layouts</li>
            </ul>
            <Link href="/aranya-na-bungalow-plots-hinjewadi/contact" className="btn" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Request Floor Plan</Link>
          </div>

          <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderTop: '4px solid var(--primary)', transform: 'scale(1.05)', zIndex: 1 }}>
            <div style={{ background: 'var(--primary)', color: 'white', display: 'inline-block', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Most Popular</div>
            <h3 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '10px' }}>Premium Estates</h3>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '20px' }}>5,000 sq.ft</div>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>Starting at ₹3.10 Cr*</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px', color: '#444' }}>
              <li style={{ marginBottom: '10px' }}>✓ Ideal for 5 BHK Mansion</li>
              <li style={{ marginBottom: '10px' }}>✓ Space for Private Pool</li>
              <li style={{ marginBottom: '10px' }}>✓ Premium Corner Locations</li>
            </ul>
            <Link href="/aranya-na-bungalow-plots-hinjewadi/contact" className="btn" style={{ width: '100%', display: 'block', textAlign: 'center', background: 'var(--primary)', color: 'white' }}>Request Floor Plan</Link>
          </div>

          <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderTop: '4px solid var(--secondary)' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '10px' }}>Signature Estates</h3>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '20px' }}>7,600 sq.ft</div>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>Starting at ₹4.75 Cr*</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px', color: '#444' }}>
              <li style={{ marginBottom: '10px' }}>✓ Grand Frontage</li>
              <li style={{ marginBottom: '10px' }}>✓ Unobstructed Nature Views</li>
              <li style={{ marginBottom: '10px' }}>✓ Maximum Customization</li>
            </ul>
            <Link href="/aranya-na-bungalow-plots-hinjewadi/contact" className="btn" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Request Floor Plan</Link>
          </div>

        </div>

        {/* Live Inventory FOMO Grid */}
        <PlotAvailability />
      </div>
    </main>
  );
}
