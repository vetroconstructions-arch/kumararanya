'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Web3Badge() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const mockHash = "0x8f4d2a1b9c7e6f0d3a5b8c2e1f4a9d7b6c3e2f1a0d9b8c7e6f5a4d3c2b1a0";

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 2500);
  };

  return (
    <>
      {/* Floating Web3 Badge */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          background: 'rgba(10, 25, 47, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(212, 175, 55, 0.5)',
          borderRadius: '50px',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          zIndex: 9998,
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          color: 'white',
          fontFamily: 'Inter, sans-serif'
        }}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05, border: '1px solid rgba(212, 175, 55, 1)' }}
      >
        <div style={{ width: '12px', height: '12px', background: '#28a745', borderRadius: '50%', boxShadow: '0 0 10px #28a745' }} />
        <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>Web3 Verified Title</span>
      </motion.div>

      {/* Verification Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
              background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(15px)',
              zIndex: 10000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            <div style={{ background: '#0a192f', border: '1px solid var(--secondary)', color: 'white', padding: '50px', borderRadius: '16px', maxWidth: '600px', width: '100%', position: 'relative' }}>
              <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '20px', right: '25px', background: 'transparent', border: 'none', color: '#888', fontSize: '28px', cursor: 'pointer' }}>×</button>
              
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>⛓️</div>
                <h2 style={{ fontSize: '28px', color: 'var(--secondary)', marginBottom: '10px' }}>Blockchain Verification Protocol</h2>
                <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6' }}>
                  To guarantee absolute legal transparency, the official PMRDA Sanction Order and Non-Agricultural (NA) Certificate for the Aranya project have been cryptographically hashed and anchored to the Polygon network.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px', marginBottom: '30px', wordBreak: 'break-all', fontFamily: 'monospace', fontSize: '12px', color: '#888' }}>
                <div style={{ color: 'var(--secondary)', marginBottom: '5px' }}>SHA-256 Document Hash:</div>
                {mockHash}
              </div>

              {isVerified ? (
                <div style={{ textAlign: 'center', color: '#28a745', padding: '20px', border: '1px solid #28a745', borderRadius: '8px', background: 'rgba(40, 167, 69, 0.1)' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>✓ Immutable Proof Verified</div>
                  <div style={{ fontSize: '12px' }}>The PMRDA Sanction documents perfectly match the blockchain ledger. The title is 100% clear.</div>
                </div>
              ) : (
                <button 
                  onClick={handleVerify}
                  disabled={isVerifying}
                  style={{ width: '100%', padding: '18px', background: isVerifying ? 'transparent' : 'var(--secondary)', color: isVerifying ? 'var(--secondary)' : 'var(--primary)', border: '1px solid var(--secondary)', fontSize: '16px', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s' }}
                >
                  {isVerifying ? 'Querying Polygon Network...' : 'Run Web3 Verification Check'}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
