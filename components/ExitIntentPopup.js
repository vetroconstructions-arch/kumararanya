'use client';
import { useEffect, useState } from 'react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [formData, setFormData] = useState({ phone: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    // Check if user already saw this in previous sessions
    if (typeof window !== 'undefined') {
      const seen = localStorage.getItem('exitIntentSeen');
      if (seen) setHasTriggered(true);
    }

    const handleMouseLeave = (e) => {
      // If mouse crosses top of browser window and hasn't triggered yet
      if (e.clientY < 50 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
        if (typeof window !== 'undefined') {
          localStorage.setItem('exitIntentSeen', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Exit Intent Lead', phone: formData.phone, source: 'Exit Intent Popup' })
      });
      if(res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch(err) {
      setStatus('error');
    }
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, width: '100%', height: '100vh',
      background: 'rgba(10, 25, 47, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 10000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '50px',
        borderRadius: '16px',
        maxWidth: '500px',
        width: '100%',
        position: 'relative',
        boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
      }}>
        <button 
          onClick={() => setIsVisible(false)}
          style={{
            position: 'absolute', top: '15px', right: '20px',
            background: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#888'
          }}
        >×</button>
        
        <h2 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '15px', textAlign: 'center' }}>Wait! Don't Leave Empty Handed.</h2>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '30px', textAlign: 'center', lineHeight: '1.6' }}>
          Get the highly exclusive <strong>Aranya Masterplan & Pricing Brochure</strong> delivered instantly to your WhatsApp.
        </p>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', color: 'green', fontSize: '18px', fontWeight: 'bold', padding: '20px' }}>
            Brochure sent! Please check your WhatsApp.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input 
              type="tel" 
              placeholder="Enter your 10-digit WhatsApp Number" 
              required 
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={(e) => setFormData({ phone: e.target.value })}
              style={{ padding: '15px 20px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none', textAlign: 'center' }}
            />
            <button type="submit" disabled={status === 'loading'} className="btn" style={{ padding: '15px', fontSize: '18px', border: 'none', cursor: 'pointer', background: 'var(--secondary)', color: 'var(--primary)', fontWeight: 'bold' }}>
              {status === 'loading' ? 'Sending...' : 'Get Instant Access'}
            </button>
            {status === 'error' && <div style={{ color: 'red', textAlign: 'center', fontSize: '14px' }}>Connection error. Please try again.</div>}
          </form>
        )}
      </div>
    </div>
  );
}
