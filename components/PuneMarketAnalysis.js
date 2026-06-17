import { motion } from 'framer-motion';

export default function PuneMarketAnalysis() {
  return (
    <section style={{ padding: '80px 20px', background: '#0a192f', color: 'white', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '14px', letterSpacing: '3px', color: 'var(--secondary)', textTransform: 'uppercase', marginBottom: '15px' }}>Pune Real Estate Market 2026</h2>
          <h3 style={{ fontSize: '42px', fontWeight: '900', lineHeight: '1.2' }}>Why Bungalow Plots Are Outperforming <br/>Luxury Flats in Pune</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {/* Card 1 */}
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.2)' }}>
            <div style={{ fontSize: '36px', marginBottom: '20px' }}>📈</div>
            <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: 'var(--secondary)' }}>Higher Capital Appreciation</h4>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>
              While luxury flats in Kalyani Nagar or Koregaon Park depreciate due to building age, PMRDA sanctioned NA bungalow plots in high-growth corridors like Hinjewadi appreciate inherently. Land supply is strictly finite.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.2)' }}>
            <div style={{ fontSize: '36px', marginBottom: '20px' }}>⚖️</div>
            <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: 'var(--secondary)' }}>Absolute Title Ownership</h4>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>
              Flats offer fractional ownership with high maintenance fees. Securing a clear-title villa plot in Pune grants you 100% Floor Space Index (FSI) control, allowing you to build generational wealth on your own terms.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.2)' }}>
            <div style={{ fontSize: '36px', marginBottom: '20px' }}>🏢</div>
            <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: 'var(--secondary)' }}>The IT Sector Boom</h4>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>
              With the expansion of Hinjewadi Phase 3 and the impending Metro Line completion, top tech executives are migrating away from congested areas like Wakad and Baner, seeking expansive gated communities like Kumar Aranya.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <p style={{ color: '#888', fontStyle: 'italic' }}>*Data derived from Pune Real Estate Market Index (2025-2026 projections).</p>
        </div>
      </div>
    </section>
  );
}
