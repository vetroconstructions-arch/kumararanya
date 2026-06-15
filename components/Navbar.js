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
        <div className="desktop-menu" style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '600', letterSpacing: '1.5px', transition: 'color 0.3s' }} className="nav-link">HOME</Link>
          <Link href="/#layout" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '600', letterSpacing: '1.5px', transition: 'color 0.3s' }} className="nav-link">PLOTS</Link>
          <Link href="/#amenities" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '600', letterSpacing: '1.5px', transition: 'color 0.3s' }} className="nav-link">AMENITIES</Link>
          
          <Link href="/locations/hinjewadi-phase-1" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '600', letterSpacing: '1.5px', transition: 'color 0.3s' }} className="nav-link">LOCATION</Link>

          <Link href="/#contact" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '600', letterSpacing: '1.5px', transition: 'color 0.3s' }} className="nav-link">CONTACT</Link>

          <Link href="/#layout" style={{ 
            padding: '12px 28px', 
            background: 'var(--secondary)', 
            color: 'var(--primary)', 
            textDecoration: 'none', 
            fontSize: '13px', 
            fontWeight: 'bold',
            letterSpacing: '1.5px', 
            borderRadius: '4px',
            transition: 'all 0.3s'
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center' }}>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>HOME</Link>
          <Link href="/#layout" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>PLOTS</Link>
          <Link href="/#amenities" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>AMENITIES</Link>
          <Link href="/locations/hinjewadi-phase-1" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>LOCATION</Link>
          <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px', marginTop: '10px' }}>CONTACT</Link>
          <Link href="/#layout" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: '20px', padding: '15px 40px', background: 'var(--secondary)', color: 'var(--primary)', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', borderRadius: '4px' }}>BOOK NOW</Link>
        </div>
      </div>
    </>
  );
}
