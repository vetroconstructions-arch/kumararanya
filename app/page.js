'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MasterplanInteractive from '../components/MasterplanInteractive';
import ExpansiveData from '../components/ExpansiveData';
import PuneMarketAnalysis from '../components/PuneMarketAnalysis';

export default function Home() {
  const [initialInvestment, setInitialInvestment] = useState(14900000); // 1.49 Cr
  const [years, setYears] = useState(5);
  
  // Enquiry Form State
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error
  const cagr = 0.18; // 18% CAGR

  const projectedValue = initialInvestment * Math.pow((1 + cagr), years);
  const appreciationPercent = (((projectedValue - initialInvestment) / initialInvestment) * 100).toFixed(0);

  const formatCurrency = (val) => {
    return `₹ ${(val / 10000000).toFixed(2)} Cr`;
  };

  const whatsappMessage = "Hello, I am highly interested in the Aranya NA Bungalow Plots project in Pune. Please share the brochure and pricing details.";
  const whatsappUrl = `https://wa.me/917744009295?text=${encodeURIComponent(whatsappMessage)}`;

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, projectInterest: 'Aranya NA Bungalow Plots' })
      });
      
      if (res.ok) {
        setFormStatus('success');
        setFormData({ name: '', phone: '', email: '' });

        // Fire Conversion Events
        if (typeof window !== 'undefined') {
          if (window.gtag) {
            window.gtag('event', 'generate_lead', {
              event_category: 'General Enquiry',
              event_label: 'Homepage Form'
            });
          }
          if (window.fbq) {
            window.fbq('track', 'Lead', {
              content_name: 'Homepage Enquiry'
            });
          }
        }
      } else {
        setFormStatus('error');
      }
    } catch(err) {
      setFormStatus('error');
    }
  };

  // Merged Superlative & General FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best NA Bungalow Plot project in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aranya by Kumar Builders is widely considered the best NA Bungalow Plot project in West Pune. Located near Hinjewadi IT Park in Marunji, it is a 25+ Acre exclusive township limited to exactly 180 plots. It offers 100% clear title ownership and projected historical returns of 18-22% CAGR."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price of NA plots at Aranya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premium NA bungalow plots at Aranya start from ₹1.4 Crore onwards. Pricing varies based on exact plot size, layout orientation, and proximity to the biodiversity park."
        }
      },
      {
        "@type": "Question",
        "name": "Is Aranya within PMC limits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the project is strategically located with seamless connectivity to PMC infrastructure, ensuring rapid property value appreciation and excellent civic amenities."
        }
      },
      {
        "@type": "Question",
        "name": "Can I build a G+2 villa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All plots come with 100% clear NA (Non-Agricultural) titles, 1.5 FSI, and approved G+2 building permissions."
        }
      }
    ]
  };

  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Aranya NA Bungalow Plots by Kumar Builders",
    "description": "Premium 100% Title Clear PMRDA NA Sanctioned plots in West Pune, starting at ₹1.49 Cr.",
    "url": "https://www.kumararanya.in/",
    "image": "https://www.kumararanya.in/assets/images/scenic_villa.png",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "14000000",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock"
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Buy NA Plots at Aranya",
    "description": "Step-by-step process to book your premium NA bungalow plot at Aranya.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Virtual Review",
        "text": "Analyze the Interactive Masterplan and select your preferred plot dimensions."
      },
      {
        "@type": "HowToStep",
        "name": "Site Experience",
        "text": "Schedule a private tour to physically experience the location and infrastructure."
      },
      {
        "@type": "HowToStep",
        "name": "Secure Token",
        "text": "Submit a token amount to officially block the plot for 24-48 hours."
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Kumar Aranya Marunji - NA Bungalow Plots",
    "image": "https://kumararanya.in/assets/images/scenic_villa.png",
    "telephone": "+917744009295",
    "email": "propsmartrealty@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kumar Aranya, Near Hinjewadi IT Park Phase 1",
      "addressLocality": "Marunji, Pune",
      "addressRegion": "MH",
      "postalCode": "411057",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.5987",
      "longitude": "73.7380"
    },
    "hasMap": "https://maps.google.com/?cid=1234567890",
    "sameAs": [
      "https://www.facebook.com/kumarbuilders",
      "https://www.instagram.com/kumarbuilders"
    ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Hero Section */}
      <section style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url(/assets/images/scenic_villa.png)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.6)' }} />
        
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div style={{ fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px', color: 'var(--secondary)', fontWeight: 'bold' }}>The Ultimate Legacy Investment</div>
            <h1 style={{ fontSize: '64px', fontWeight: '900', marginBottom: '20px', lineHeight: '1.1', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>KUMAR ARANYA <br/>MARUNJI PLOTS</h1>
            <p style={{ fontSize: '24px', maxWidth: '800px', margin: '0 auto 40px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              A 25+ Acre Super-Premium Gated Community in Marunji<br/>Just 15 minutes from Hinjewadi IT Park.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <Link href="/aranya-na-bungalow-plots-hinjewadi/pricing" className="btn" style={{ padding: '20px 40px', fontSize: '18px', boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)' }}>View Pricing & Details</Link>
              <Link href="/aranya-na-bungalow-plots-hinjewadi/contact" className="btn btn-outline" style={{ padding: '20px 40px', fontSize: '18px', color: 'white', borderColor: 'white' }}>Schedule a Site Visit</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <PuneMarketAnalysis />

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

      {/* Interactive Masterplan Section */}
      <section id="layout" style={{ padding: '100px 20px', background: '#f9f9f9', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', color: 'var(--primary)', marginBottom: '20px' }}>Interactive Masterplan</h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
            Explore the Aranya layout. Click on available plots to view pricing, specifications, and instantly request a 24-hour block.
          </p>
          
          <MasterplanInteractive />
        </div>
      </section>

      {/* Massive Expansive Data Matrix */}
      <ExpansiveData />

      {/* Direct Contact Hub */}
      <section id="contact" style={{ padding: '100px 20px', background: '#0a192f' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '42px', color: 'white', marginBottom: '20px' }}>Secure Your Legacy Today</h2>
          <p style={{ fontSize: '18px', color: '#aaa', marginBottom: '40px' }}>
            Bypass third-party brokers. Connect directly with the Aranya Sales Team for exact plot availability, exclusive pricing, and PMRDA NA sanction documentation.
          </p>

          <form onSubmit={handleEnquirySubmit} style={{ background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'left', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>Request a Call Back</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: 'bold' }}>Full Name *</label>
              <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }} placeholder="John Doe" />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: 'bold' }}>Phone Number *</label>
              <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }} placeholder="+91 98765 43210" />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: 'bold' }}>Email Address</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }} placeholder="john@example.com" />
            </div>

            <button disabled={formStatus === 'loading' || formStatus === 'success'} type="submit" style={{ width: '100%', padding: '18px', background: 'var(--primary)', color: 'var(--secondary)', fontSize: '18px', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: formStatus === 'loading' ? 'not-allowed' : 'pointer', transition: 'all 0.3s' }}>
              {formStatus === 'idle' && 'Submit Enquiry'}
              {formStatus === 'loading' && 'Sending...'}
              {formStatus === 'success' && '✓ Enquiry Sent Successfully'}
              {formStatus === 'error' && 'Error. Try Again.'}
            </button>
            
            {formStatus === 'error' && <p style={{ color: 'red', marginTop: '15px', textAlign: 'center' }}>Failed to send. Please ensure SMTP credentials are set, or use WhatsApp below.</p>}
          </form>

          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ width: '100%', padding: '20px 40px', background: '#25D366', color: 'white', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              💬 Instant WhatsApp Enquiry
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
