import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.kumararanya.in'),
  title: 'The Best NA Bungalow Plots Project in Hinjewadi & West Pune | Aranya',
  description: 'Voted the #1 NA Bungalow Plot investment in Pune. Secure premium PMRDA NA Sanctioned and Ready Possession plots near Hinjewadi IT Park with 18% projected CAGR.',
  openGraph: {
    title: 'The Best NA Bungalow Plots in West Pune | Aranya',
    description: 'Voted the #1 NA Bungalow Plot investment in Pune. Secure premium PMRDA NA Sanctioned plots near Hinjewadi IT Park.',
    url: 'https://www.kumararanya.in',
    siteName: 'Aranya by Kumar Builders',
    images: [
      {
        url: '/assets/images/scenic_villa.png',
        width: 1200,
        height: 630,
        alt: 'Aranya Ultra-Luxury Lakefront Villa Plot',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aranya NA Bungalow Plots | West Pune',
    description: 'Secure premium PMRDA NA Sanctioned plots near Hinjewadi IT Park.',
    images: ['/assets/images/scenic_villa.png'],
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'saaWp4gP9gzn6up9lsQTdPuc_TLOx89Q1XVULt4_Ngg',
  },
}

import Link from 'next/link';
import Navbar from '../components/Navbar';
import SchemaMarkup from '../components/SchemaMarkup';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { seoMatrix } from './seoMatrixData';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <SchemaMarkup />
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
            
            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '20px', fontSize: '18px' }}>Popular Real Estate Searches</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
                {seoMatrix.slice(0, 20).map((item, idx) => (
                  <Link key={idx} href={`/search/${item.slug}`} style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'center', borderTop: '1px solid #1a2a42', paddingTop: '20px' }}>
              <p style={{ fontSize: '12px', opacity: 0.4 }}>&copy; 2026 Kumar Builders. All Rights Reserved. | Aranya NA Bungalow Plots</p>
            </div>
          </div>
        </footer>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
