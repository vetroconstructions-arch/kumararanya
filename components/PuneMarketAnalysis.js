import { motion } from 'framer-motion';

export default function PuneMarketAnalysis() {
  return (
    <section style={{ padding: '80px 20px', background: '#0a192f', color: 'white', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '14px', letterSpacing: '3px', color: 'var(--secondary)', textTransform: 'uppercase', marginBottom: '15px' }}>Pune Real Estate Market 2026</h2>
          <h3 style={{ fontSize: '42px', fontWeight: '900', lineHeight: '1.2' }}>Why Bungalow Plots Are Outperforming <br/>Luxury Flats in Pune</h3>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
        >
          {/* Card 1 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(212,175,55,0.1)' }}
            style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.2)', cursor: 'pointer' }}
          >
            <div style={{ fontSize: '36px', marginBottom: '20px' }}>📈</div>
            <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: 'var(--secondary)' }}>Higher Capital Appreciation</h4>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>
              While luxury flats in Kalyani Nagar or Koregaon Park depreciate due to building age, PMRDA sanctioned NA bungalow plots in high-growth corridors like Hinjewadi appreciate inherently. Land supply is strictly finite.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(212,175,55,0.1)' }}
            style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.2)', cursor: 'pointer' }}
          >
            <div style={{ fontSize: '36px', marginBottom: '20px' }}>⚖️</div>
            <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: 'var(--secondary)' }}>Absolute Title Ownership</h4>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>
              Flats offer fractional ownership with high maintenance fees. Securing a clear-title villa plot in Pune grants you 100% Floor Space Index (FSI) control, allowing you to build generational wealth on your own terms.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(212,175,55,0.1)' }}
            style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.2)', cursor: 'pointer' }}
          >
            <div style={{ fontSize: '36px', marginBottom: '20px' }}>🏢</div>
            <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: 'var(--secondary)' }}>The IT Sector Boom</h4>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>
              With the expansion of Hinjewadi Phase 3 and the impending Metro Line completion, top tech executives are migrating away from congested areas like Wakad and Baner, seeking expansive gated communities like Kumar Aranya.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{ marginTop: '50px', textAlign: 'center' }}
        >
          <p style={{ color: '#888', fontStyle: 'italic' }}>*Data derived from Pune Real Estate Market Index (2025-2026 projections).</p>
        </motion.div>
      </div>
    </section>
  );
}
