'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0a192f', color: 'white', fontFamily: 'sans-serif' }}>
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
          <h1 style={{ fontSize: '72px', color: '#e74c3c', marginBottom: '20px' }}>FATAL ERROR</h1>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Root Layout Exception</h2>
          <p style={{ color: '#aaa', maxWidth: '600px', marginBottom: '40px' }}>
            A critical systemic failure occurred.
          </p>
          <button
            onClick={() => reset()}
            style={{ padding: '15px 30px', background: 'white', color: '#0a192f', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Attempt Hard Reset
          </button>
        </div>
      </body>
    </html>
  );
}
