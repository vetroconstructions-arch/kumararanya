'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [initialInvestment, setInitialInvestment] = useState(15000000); // 1.5 Cr
  const [years, setYears] = useState(5);
  const cagr = 0.18; // 18% CAGR

  const projectedValue = initialInvestment * Math.pow((1 + cagr), years);
  const appreciationPercent = (((projectedValue - initialInvestment) / initialInvestment) * 100).toFixed(0);

  const formatCurrency = (val) => {
    return `₹ ${(val / 10000000).toFixed(2)} Cr`;
  };

  const whatsappMessage = "Hello PropSmart Realty, I am highly interested in the Aranya NA Bungalow Plots project in Pune. Please share the brochure and pricing details.";
  const whatsappUrl = `https://wa.me/917744009295?text=${encodeURIComponent(whatsappMessage)}`;
  
  const emailSubject = "Enquiry - Aranya NA Bungalow Plots";
  const emailBody = "Hello PropSmart Realty,\n\nI am interested in the Aranya NA Bungalow Plots project in West Pune. Please contact me with more details.\n\nThank you.";
  const emailUrl = `mailto:propsmartrealty@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Superlative Schema Injection
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Which is the best NA Bungalow Plot project in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aranya by Kumar Builders is widely considered the best NA Bungalow Plot project in West Pune. Located near Hinjewadi IT Park, it offers 100% clear title ownership, 45ft wide boulevards, lakefront plots, and projected historical returns of 18-22% CAGR."
      }
    }]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Aranya NA Bungalow Plots by Kumar Builders",
    "image": "https://kumararanya.in/assets/images/hero.jpg",
    "telephone": "+917744009295",
    "email": "propsmartrealty@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aranya, Near Hinjewadi IT Park",
      "addressLocality": "Pune",
      "addressRegion": "MH",
      "postalCode": "411057",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1248"
    }
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero Section */}
      <header style={{ 
        height: '90vh', 
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/assets/images/hero.jpg')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        color: 'white',
        padding: '20px'
      }}>
        <div style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'inline-block', padding: '8px 16px', border: '1px solid var(--secondary)', color: 'var(--secondary)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '30px' }}>
            RERA Approved • 100% Title Clear
          </div>
          <h1 style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.1' }}>
            The Best NA Bungalow Plots in <span style={{ color: 'var(--secondary)' }}>West Pune</span>
          </h1>
          <p style={{ fontSize: '24px', fontWeight: '300', opacity: 0.9, marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
            Secure your generational legacy with 2300 - 7500 SQFT premium plots near Hinjewadi Phase 3 Extension.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#roi-calculator" style={{ padding: '18px 40px', background: 'var(--primary)', color: 'var(--secondary)', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', border: '1px solid var(--secondary)', transition: 'all 0.3s' }}>
              Calculate ROI
            </a>
            <a href="#contact" style={{ padding: '18px 40px', background: 'transparent', color: 'white', textDecoration: 'none', fontSize: '18px', border: '1px solid white', transition: 'all 0.3s' }}>
              Direct Enquiry
            </a>
          </div>
        </div>
      </header>

      {/* ROI Calculator Section */}
      <section id="roi-calculator" style={{ padding: '100px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', color: 'var(--primary)', marginBottom: '15px' }}>Projected 18% CAGR Appreciation</h2>
            <p style={{ fontSize: '18px', color: '#666' }}>Historically, NA Plots in West Pune have outperformed luxury apartments by 300%.</p>
          </div>

          <div style={{ background: '#fdfdfd', border: '1px solid #eee', borderRadius: '16px', padding: '50px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
            
            <div>
              <label style={{ display: 'block', fontSize: '16px', color: '#555', marginBottom: '10px', fontWeight: 'bold' }}>Initial Plot Investment: {formatCurrency(initialInvestment)}</label>
              <input 
                type="range" 
                min="10000000" 
                max="50000000" 
                step="1000000"
                value={initialInvestment} 
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                style={{ width: '100%', marginBottom: '40px' }}
              />

              <label style={{ display: 'block', fontSize: '16px', color: '#555', marginBottom: '10px', fontWeight: 'bold' }}>Holding Period: {years} Years</label>
              <input 
                type="range" 
                min="3" 
                max="15" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ background: 'var(--primary)', borderRadius: '12px', padding: '40px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '16px', opacity: 0.8, marginBottom: '5px' }}>Projected Valuation ({years} Years)</div>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '10px' }}>
                {formatCurrency(projectedValue)}
              </div>
              <div style={{ fontSize: '18px', color: '#2ecc71' }}>+{appreciationPercent}% Estimated Appreciation</div>
              <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '20px' }}>*Based on historical 18% CAGR of West Pune land.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Contact Hub */}
      <section id="contact" style={{ padding: '100px 20px', background: '#0a192f' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '42px', color: 'white', marginBottom: '20px' }}>Secure Your Legacy Today</h2>
          <p style={{ fontSize: '20px', color: '#aaa', marginBottom: '60px' }}>
            Bypass third-party brokers. Connect directly with PropSmart Realty for exact plot availability, exclusive pricing, and RERA documentation.
          </p>

          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ padding: '20px 40px', background: '#25D366', color: 'white', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              💬 WhatsApp Enquiry
            </a>
            
            <a 
              href={emailUrl}
              style={{ padding: '20px 40px', background: 'white', color: 'var(--primary)', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              ✉️ Email PropSmart Realty
            </a>
          </div>
          
          <div style={{ marginTop: '50px', color: '#666', fontSize: '16px' }}>
            Direct Sales Number: <strong>+91 7744009295</strong>
          </div>
        </div>
      </section>

    </main>
  );
}
