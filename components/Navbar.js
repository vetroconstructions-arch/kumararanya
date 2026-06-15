'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: isScrolled ? '15px 30px' : '30px 50px',
        background: isScrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 9999,
        transition: 'all 0.4s ease',
        fontFamily: 'Inter, sans-serif'
      }}>
        <Link href="/" style={{ color: 'white', fontSize: '28px', fontWeight: '400', letterSpacing: '6px', fontFamily: 'Cinzel, serif', textDecoration: 'none' }}>
          ARANYA
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          
          <div className="dropdown" style={{ position: 'relative' }}>
            <span style={{ color: 'white', cursor: 'pointer', fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px' }} className="nav-link">PROJECT ▾</span>
            <div className="dropdown-content">
              <Link href="/">The Vision</Link>
              <Link href="/">The Developers</Link>
              <Link href="/">Gallery</Link>
            </div>
          </div>

          <div className="dropdown" style={{ position: 'relative' }}>
            <span style={{ color: 'white', cursor: 'pointer', fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px' }} className="nav-link">MASTERPLAN ▾</span>
            <div className="dropdown-content">
              <Link href="/#plots">2,240 sq.ft Compact Villas</Link>
              <Link href="/#plots">5,000 sq.ft Premium Estates</Link>
              <Link href="/#plots">7,600 sq.ft Signature Estates</Link>
              <Link href="/#layout">Interactive SVG Layout</Link>
            </div>
          </div>

          <div className="dropdown" style={{ position: 'relative' }}>
            <span style={{ color: 'white', cursor: 'pointer', fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px' }} className="nav-link">INFRASTRUCTURE ▾</span>
            <div className="dropdown-content">
              <Link href="/#amenities">2.5 Acre Clubhouse</Link>
              <Link href="/#amenities">Miyawaki Forest & Biodiversity</Link>
              <Link href="/#amenities">45-ft Boulevards & Solar</Link>
              <Link href="/#amenities">3-Tier Security System</Link>
            </div>
          </div>

          <Link href="/locations/hinjewadi-phase-1" style={{ color: 'white', textDecoration: 'none', fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px', transition: 'color 0.3s' }} className="nav-link">LOCATION</Link>

          <div className="dropdown" style={{ position: 'relative' }}>
            <span style={{ color: 'white', cursor: 'pointer', fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px' }} className="nav-link">RESOURCES ▾</span>
            <div className="dropdown-content">
              <Link href="/insights/maharera-guidelines-faq">Buying FAQs & PMRDA</Link>
              <Link href="/insights/pune-real-estate-market">Pune Market Data 2026</Link>
              <Link href="/nri/dubai">NRI Investment Portal</Link>
            </div>
          </div>

          <Link href="/#layout" style={{ 
            padding: '10px 24px', 
            background: 'var(--secondary)', 
            color: 'var(--primary)', 
            textDecoration: 'none', 
            fontSize: '12px', 
            fontWeight: 'bold',
            letterSpacing: '1.5px', 
            borderRadius: '4px',
            transition: 'all 0.3s',
            marginLeft: '10px'
          }} className="btn-enquire">
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div 
          className="mobile-hamburger" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ cursor: 'pointer', zIndex: 10000 }}
        >
          <div style={{ width: '25px', height: '2px', background: 'white', marginBottom: '6px', transition: 'all 0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></div>
          <div style={{ width: '25px', height: '2px', background: 'white', marginBottom: '6px', opacity: isMobileMenuOpen ? 0 : 1 }}></div>
          <div style={{ width: '25px', height: '2px', background: 'white', transition: 'all 0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'rgba(10, 25, 47, 0.98)',
        backdropFilter: 'blur(15px)',
        zIndex: 9998,
        display: isMobileMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isMobileMenuOpen ? 1 : 0,
        transition: 'opacity 0.4s ease'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center', width: '100%', maxWidth: '300px' }}>
          
          <div style={{ color: 'var(--secondary)', fontSize: '12px', letterSpacing: '2px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>PROJECT</div>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>The Vision</Link>
          
          <div style={{ color: 'var(--secondary)', fontSize: '12px', letterSpacing: '2px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginTop: '10px' }}>MASTERPLAN</div>
          <Link href="/#layout" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Interactive Layout</Link>
          <Link href="/#plots" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Plot Specifications</Link>
          
          <div style={{ color: 'var(--secondary)', fontSize: '12px', letterSpacing: '2px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginTop: '10px' }}>INFRASTRUCTURE</div>
          <Link href="/#amenities" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Clubhouse & Amenities</Link>
          
          <div style={{ color: 'var(--secondary)', fontSize: '12px', letterSpacing: '2px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginTop: '10px' }}>LOCATION</div>
          <Link href="/locations/hinjewadi-phase-1" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Hinjewadi IT Park</Link>

          <Link href="/#layout" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: '20px', padding: '15px 40px', background: 'var(--secondary)', color: 'var(--primary)', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', borderRadius: '4px' }}>BOOK NOW</Link>
        </div>
      </div>
    </>
  );
}
