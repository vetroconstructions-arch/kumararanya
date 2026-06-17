'use client';
import { useState } from 'react';

export default function ExpansiveData() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { q: "What is the price of NA plots at Aranya?", a: "Premium NA bungalow plots at Aranya start from ₹1.56 Crore onwards. Pricing varies based on exact plot size, layout orientation, and proximity to the biodiversity park." },
    { q: "Is Aranya within PMC limits?", a: "Yes, the project is strategically located with seamless connectivity to PMC infrastructure, ensuring rapid property value appreciation and excellent civic amenities." },
    { q: "What plot sizes are available?", a: "We offer tailored configurations: 2,240 sq.ft compact villa plots, 5,000 sq.ft premium villa plots, and 7,600 sq.ft ultra-premium estate plots." },
    { q: "Can I build a G+2 villa?", a: "Absolutely. All plots come with 100% clear NA (Non-Agricultural) titles, 1.5 FSI, and approved G+2 building permissions." },
    { q: "How far is it from Hinjewadi IT Park?", a: "Aranya is located just minutes away from the Hinjewadi IT corridor, providing the perfect balance between corporate proximity and biophilic tranquility." }
  ];

  return (
    <div style={{ width: '100%' }}>
      
      {/* Amenities Matrix */}
      <section id="amenities" style={{ padding: '100px 20px', background: '#0a192f', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', color: 'var(--secondary)', marginBottom: '20px', textAlign: 'center' }}>World-Class Infrastructure</h2>
          <p style={{ fontSize: '18px', color: '#ccc', textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            Engineered for generations. Aranya is equipped with IGBC-level sustainable infrastructure and ultra-luxury amenities.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {[
              { title: '2.5 Acre Clubhouse', desc: 'State-of-the-art recreation center with infinity edge pool and premium gymnasium.', icon: '🏛️' },
              { title: 'Miyawaki Forest', desc: 'A dense, native biodiversity park hosting 60+ species of birds and 2400+ trees.', icon: '🌳' },
              { title: '45-ft Boulevards', desc: 'Extra-wide internal concrete roads with underground cabling and solar street lights.', icon: '🛣️' },
              { title: '3-Tier Security', desc: '24/7 CCTV surveillance, biometric access, and a fully gated perimeter.', icon: '🛡️' }
            ].map((amenity, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '40px 30px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{amenity.icon}</div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'white' }}>{amenity.title}</h3>
                <p style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.6' }}>{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plot Configuration & Specifications */}
      <section id="plots" style={{ padding: '100px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>Plot Specifications & FSI</h2>
          <p style={{ fontSize: '18px', color: '#666', textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            Transparent data for serious investors. Aranya provides 100% Title Clear NA land with massive development potential.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {[
              { type: 'Compact Villa', size: '2,240 sq.ft', fsi: '1.5 FSI', permission: 'G+2 Floors' },
              { type: 'Premium Villa', size: '5,000 sq.ft', fsi: '1.5 FSI', permission: 'G+2 Floors' },
              { type: 'Signature Estate', size: '7,600 sq.ft', fsi: '1.5 FSI', permission: 'G+2 Floors' }
            ].map((spec, i) => (
              <div key={i} style={{ flex: '1 1 300px', maxWidth: '350px', background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderTop: '4px solid var(--secondary)' }}>
                <h4 style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', marginBottom: '10px' }}>{spec.type}</h4>
                <div style={{ fontSize: '36px', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '20px' }}>{spec.size}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                  <span style={{ color: '#666' }}>FSI Limit</span>
                  <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{spec.fsi}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eee', paddingTop: '15px', marginTop: '15px' }}>
                  <span style={{ color: '#666' }}>Permissions</span>
                  <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{spec.permission}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Buy Pipeline */}
      <section style={{ padding: '100px 20px', background: 'var(--primary)', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', color: 'var(--secondary)', marginBottom: '60px', textAlign: 'center' }}>Acquisition Pipeline</h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '24px', left: '10%', right: '10%', height: '2px', background: 'rgba(255,255,255,0.1)', zIndex: 0, display: 'none' }} className="timeline-line"></div>
            
            {[
              { step: '01', title: 'Virtual Review', desc: 'Analyze the Interactive Masterplan and select your preferred plot dimensions.' },
              { step: '02', title: 'Site Experience', desc: 'Schedule a private tour to physically experience the location and infrastructure.' },
              { step: '03', title: 'Secure Token', desc: 'Submit a token amount to officially block the plot for 24-48 hours.' },
              { step: '04', title: 'Registry', desc: 'Complete transparent documentation and receive your 100% Clear Title NA plot.' }
            ].map((item, i) => (
              <div key={i} style={{ flex: '1 1 200px', textAlign: 'center', padding: '20px', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '50px', height: '50px', background: 'var(--secondary)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', margin: '0 auto 20px', boxShadow: '0 0 0 10px rgba(197, 160, 89, 0.2)' }}>
                  {item.step}
                </div>
                <h4 style={{ fontSize: '20px', marginBottom: '15px' }}>{item.title}</h4>
                <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <style jsx>{`
            @media(min-width: 768px) {
              .timeline-line { display: block !important; }
            }
          `}</style>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>Frequently Asked Questions</h2>
          <p style={{ fontSize: '18px', color: '#666', textAlign: 'center', marginBottom: '60px' }}>
            Everything you need to know about the Aranya investment.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                style={{ border: '1px solid #eaeaea', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div style={{ padding: '25px', background: openFaq === i ? '#f9f9f9' : 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '18px', color: 'var(--primary)', margin: 0 }}>{faq.q}</h4>
                  <span style={{ fontSize: '24px', color: 'var(--secondary)', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</span>
                </div>
                <div style={{ 
                  padding: openFaq === i ? '0 25px 25px 25px' : '0 25px', 
                  maxHeight: openFaq === i ? '200px' : '0', 
                  opacity: openFaq === i ? 1 : 0, 
                  overflow: 'hidden', 
                  transition: 'all 0.3s ease-in-out',
                  background: '#f9f9f9'
                }}>
                  <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
