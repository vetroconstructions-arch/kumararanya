'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PlotAvailability() {
  const [plots, setPlots] = useState(() => {
    return Array.from({ length: 48 }).map((_, i) => {
      const isCorner = i % 8 === 0 || i % 8 === 7;
      let status = 'AVAILABLE';
      let type = 'Compact Villa';
      let size = '2,240 sq.ft';
      
      // Determine size
      if (i > 30) { type = 'Premium Estate'; size = '5,000 sq.ft'; }
      if (i > 42) { type = 'Signature Estate'; size = '7,600 sq.ft'; }

      // Generate fake FOMO status deterministically based on index so it stays consistent
      if (i % 3 === 0) status = 'SOLD';
      else if (i % 7 === 0) status = 'HOLD';

      return {
        id: `A-${101 + i}`,
        status,
        type,
        size,
        isCorner
      };
    });
  });
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('idle'); // idle, processing, success

  const getStatusColor = (status) => {
    switch (status) {
      case 'AVAILABLE': return '#28a745'; // Green
      case 'HOLD': return '#ffc107'; // Yellow
      case 'SOLD': return '#dc3545'; // Red
      default: return '#ccc';
    }
  };

  return (
    <div style={{ padding: '60px 20px', background: '#0a192f', color: 'white', borderRadius: '16px', marginTop: '60px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '36px', color: 'var(--secondary)', marginBottom: '15px' }}>Live Inventory Status</h2>
        <p style={{ fontSize: '18px', opacity: 0.8 }}>Over 40% of Phase 1 inventory is already sold out. Act fast.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '15px', height: '15px', background: '#28a745', borderRadius: '3px' }}></div> Available</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '15px', height: '15px', background: '#ffc107', borderRadius: '3px' }}></div> On Hold (Token Received)</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '15px', height: '15px', background: '#dc3545', borderRadius: '3px' }}></div> Sold Out</div>
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
        gap: '15px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {plots.map((plot, i) => (
          <motion.div 
            key={plot.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (i % 10) * 0.05 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: `2px solid ${getStatusColor(plot.status)}`,
              borderRadius: '8px',
              padding: '15px 10px',
              textAlign: 'center',
              cursor: plot.status === 'AVAILABLE' ? 'pointer' : 'not-allowed',
              opacity: plot.status === 'SOLD' ? 0.6 : 1,
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={plot.status === 'AVAILABLE' ? { scale: 1.05, background: 'rgba(255,255,255,0.1)' } : {}}
            onClick={() => {
              if(plot.status === 'AVAILABLE') setSelectedPlot(plot);
            }}
          >
            {plot.isCorner && <div style={{ position: 'absolute', top: '-10px', right: '-15px', background: 'var(--secondary)', color: 'black', fontSize: '9px', fontWeight: 'bold', padding: '15px 15px 5px', transform: 'rotate(45deg)' }}>★</div>}
            
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{plot.id}</div>
            <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '8px' }}>{plot.size}</div>
            <div style={{ 
              fontSize: '11px', 
              fontWeight: 'bold', 
              background: getStatusColor(plot.status), 
              color: 'white', 
              padding: '3px 0', 
              borderRadius: '4px' 
            }}>
              {plot.status}
            </div>
          </motion.div>
        ))}
      </div>

      {/* FinTech Token Booking Modal */}
      {selectedPlot && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
          background: 'rgba(10, 25, 47, 0.9)', backdropFilter: 'blur(10px)',
          zIndex: 10000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'
        }}>
          <div style={{ background: 'white', color: 'black', padding: '40px', borderRadius: '16px', maxWidth: '500px', width: '100%', position: 'relative' }}>
            <button onClick={() => { setSelectedPlot(null); setPaymentStatus('idle'); }} style={{ position: 'absolute', top: '15px', right: '20px', background: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer' }}>×</button>
            
            {paymentStatus === 'success' ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
                <h2 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Token Secured</h2>
                <p>Plot {selectedPlot.id} is now temporarily held in your name. Our executive will call you within 15 minutes.</p>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '10px' }}>Secure Plot {selectedPlot.id}</h2>
                <p style={{ color: '#666', marginBottom: '20px' }}>Type: {selectedPlot.type} ({selectedPlot.size})</p>
                
                <div style={{ background: '#f4f4f4', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Refundable Holding Token:</span>
                    <span style={{ fontWeight: 'bold' }}>₹ 1,00,000</span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#888' }}>Powered by Razorpay Secure. Fully refundable if you cancel within 48 hours.</div>
                </div>

                <button 
                  onClick={() => {
                    setPaymentStatus('processing');
                    setTimeout(() => {
                      setPaymentStatus('success');
                      // Update the live grid
                      setPlots(prev => prev.map(p => p.id === selectedPlot.id ? { ...p, status: 'HOLD' } : p));
                    }, 2000);
                  }}
                  disabled={paymentStatus === 'processing'}
                  className="btn" style={{ width: '100%', padding: '15px', fontSize: '18px' }}
                >
                  {paymentStatus === 'processing' ? 'Processing Gateway...' : 'Pay Token via UPI / Card'}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
