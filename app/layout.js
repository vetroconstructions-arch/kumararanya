import './globals.css'

export const metadata = {
  title: 'The Best NA Bungalow Plots Project in Hinjewadi & West Pune | Aranya',
  description: 'Voted the #1 NA Bungalow Plot investment in Pune. Secure premium RERA approved plots near Hinjewadi IT Park with 45ft boulevards and 18% projected CAGR.',
}

import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer style={{ background: '#0a192f', color: 'white', padding: '60px 20px 20px', borderTop: '1px solid #1a2a42' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '20px', fontSize: '18px' }}>Explore NA Bungalow Plots near Pune Micro-Markets</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }}>
                <Link href="/locations/wakad" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Wakad</Link>
                <Link href="/locations/baner" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Baner</Link>
                <Link href="/locations/balewadi" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Balewadi</Link>
                <Link href="/locations/sus" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Sus</Link>
                <Link href="/locations/bavdhan" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Bavdhan</Link>
                <Link href="/locations/hinjewadi-phase-1" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Hinjewadi Ph 1</Link>
                <Link href="/locations/hinjewadi-phase-2" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Hinjewadi Ph 2</Link>
                <Link href="/locations/hinjewadi-phase-3" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Hinjewadi Ph 3</Link>
                <Link href="/locations/tathawade" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Tathawade</Link>
                <Link href="/locations/punawale" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Punawale</Link>
                <Link href="/locations/ravet" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Ravet</Link>
                <Link href="/locations/mahalunge" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Mahalunge</Link>
                <Link href="/locations/bhugaon" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Bhugaon</Link>
                <Link href="/locations/pirangut" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Pirangut</Link>
                <Link href="/locations/marunji" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Plots near Marunji</Link>
              </div>
            </div>
            <div style={{ textAlign: 'center', borderTop: '1px solid #1a2a42', paddingTop: '20px' }}>
              <p style={{ fontSize: '12px', opacity: 0.4 }}>&copy; 2026 Kumar Builders. All Rights Reserved. | Aranya NA Bungalow Plots</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
