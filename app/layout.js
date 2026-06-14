import './globals.css'

export const metadata = {
  title: 'Aranya Hinjewadi | Premium NA Bungalow Plots | Gated Community by Kumar Builders Pune',
  description: 'Grand Gated NA Bungalow Plot Community in Hinjewadi, Pune. 2300-7500 SQFT RERA Approved Plots from ₹1.47 Cr.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav id="navbar" className="navbar">
          <div className="logo">ARANYA</div>
          <div className="nav-links">
              <a href="/">Overview</a>
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
