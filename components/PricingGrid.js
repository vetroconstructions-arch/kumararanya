'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function PricingGrid() {
  const [currency, setCurrency] = useState('INR');

  // Base prices in INR
  const plots = [
    { name: 'Compact Villas', size: '2,240 sq.ft', basePrice: 15680000, features: ['Ideal for 4 BHK G+2 Villa', '1.5 FSI Sanctioned', 'Vastu Compliant Layouts'], popular: false },
    { name: 'Premium Estates', size: '5,000 sq.ft', basePrice: 35000000, features: ['Massive Private Garden', 'Space for Swimming Pool', 'Unobstructed Nature Views'], popular: true },
    { name: 'Signature Mansions', size: '7,600 sq.ft', basePrice: 53200000, features: ['Ultimate Privacy & Security', 'Multi-Vehicle Garage', 'Bespoke Architectural Freedom'], popular: false },
  ];

  // Rough exchange rates (in production, fetch from an API)
  const exchangeRates = {
    INR: { symbol: '₹', rate: 1, format: (val) => `${(val / 10000000).toFixed(2)} Cr` },
    USD: { symbol: '$', rate: 0.012, format: (val) => `${(val * 0.012).toLocaleString()} USD` },
    AED: { symbol: 'AED ', rate: 0.044, format: (val) => `${(val * 0.044).toLocaleString()}` },
    GBP: { symbol: '£', rate: 0.0095, format: (val) => `${(val * 0.0095).toLocaleString()} GBP` },
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
      
      {/* Currency Toggle */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {Object.keys(exchangeRates).map((cur) => (
          <button 
            key={cur}
            onClick={() => setCurrency(cur)}
            style={{
              padding: '10px 20px',
              borderRadius: '30px',
              border: `2px solid ${currency === cur ? 'var(--secondary)' : '#ddd'}`,
              background: currency === cur ? 'var(--secondary)' : 'white',
              color: currency === cur ? 'white' : '#666',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {cur}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {plots.map((plot, idx) => (
          <div key={idx} style={{ 
            background: 'white', 
            padding: '40px', 
            borderRadius: '12px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
            borderTop: `4px solid ${plot.popular ? 'var(--primary)' : 'var(--secondary)'}`,
            transform: plot.popular ? 'scale(1.05)' : 'none',
            zIndex: plot.popular ? 1 : 0
          }}>
            {plot.popular && <div style={{ background: 'var(--primary)', color: 'white', display: 'inline-block', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Most Popular</div>}
            <h3 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '10px' }}>{plot.name}</h3>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '20px' }}>{plot.size}</div>
            
            {/* Dynamic Price Rendering */}
            <p style={{ fontSize: '22px', color: '#333', fontWeight: 'bold', marginBottom: '30px' }}>
              Starting at {exchangeRates[currency].symbol}{exchangeRates[currency].format(plot.basePrice)}*
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px', color: '#444' }}>
              {plot.features.map((feat, fIdx) => (
                <li key={fIdx} style={{ marginBottom: '10px' }}>✓ {feat}</li>
              ))}
            </ul>
            <Link href="/aranya-na-bungalow-plots-hinjewadi/contact" className="btn" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Request Floor Plan</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
