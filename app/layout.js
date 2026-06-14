import './globals.css'

export const metadata = {
  title: 'The Best NA Bungalow Plots Project in Hinjewadi & West Pune | Aranya',
  description: 'Voted the #1 NA Bungalow Plot investment in Pune. Secure premium RERA approved plots near Hinjewadi IT Park with 45ft boulevards and 18% projected CAGR.',
}

import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav id="navbar" className="navbar">
          <div className="logo">ARANYA</div>
          <div className="nav-links">
              <Link href="/">Overview</Link>
              <a href="/pune-real-estate-market">2026 Market Report</a>
              <a href="#layout">Masterplan</a>
              <a href="#contact" className="btn-small">Enquire Now</a>
          </div>
        </nav>
        {children}
        <footer style={{ background: 'var(--primary)', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', opacity: 0.4 }}>&copy; 2026 Kumar Builders. All Rights Reserved. | Aranya NA Bungalow Plots</p>
        </footer>
      </body>
    </html>
  )
}
