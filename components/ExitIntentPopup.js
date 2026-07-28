'use client';
import { useEffect, useState, useRef } from 'react';
import { submitLead } from '../lib/enquiryHelper';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggeredRef = useRef(false);
  const [formData, setFormData] = useState({ phone: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Check if user already saw this in previous sessions
    if (typeof window !== 'undefined') {
      const seen = localStorage.getItem('exitIntentSeen');
      if (seen) hasTriggeredRef.current = true;
    }

    const handleMouseLeave = (e) => {
      // If mouse crosses top of browser window and hasn't triggered yet
      if (e.clientY < 50 && !hasTriggeredRef.current) {
        setIsVisible(true);
        hasTriggeredRef.current = true;
        if (typeof window !== 'undefined') {
          localStorage.setItem('exitIntentSeen', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    try {
      await submitLead({
        name: 'Exit Intent Lead',
        phone: formData.phone,
        projectInterest: 'Aranya Masterplan & Pricing Sheet',
        source: 'Exit Intent Popup'
      });
      setStatus('success');
    } catch(err) {
      setStatus('error');
      setErrorMessage(err.message || 'Please check your WhatsApp number and try again.');
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
        
        <h2 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '15px', textAlign: 'center' }}>Wait! Don&apos;t Leave Empty Handed.</h2>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '30px', textAlign: 'center', lineHeight: '1.6' }}>
          Get the highly exclusive <strong>Aranya Masterplan & 9-Tier Costing Sheet</strong> delivered instantly to your WhatsApp.
        </p>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', color: '#27ae60', fontSize: '18px', fontWeight: 'bold', padding: '20px' }}>
            ✓ Brochure sent! Please check your WhatsApp shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input 
              type="tel" 
              placeholder="Enter WhatsApp Number (with country code)" 
              required 
              value={formData.phone}
              onChange={(e) => setFormData({ phone: e.target.value })}
              style={{ padding: '15px 20px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none', textAlign: 'center' }}
            />
            {status === 'error' && (
              <div style={{ color: '#e74c3c', fontSize: '13px', textAlign: 'center' }}>{errorMessage}</div>
            )}
            <button 
              type="submit" 
              disabled={status === 'loading'}
              style={{ padding: '16px', background: 'var(--secondary)', color: 'var(--primary)', fontSize: '18px', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: status === 'loading' ? 'not-allowed' : 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Me The Brochure →'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
