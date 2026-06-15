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
        <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', letterSpacing: '3px' }}>
          ARANYA
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', letterSpacing: '1px', transition: 'color 0.3s' }} className="nav-link">Overview</Link>
          
          <div className="dropdown" style={{ position: 'relative' }}>
            <span style={{ color: 'white', cursor: 'pointer', fontSize: '14px', letterSpacing: '1px' }} className="nav-link">Intelligence ▾</span>
            <div className="dropdown-content">
              <Link href="/insights/pune-real-estate-market">Market Data 2026</Link>
              <Link href="/insights/bungalow-aspirations">The Bungalow Life</Link>
              <Link href="/insights/maharera-guidelines-faq">Buying FAQs</Link>
            </div>
          </div>

          <div className="dropdown" style={{ position: 'relative' }}>
            <span style={{ color: 'white', cursor: 'pointer', fontSize: '14px', letterSpacing: '1px' }} className="nav-link">Micro-Markets ▾</span>
            <div className="dropdown-content">
              <Link href="/locations/wakad">Wakad</Link>
              <Link href="/locations/baner">Baner</Link>
              <Link href="/locations/hinjewadi-phase-1">Hinjewadi</Link>
              <Link href="/locations/bavdhan">Bavdhan</Link>
            </div>
          </div>

          <Link href="/#contact" style={{ 
            padding: '10px 24px', 
            border: '1px solid var(--secondary)', 
            color: 'var(--secondary)', 
            textDecoration: 'none', 
            fontSize: '14px', 
            letterSpacing: '1px', 
            borderRadius: '4px',
            transition: 'all 0.3s'
          }} className="btn-enquire">
            Enquire Now
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center' }}>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '24px', letterSpacing: '2px' }}>Overview</Link>
          <div style={{ color: 'var(--secondary)', fontSize: '14px', letterSpacing: '2px', marginTop: '20px' }}>INTELLIGENCE</div>
          <Link href="/insights/pune-real-estate-market" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>Market Data 2026</Link>
          <Link href="/insights/bungalow-aspirations" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>The Bungalow Life</Link>
          <div style={{ color: 'var(--secondary)', fontSize: '14px', letterSpacing: '2px', marginTop: '20px' }}>MARKETS</div>
          <Link href="/locations/wakad" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>Wakad</Link>
          <Link href="/locations/baner" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>Baner</Link>
          <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: '30px', padding: '15px 40px', background: 'var(--primary)', color: 'var(--secondary)', border: '1px solid var(--secondary)', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>Enquire Now</Link>
        </div>
      </div>
    </>
  );
}
