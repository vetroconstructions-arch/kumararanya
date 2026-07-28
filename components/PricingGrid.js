'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function PricingGrid() {
  const [currency, setCurrency] = useState('INR');

  // Proportionate pricing in INR based on ₹7,166.67 / sq.ft (₹1.72 Cr for 2,400 sq.ft)
  const plots = [
    {
      name: 'Compact Villa Plot',
      size: '2,400 sq.ft',
      basePrice: 17200000,
      features: ['Ideal for 4 BHK G+2 Villa', '1.5 FSI Sanctioned', 'Vastu Compliant North/East Facing'],
      popular: false
    },
    {
      name: 'Executive Villa Plot',
      size: '2,699 sq.ft',
      basePrice: 19342833,
      features: ['Spacious 4/5 BHK Villa Layout', '1.5 FSI Sanctioned', 'Private Lawns Area'],
      popular: false
    },
    {
      name: 'Prime Bungalow Plot',
      size: '3,050 sq.ft',
      basePrice: 21858333,
      features: ['Optimal Bungalow Dimensions', '1.5 FSI Sanctioned', 'Dual-Car Parking Bay'],
      popular: true
    },
    {
      name: 'Grand Garden Plot',
      size: '3,800 sq.ft',
      basePrice: 27233333,
      features: ['Grand Garden Courtyard', 'Space for Plunge Pool', 'Direct Clubhouse Access Corridor'],
      popular: false
    },
    {
      name: 'Luxury Villa Estate',
      size: '4,199 sq.ft',
      basePrice: 30092833,
      features: ['Luxury Villa Estate Footprint', '3-Car Covered Parking', 'Unobstructed Green Belt Views'],
      popular: false
    },
    {
      name: 'Premium Estate',
      size: '4,950 sq.ft',
      basePrice: 35475000,
      features: ['Massive Private Garden', 'Space for Swimming Pool', 'Corner & Park-Facing Options'],
      popular: true
    },
    {
      name: 'Royal Mansion Estate',
      size: '6,500 sq.ft',
      basePrice: 46583333,
      features: ['Royal Mansion Proportions', 'Multi-Vehicle Garage', 'Dedicated Security & Staff Quarter Zone'],
      popular: false
    },
    {
      name: 'Imperial Bungalow Plot',
      size: '6,909 sq.ft',
      basePrice: 49514500,
      features: ['Imperial Estate Layout', 'Panoramic Hill/Lake Views', 'Bespoke Architectural Freedom'],
      popular: false
    },
    {
      name: 'Signature Lakefront Mansion',
      size: '7,600 sq.ft',
      basePrice: 54466667,
      features: ['Ultimate Privacy & Sanctuary', 'Multi-Vehicle Luxury Garage', 'Flagship Aranya Trophy Plot'],
      popular: false
    }
  ];

  // Rough exchange rates (in production, fetch from an API)
  const exchangeRates = {
    INR: { symbol: '₹', rate: 1, format: (val) => `${(val / 10000000).toFixed(2)} Cr` },
    USD: { symbol: '$', rate: 0.012, format: (val) => `${Math.round(val * 0.012).toLocaleString()} USD` },
    AED: { symbol: 'AED ', rate: 0.044, format: (val) => `${Math.round(val * 0.044).toLocaleString()}` },
    GBP: { symbol: '£', rate: 0.0095, format: (val) => `${Math.round(val * 0.0095).toLocaleString()} GBP` },
  };

  return (
    <div id="pricing" style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '38px', color: 'var(--primary)', marginBottom: '15px' }}>Proportionate Plot Pricing (2,400–7,600 SQFT)</h2>
        <p style={{ fontSize: '18px', color: '#666' }}>
          Transparent pricing starting at ₹1.72 Cr for 2,400 sq.ft. Select your preferred currency below.
        </p>
      </div>

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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        {plots.map((plot, idx) => (
          <div key={idx} style={{ 
            background: 'white', 
            padding: '40px', 
            borderRadius: '12px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
            borderTop: `4px solid ${plot.popular ? 'var(--primary)' : 'var(--secondary)'}`,
            transform: plot.popular ? 'scale(1.03)' : 'none',
            zIndex: plot.popular ? 1 : 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
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
            </div>
            <Link href="/aranya-na-bungalow-plots-hinjewadi/contact" className="btn" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Request Floor Plan &amp; Quote</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
