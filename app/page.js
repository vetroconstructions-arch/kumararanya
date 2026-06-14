'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.to(heroRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power4.out"
    });
  }, []);

  return (
    <main>
      <section id="home" className="hero-section" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url(/assets/images/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }}></div>
        <div className="hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))', zIndex: 1 }}></div>
        
        <div ref={heroRef} className="hero-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white', opacity: 0, transform: 'translateY(50px)' }}>
          <div style={{ fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px', color: 'var(--secondary)' }}>
            The Masterpiece by Kumar Builders
          </div>
          <h1 style={{ fontSize: '64px', lineHeight: '1.1', marginBottom: '30px' }}>
            Aranya Bungalow NA Plots<br/>
            <span style={{ color: 'var(--secondary)' }}>in Hinjewadi</span>
          </h1>
          <p style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto 40px', opacity: 0.9 }}>
            A legacy gated community of premium 2300-7500 SQFT plots designed for generational wealth.
          </p>
          <a href="#contact" className="btn">Schedule Private Preview</a>
        </div>
      </section>

      <section style={{ padding: '100px 20px', background: '#f9f9f9', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--primary)', fontSize: '36px', marginBottom: '20px' }}>The Next.js Migration</h2>
        <p style={{ color: '#555', maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.8' }}>
          This application has been successfully migrated to the Next.js App Router architecture. Dynamic SSR routes for /locations, /insights, and /compare are now supported natively.
        </p>
      </section>
    </main>
  );
}
