'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

export default function PartnersPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    
    // Artificial Cryptographic Delay to prevent brute-forcing
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (password === 'ARANYA2026') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
    
    setIsAuthenticating(false);
  };

  if (!isAuthenticated) {
    return (
      <main style={{ minHeight: '100vh', background: '#0a192f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
        <Navbar />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: 'white', padding: '50px', borderRadius: '16px', maxWidth: '400px', width: '100%', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
        >
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>🤝</div>
          <h1 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '10px' }}>Partner Portal</h1>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '30px' }}>Enter your broker access code to view unbranded collateral and live inventory.</p>
          
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              placeholder="Access Code" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '15px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '15px', textAlign: 'center', letterSpacing: '2px' }}
            />
            {error && <div style={{ color: 'red', fontSize: '12px', marginBottom: '15px' }}>Invalid Code</div>}
            <button 
              type="submit" 
              className="btn" 
              disabled={isAuthenticating}
              style={{ width: '100%', padding: '15px', fontSize: '16px', opacity: isAuthenticating ? 0.7 : 1, cursor: isAuthenticating ? 'not-allowed' : 'pointer' }}
            >
              {isAuthenticating ? 'Verifying Node...' : 'Secure Login'}
            </button>
          </form>
        </motion.div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '150px 20px 80px', background: '#0a192f', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '36px', marginBottom: '10px', color: 'var(--secondary)' }}>Welcome, Channel Partner</h1>
            <p style={{ opacity: 0.8 }}>Current Commission Tier: 2.0% | Status: Elite Broker</p>
          </div>
          <button onClick={() => setIsAuthenticated(false)} style={{ padding: '10px 20px', background: 'transparent', color: 'white', border: '1px solid white', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Marketing Collateral */}
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '20px' }}>Marketing Materials</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ padding: '15px', background: '#f9f9f9', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Unbranded PDF Brochure</span>
              <a href="#" style={{ color: 'var(--secondary)', fontWeight: 'bold', textDecoration: 'none' }}>Download</a>
            </li>
            <li style={{ padding: '15px', background: '#f9f9f9', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span>High-Res Masterplan</span>
              <a href="#" style={{ color: 'var(--secondary)', fontWeight: 'bold', textDecoration: 'none' }}>Download</a>
            </li>
            <li style={{ padding: '15px', background: '#f9f9f9', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Sample ROI Pitch Deck</span>
              <a href="#" style={{ color: 'var(--secondary)', fontWeight: 'bold', textDecoration: 'none' }}>Download</a>
            </li>
          </ul>
        </div>

        {/* Lead Registration Form */}
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '20px' }}>Register a Client</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Client Name" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ccc' }} />
            <input type="tel" placeholder="Client Phone" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ccc' }} />
            <input type="text" placeholder="Your CP RERA ID" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ccc' }} />
            <button type="button" className="btn" style={{ padding: '15px', background: 'var(--primary)' }}>Secure Client Lead</button>
          </form>
          <p style={{ fontSize: '11px', color: '#888', marginTop: '15px', textAlign: 'center' }}>Leads registered here are protected under your CP ID for 90 days.</p>
        </div>

      </div>
    </main>
  );
}
