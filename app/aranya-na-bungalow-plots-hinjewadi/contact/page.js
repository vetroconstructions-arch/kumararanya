'use client';
import { useState } from 'react';
import Navbar from '../../../components/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Contact Page' })
      });
      if(res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '' });
      } else {
        setStatus('error');
      }
    } catch(err) {
      setStatus('error');
    }
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '150px 20px 80px', textAlign: 'center', background: '#0a192f', color: 'white' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px', color: 'var(--secondary)' }}>Contact Sales Team</h1>
        <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          Get in touch with our experts to secure your exclusive Aranya NA Bungalow Plot near Hinjewadi IT Park.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ background: 'white', padding: '50px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
          <h2 style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: '30px', textAlign: 'center' }}>Request a Call Back</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input 
              type="text" 
              placeholder="Your Full Name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{ padding: '15px 20px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }}
            />
            <input 
              type="tel" 
              placeholder="Phone Number (10 digits)" 
              required 
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              style={{ padding: '15px 20px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }}
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={{ padding: '15px 20px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }}
            />
            <button type="submit" disabled={status === 'loading'} className="btn" style={{ padding: '15px', fontSize: '18px', border: 'none', cursor: 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}>
              {status === 'loading' ? 'Submitting...' : 'Submit Request'}
            </button>

            {status === 'success' && <div style={{ color: 'green', textAlign: 'center', marginTop: '10px' }}>Thanks! We will contact you shortly.</div>}
            {status === 'error' && <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>Something went wrong. Please try again.</div>}
          </form>

        </div>
      </div>
    </main>
  );
}
