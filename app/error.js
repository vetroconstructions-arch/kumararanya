'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Next.js Error Boundary Caught:", error);
  }, [error]);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0a192f', color: 'white', fontFamily: 'Inter, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '72px', color: 'var(--secondary)', marginBottom: '20px' }}>500</h1>
      <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>System Exception</h2>
      <p style={{ color: '#aaa', maxWidth: '600px', marginBottom: '40px', lineHeight: '1.6' }}>
        We encountered an unexpected error on our servers. Our engineering team has been notified.
      </p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button
          onClick={() => reset()}
          style={{ padding: '15px 30px', background: 'var(--secondary)', color: 'var(--primary)', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Try Again
        </button>
        <Link href="/" style={{ padding: '15px 30px', background: 'transparent', color: 'white', border: '1px solid white', borderRadius: '8px', fontSize: '16px', textDecoration: 'none' }}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
