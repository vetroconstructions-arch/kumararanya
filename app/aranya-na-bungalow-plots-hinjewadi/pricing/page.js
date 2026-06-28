import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import PricingGrid from '../../../components/PricingGrid';

export const metadata = {
  title: 'Pricing & Dimensions | Aranya NA Bungalow Plots in Hinjewadi',
  description: 'Explore the pricing, dimensions, and investment potential of Aranya NA Bungalow Plots in Hinjewadi. Starting from ₹1.56 Cr for 2240 sq.ft to 7600 sq.ft.',
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
        <PricingGrid />
      </div>
    </main>
  );
}
