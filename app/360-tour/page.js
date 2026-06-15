'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function VirtualTour() {
  const [isLoaded, setIsLoaded] = useState(false);

  // In production, replace this with the actual Pannellum or A-Frame viewer URL / 360 image asset
  const virtualTourUrl = "https://aframe.io/aframe/examples/boilerplate/panorama/";

  return (
    <main style={{ height: '100vh', background: '#0a192f', color: 'white', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '100px 20px 20px', textAlign: 'center', background: 'rgba(10,25,47,0.8)', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
        <h1 style={{ fontSize: '36px', color: 'var(--secondary)', marginBottom: '10px' }}>360° Drone Experience</h1>
        <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>Move your device or drag your mouse to explore the 25-Acre Aranya Masterplan from the sky.</p>
      </div>

      <div style={{ flex: 1, position: 'relative', background: '#000' }}>
        {!isLoaded && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 5 }}>
            <div className="spinner" style={{ width: '50px', height: '50px', border: '5px solid rgba(212, 175, 55, 0.3)', borderTop: '5px solid var(--secondary)', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px' }} />
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            <p>Initializing Spatial Engine...</p>
          </div>
        )}
        
        <iframe 
          src={virtualTourUrl}
          onLoad={() => setIsLoaded(true)}
          style={{ width: '100%', height: '100%', border: 'none', position: 'relative', zIndex: 1 }}
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
        />

        <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', gap: '20px' }}>
          <Link href="/aranya-na-bungalow-plots-hinjewadi/pricing" className="btn" style={{ padding: '15px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            View Available Plots
          </Link>
          <Link href="/configurator" className="btn btn-outline" style={{ padding: '15px 30px', background: 'rgba(0,0,0,0.5)', color: 'white', borderColor: 'white', backdropFilter: 'blur(5px)' }}>
            Build Your Villa
          </Link>
        </div>
      </div>
    </main>
  );
}
