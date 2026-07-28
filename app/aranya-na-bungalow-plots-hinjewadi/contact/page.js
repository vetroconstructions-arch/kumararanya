'use client';
import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import { submitLead } from '../../../lib/enquiryHelper';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        projectInterest: 'Aranya NA Bungalow Plots (Contact Page Request)',
        source: 'Dedicated Contact Page'
      });
      setStatus('success');
      setFormData({ name: '', phone: '', email: '' });
    } catch(err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please check your phone number.');
    }
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '150px 20px 80px', textAlign: 'center', background: '#0a192f', color: 'white' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px', color: 'var(--secondary)' }}>Contact Sales Team</h1>
        <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          Get in touch with our senior investment advisors to secure your exclusive Aranya NA Bungalow Plot near Hinjewadi IT Park.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ background: 'white', padding: '50px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
          <h2 style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: '30px', textAlign: 'center' }}>Request a Call Back</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input 
              type="text" 
              placeholder="Your Full Name *" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{ padding: '15px 20px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }}
            />
            <input 
              type="tel" 
              placeholder="Phone Number (with country code) *" 
              required 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              style={{ padding: '15px 20px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }}
            />
            <input 
              type="email" 
              placeholder="Email Address (Optional)" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={{ padding: '15px 20px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }}
            />
            <button type="submit" disabled={status === 'loading'} className="btn" style={{ padding: '15px', fontSize: '18px', border: 'none', cursor: 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}>
              {status === 'loading' ? 'Submitting...' : 'Submit Request →'}
            </button>

            {status === 'success' && <div style={{ color: '#27ae60', textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>✓ Thanks! An investment advisor will contact you shortly.</div>}
            {status === 'error' && <div style={{ color: '#e74c3c', textAlign: 'center', marginTop: '10px' }}>{errorMessage}</div>}
          </form>

        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto 100px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: '30px', textAlign: 'center' }}>Project Location</h2>
        <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid #ddd' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.026367500366!2d73.7275!3d18.5987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb3e728ecddb%3A0x6fb3c03531b7f05!2sMarunji%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0, display: 'block' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
