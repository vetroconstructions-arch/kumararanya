'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function Configurator() {
  const [plotSize, setPlotSize] = useState(2450); // 2450, 5000, 7600
  const [hasPool, setHasPool] = useState(false);
  const [hasSolar, setHasSolar] = useState(false);
  const [landscaping, setLandscaping] = useState('Standard'); // Standard, Zen, Miyawaki

  // Pricing Logic (Mock)
  const baseRate = 6000; // Rs per sqft
  const plotCost = plotSize * baseRate;
  const poolCost = hasPool ? 1200000 : 0;
  const solarCost = hasSolar ? 450000 : 0;
  
  let landscapeCost = 0;
  if (landscaping === 'Zen') landscapeCost = 300000;
  if (landscaping === 'Miyawaki') landscapeCost = 500000;

  const totalCost = plotCost + poolCost + solarCost + landscapeCost;
  
  // Projected ROI (18% over 5 years)
  const projectedValue = totalCost * Math.pow(1.18, 5);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(val);
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      
      <div style={{ paddingTop: '100px', display: 'flex', minHeight: '100vh' }}>
        
        {/* Left Side: Controls */}
        <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '36px', color: 'var(--primary)', marginBottom: '10px' }}>Build Your Legacy</h1>
            <p style={{ color: '#666', marginBottom: '40px' }}>Customize your Aranya estate and project your 5-year ROI.</p>

            {/* Plot Size */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--primary)' }}>1. Select Plot Dimension</h3>
              <div style={{ display: 'flex', gap: '15px' }}>
                {[2450, 5000, 7600].map(size => (
                  <button 
                    key={size}
                    onClick={() => setPlotSize(size)}
                    style={{
                      flex: 1, padding: '15px', borderRadius: '8px', cursor: 'pointer',
                      background: plotSize === size ? 'var(--primary)' : 'white',
                      color: plotSize === size ? 'var(--secondary)' : '#333',
                      border: plotSize === size ? '2px solid var(--secondary)' : '1px solid #ccc',
                      fontWeight: 'bold', transition: 'all 0.3s'
                    }}
                  >
                    {size} sq.ft
                  </button>
                ))}
              </div>
            </div>

            {/* Premium Add-ons */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--primary)' }}>2. Premium Upgrades</h3>
              
              <label style={{ display: 'flex', alignItems: 'center', background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #eee', marginBottom: '10px', cursor: 'pointer' }}>
                <input type="checkbox" checked={hasPool} onChange={(e) => setHasPool(e.target.checked)} style={{ marginRight: '15px', transform: 'scale(1.5)' }} />
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Infinity Pool Setup</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>+ ₹ 12.00 Lacs</div>
                </div>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #eee', marginBottom: '10px', cursor: 'pointer' }}>
                <input type="checkbox" checked={hasSolar} onChange={(e) => setHasSolar(e.target.checked)} style={{ marginRight: '15px', transform: 'scale(1.5)' }} />
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>5kW Solar Grid</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>+ ₹ 4.50 Lacs (Zero Electricity Bill)</div>
                </div>
              </label>
            </div>

            {/* Landscaping */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--primary)' }}>3. Landscaping Theme</h3>
              <div style={{ display: 'flex', gap: '15px' }}>
                {['Standard', 'Zen', 'Miyawaki'].map(theme => (
                  <button 
                    key={theme}
                    onClick={() => setLandscaping(theme)}
                    style={{
                      flex: 1, padding: '15px', borderRadius: '8px', cursor: 'pointer',
                      background: landscaping === theme ? 'var(--primary)' : 'white',
                      color: landscaping === theme ? 'var(--secondary)' : '#333',
                      border: landscaping === theme ? '2px solid var(--secondary)' : '1px solid #ccc',
                      fontWeight: 'bold', transition: 'all 0.3s'
                    }}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>
            
          </div>
        </div>

        {/* Right Side: Financial Summary */}
        <div style={{ flex: 1, background: '#0a192f', color: 'white', padding: '60px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto', width: '100%' }}>
            
            <div style={{ fontSize: '14px', letterSpacing: '2px', color: 'var(--secondary)', textTransform: 'uppercase', marginBottom: '10px' }}>Financial Overview</div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <span>Base Plot ({plotSize} sqft):</span>
                <span>{formatCurrency(plotCost)}</span>
              </div>
              {hasPool && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#aaa' }}>
                  <span>Infinity Pool:</span>
                  <span>{formatCurrency(poolCost)}</span>
                </div>
              )}
              {hasSolar && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#aaa' }}>
                  <span>Solar Grid:</span>
                  <span>{formatCurrency(solarCost)}</span>
                </div>
              )}
              {landscaping !== 'Standard' && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#aaa' }}>
                  <span>{landscaping} Garden:</span>
                  <span>{formatCurrency(landscapeCost)}</span>
                </div>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', fontSize: '24px', fontWeight: 'bold', color: 'var(--secondary)' }}>
                <span>Total Asset Value:</span>
                <span>{formatCurrency(totalCost)}</span>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #b8901f 100%)', color: 'black', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '5px' }}>Projected 5-Year ROI (18% CAGR)</div>
              <div style={{ fontSize: '36px', fontWeight: '900' }}>{formatCurrency(projectedValue)}</div>
              <div style={{ fontSize: '12px', marginTop: '10px', opacity: 0.8 }}>Based on historical Hinjewadi Phase 3 data.</div>
            </div>

            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <Link href="/aranya-na-bungalow-plots-hinjewadi/pricing" className="btn" style={{ padding: '20px 40px', width: '100%', display: 'block', fontSize: '18px', boxShadow: '0 10px 30px rgba(212, 175, 55, 0.2)' }}>
                Lock In This Configuration
              </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
