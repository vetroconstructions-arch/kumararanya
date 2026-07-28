'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function GlobalEnquiryModal() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // 1. Global event listener to open modal immediately when any CTA/Book Now button is clicked
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('open-enquiry-modal', handleOpenModal);

    // 2. Preload & auto-open modal after 4 seconds for new visitors
    const hasSeenModal = sessionStorage.getItem('aranya_enquiry_modal_seen');
    let timer;
    if (!hasSeenModal) {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000);
    }

    return () => {
      window.removeEventListener('open-enquiry-modal', handleOpenModal);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('aranya_enquiry_modal_seen', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    let token = '';
    if (executeRecaptcha) {
      try {
        token = await executeRecaptcha('enquiry_submit');
      } catch (err) {
        console.warn('reCAPTCHA error:', err);
      }
    }

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          projectInterest: 'Aranya NA Bungalow Plots (Global Modal)', 
          recaptchaToken: token 
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormStatus('success');
        sessionStorage.setItem('aranya_enquiry_modal_seen', 'true');
        
        // GTM Event Push
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'lead_submitted',
            form_type: 'global_modal_preload',
            project: 'Kumar Aranya'
          });
        }
        
        setTimeout(() => {
          setIsOpen(false);
          setFormStatus('idle');
          setFormData({ name: '', phone: '', email: '' });
        }, 3000);
      } else {
        setFormStatus('error');
        setErrorMessage(data.error || 'Failed to submit. Please check your phone number.');
      }
    } catch (err) {
      setFormStatus('error');
      setErrorMessage('Network error. Please check your connection or contact via WhatsApp.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(10, 25, 47, 0.85)', backdropFilter: 'blur(10px)' }}
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{ position: 'relative', width: '90%', maxWidth: '460px', background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)', border: '1px solid rgba(212,175,55,0.3)' }}
          >
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg, #0a192f 0%, #1a2a42 100%)', padding: '32px 24px', textAlign: 'center', color: 'white', position: 'relative', borderBottom: '3px solid var(--secondary)' }}>
              <button 
                onClick={handleClose}
                style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '26px', cursor: 'pointer', transition: 'color 0.2s', lineHeight: 1 }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                aria-label="Close modal"
              >
                ×
              </button>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: 'white' }}>Unlock Exclusive Access</h2>
              <p style={{ color: 'var(--secondary)', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>100% PMRDA NA Bungalow Plots near Hinjewadi</p>
            </div>

            {/* Body */}
            <div style={{ padding: '30px' }}>
              {formStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '25px 0', color: '#27ae60' }}>
                  <div style={{ fontSize: '56px', marginBottom: '15px' }}>✓</div>
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px', color: '#0a192f' }}>Enquiry Received</h3>
                  <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.6 }}>Our senior investment advisor will contact you shortly with the private masterplan and pricing sheet starting from ₹1.72 Cr.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <p style={{ textAlign: 'center', color: '#555', marginBottom: '6px', fontSize: '14px', lineHeight: 1.5 }}>Register below to download the official Brochure, detailed 9-tier costing, and schedule a site visit.</p>
                  
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Full Name *" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      style={{ width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '10px', fontSize: '15px', outline: 'none', transition: 'border-color 0.3s', color: '#222' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#ddd'}
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number (with country code) *" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      style={{ width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '10px', fontSize: '15px', outline: 'none', transition: 'border-color 0.3s', color: '#222' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#ddd'}
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address (Optional)" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      style={{ width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '10px', fontSize: '15px', outline: 'none', transition: 'border-color 0.3s', color: '#222' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#ddd'}
                    />
                  </div>

                  {formStatus === 'error' && (
                    <div style={{ color: '#e74c3c', fontSize: '14px', textAlign: 'center', background: 'rgba(231, 76, 60, 0.1)', padding: '10px', borderRadius: '8px' }}>
                      {errorMessage || 'Failed to send enquiry. Please try again.'}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={formStatus === 'loading'}
                    style={{ 
                      background: 'linear-gradient(135deg, #d4af37 0%, #aa8000 100%)', 
                      color: '#0a192f', 
                      padding: '16px', 
                      border: 'none', 
                      borderRadius: '10px', 
                      fontSize: '17px', 
                      fontWeight: 'bold', 
                      cursor: formStatus === 'loading' ? 'not-allowed' : 'pointer',
                      marginTop: '6px',
                      opacity: formStatus === 'loading' ? 0.7 : 1,
                      boxShadow: '0 6px 20px rgba(212,175,55,0.35)',
                      transition: 'transform 0.2s'
                    }}
                  >
                    {formStatus === 'loading' ? 'Processing Enquiry...' : 'Request Instant Access →'}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '11px', color: '#888', marginTop: '6px', lineHeight: 1.4 }}>
                    By submitting, you agree to our privacy policy and consent to receive property updates via Call/WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
