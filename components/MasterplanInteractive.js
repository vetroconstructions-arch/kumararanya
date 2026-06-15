'use client';
import { useState } from 'react';

const mockPlots = [
  { id: '1', status: 'sold', sqft: 5000, price: '₹2.5 Cr', type: 'Lakeview Estate' },
  { id: '2', status: 'available', sqft: 4500, price: '₹2.2 Cr', type: 'Lakeview Estate' },
  { id: '3', status: 'reserved', sqft: 4500, price: '₹2.2 Cr', type: 'Lakeview Estate' },
  { id: '4', status: 'available', sqft: 3500, price: '₹1.8 Cr', type: 'Premium Villa Plot' },
  { id: '5', status: 'available', sqft: 3000, price: '₹1.5 Cr', type: 'Villa Plot' },
  { id: '6', status: 'sold', sqft: 3000, price: '₹1.5 Cr', type: 'Villa Plot' },
  { id: '7', status: 'available', sqft: 3200, price: '₹1.6 Cr', type: 'Premium Villa Plot' },
  { id: '8', status: 'sold', sqft: 4000, price: '₹2.0 Cr', type: 'Lakeview Estate' },
  { id: '9', status: 'available', sqft: 3000, price: '₹1.5 Cr', type: 'Villa Plot' },
  { id: '10', status: 'available', sqft: 3500, price: '₹1.8 Cr', type: 'Premium Villa Plot' },
  { id: '11', status: 'reserved', sqft: 3000, price: '₹1.5 Cr', type: 'Villa Plot' },
  { id: '12', status: 'sold', sqft: 6000, price: '₹3.0 Cr', type: 'Signature Estate' },
];

export default function MasterplanInteractive() {
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [enquiryStatus, setEnquiryStatus] = useState('');

  const handlePlotClick = (plot) => {
    if (plot.status === 'available') {
      setSelectedPlot(plot);
      setEnquiryStatus('');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setEnquiryStatus('sending');
    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      projectInterest: `Aranya Block Request - Plot ${selectedPlot.id} (${selectedPlot.sqft} sqft, ${selectedPlot.price})`
    };

    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setEnquiryStatus('success');
      setTimeout(() => setSelectedPlot(null), 3000); // close after 3s
    } catch (err) {
      setEnquiryStatus('error');
    }
  };

  const getFillColor = (status) => {
    switch(status) {
      case 'available': return 'rgba(46, 204, 113, 0.5)'; // Green
      case 'reserved': return 'rgba(241, 196, 15, 0.5)'; // Yellow
      case 'sold': return 'rgba(231, 76, 60, 0.5)'; // Red
      default: return 'transparent';
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Legend */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '16px', height: '16px', background: 'rgba(46, 204, 113, 0.8)', borderRadius: '4px' }}></div>
          <span style={{ fontSize: '14px', color: '#666' }}>Available</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '16px', height: '16px', background: 'rgba(241, 196, 15, 0.8)', borderRadius: '4px' }}></div>
          <span style={{ fontSize: '14px', color: '#666' }}>Reserved</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '16px', height: '16px', background: 'rgba(231, 76, 60, 0.8)', borderRadius: '4px' }}></div>
          <span style={{ fontSize: '14px', color: '#666' }}>Sold Out</span>
        </div>
      </div>

      {/* SVG Interactive Map container */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '1000px', 
        background: `url('/assets/images/scenic_masterplan.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        border: '1px solid #eaeaea'
      }}>
        
        {/* Abstract SVG overlay mapping the plots */}
        <svg viewBox="0 0 1000 600" style={{ width: '100%', height: 'auto', display: 'block' }}>
          {/* We generate mock rects over the image for the plots */}
          {mockPlots.map((plot, i) => {
            // Calculate grid positions for demo purposes
            const row = Math.floor(i / 4);
            const col = i % 4;
            const x = 100 + (col * 200) + (row * 30);
            const y = 150 + (row * 120);

            return (
              <g 
                key={plot.id} 
                onClick={() => handlePlotClick(plot)}
                style={{ cursor: plot.status === 'available' ? 'pointer' : 'not-allowed' }}
                className="interactive-plot"
              >
                <polygon 
                  points={`${x},${y} ${x+120},${y-20} ${x+150},${y+60} ${x+30},${y+80}`}
                  fill={getFillColor(plot.status)}
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth="2"
                  style={{ transition: 'all 0.3s ease' }}
                />
                <text x={x+60} y={y+40} fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">
                  {plot.id}
                </text>
              </g>
            )
          })}
        </svg>

        {/* CSS for hover effect */}
        <style jsx>{`
          .interactive-plot:hover polygon {
            stroke: var(--secondary) !important;
            stroke-width: 4px !important;
            fill: rgba(46, 204, 113, 0.8) !important; /* brighter green on hover */
          }
        `}</style>
      </div>

      {/* Slide-out Panel */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '400px',
        maxWidth: '100%',
        height: '100vh',
        background: 'rgba(10, 25, 47, 0.98)',
        backdropFilter: 'blur(20px)',
        borderLeft: '1px solid rgba(255,255,255,0.1)',
        zIndex: 100000,
        transform: selectedPlot ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: '40px',
        color: 'white',
        overflowY: 'auto'
      }}>
        {selectedPlot && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '28px', color: 'var(--secondary)' }}>Plot {selectedPlot.id}</h3>
              <button onClick={() => setSelectedPlot(null)} style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}>×</button>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px', marginBottom: '40px' }}>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>Plot Details</p>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '24px' }}>{selectedPlot.sqft} Sq.Ft.</h4>
              <p style={{ margin: '0 0 15px 0', color: 'var(--secondary)' }}>{selectedPlot.type}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                <span style={{ color: '#aaa' }}>Base Price</span>
                <span style={{ fontWeight: 'bold' }}>{selectedPlot.price}</span>
              </div>
            </div>

            <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Block This Plot Today</h4>
            <p style={{ fontSize: '14px', color: '#aaa', marginBottom: '30px' }}>Submit your details to instantly block Plot {selectedPlot.id} for 24 hours. Our sales team will contact you to facilitate the token amount.</p>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" name="name" placeholder="Full Name" required style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
              <input type="tel" name="phone" placeholder="Phone Number" required style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
              <input type="email" name="email" placeholder="Email Address (Optional)" style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
              
              <button type="submit" disabled={enquiryStatus === 'sending'} style={{ 
                padding: '15px', 
                background: 'var(--secondary)', 
                color: 'var(--primary)', 
                border: 'none', 
                fontWeight: 'bold', 
                fontSize: '16px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px'
              }}>
                {enquiryStatus === 'sending' ? 'Processing...' : 'Block Plot Now'}
              </button>

              {enquiryStatus === 'success' && (
                <div style={{ color: '#2ecc71', fontSize: '14px', textAlign: 'center', marginTop: '10px' }}>✓ Plot successfully blocked! We will contact you shortly.</div>
              )}
            </form>
          </>
        )}
      </div>

      {/* Background Overlay for Sidebar */}
      {selectedPlot && (
        <div 
          onClick={() => setSelectedPlot(null)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', background: 'rgba(0,0,0,0.5)', zIndex: 99999 }}
        />
      )}

    </div>
  );
}
