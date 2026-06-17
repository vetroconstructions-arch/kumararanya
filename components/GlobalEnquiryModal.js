'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalEnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    // Check if the user has already seen or submitted the modal in this session
    const hasSeenModal = sessionStorage.getItem('aranya_enquiry_modal_seen');
    if (!hasSeenModal) {
      // Delay the modal slightly to allow the hero section to shine first
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3500); // 3.5 seconds delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('aranya_enquiry_modal_seen', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, projectInterest: 'Aranya Global Modal Enquiry' }),
      });

      if (res.ok) {
        setFormStatus('success');
        sessionStorage.setItem('aranya_enquiry_modal_seen', 'true');
        setTimeout(() => setIsOpen(false), 3000);
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
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
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(10, 25, 47, 0.8)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{ position: 'relative', width: '90%', maxWidth: '450px', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Header */}
            <div style={{ background: 'var(--primary)', padding: '30px 20px', textAlign: 'center', color: 'white', position: 'relative' }}>
              <button 
                onClick={handleClose}
                style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '24px', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
              >
                ×
              </button>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Unlock Exclusive Access</h2>
              <p style={{ color: 'var(--secondary)', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>Limited Inventory Remaining</p>
            </div>

            {/* Body */}
            <div style={{ padding: '30px' }}>
              {formStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '20px 0', color: '#27ae60' }}>
                  <div style={{ fontSize: '48px', marginBottom: '15px' }}>✓</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Enquiry Received</h3>
                  <p style={{ color: '#666' }}>Our investment experts will contact you shortly with the private brochure and pricing details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p style={{ textAlign: 'center', color: '#555', marginBottom: '10px', fontSize: '15px' }}>Register now to receive the Masterplan, detailed pricing, and to schedule a private site visit.</p>
                  
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name *" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      style={{ width: '100%', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#ddd'}
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number *" 
                      required 
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      style={{ width: '100%', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s' }}
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
                      style={{ width: '100%', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#ddd'}
                    />
                  </div>

                  {formStatus === 'error' && (
                    <div style={{ color: '#e74c3c', fontSize: '14px', textAlign: 'center' }}>
                      Failed to send enquiry. Please try again.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={formStatus === 'loading'}
                    style={{ 
                      background: 'var(--secondary)', 
                      color: 'var(--primary)', 
                      padding: '15px', 
                      border: 'none', 
                      borderRadius: '8px', 
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      cursor: formStatus === 'loading' ? 'not-allowed' : 'pointer',
                      marginTop: '10px',
                      opacity: formStatus === 'loading' ? 0.7 : 1,
                      boxShadow: '0 4px 15px rgba(212,175,55,0.3)'
                    }}
                  >
                    {formStatus === 'loading' ? 'Processing...' : 'Request Instant Access'}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '12px', color: '#999', marginTop: '10px' }}>
                    By registering, you agree to our privacy policy and consent to receive communication via Call/WhatsApp.
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
