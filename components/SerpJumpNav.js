'use client';
import React, { useState, useEffect } from 'react';

export default function SerpJumpNav() {
  const [activeId, setActiveId] = useState('');

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Investment ROI', href: '#roi-calculator' },
    { label: 'Masterplan & Layout', href: '#masterplan' },
    { label: 'Pune Market Data', href: '#pune-market' },
    { label: 'Contact & Site Visit', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const item of navItems) {
        const id = item.href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Page Sections"
      style={{
        position: 'sticky',
        top: '75px',
        zIndex: 999,
        background: 'rgba(10, 25, 47, 0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        padding: '10px 15px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px'
        }}
      >
        {navItems.map((item) => {
          const id = item.href.replace('#', '');
          const isActive = activeId === id;
          return (
            <a
              key={item.href}
              href={item.href}
              style={{
                color: isActive ? 'var(--secondary, #d4af37)' : '#cbd5e1',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: isActive ? '700' : '500',
                letterSpacing: '0.5px',
                padding: '6px 14px',
                borderRadius: '20px',
                background: isActive ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                border: isActive ? '1px solid rgba(212, 175, 55, 0.4)' : '1px solid transparent',
                transition: 'all 0.25s ease'
              }}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
