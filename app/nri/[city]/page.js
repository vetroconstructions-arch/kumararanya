import { nriData } from '../../nriData';
import Link from 'next/link';

export async function generateStaticParams() {
  return Object.keys(nriData).map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const data = nriData[city];
  if(!data) return { title: 'Not Found' };
  
  return {
    title: `Pune NA Bungalow Plots for NRI Investors in ${data.city} | Aranya`,
    description: `Invest your ${data.currency} in Pune's top NA Plot project. ${data.hook}`,
    alternates: {
      canonical: `https://www.kumararanya.in/nri/${city}`,
      languages: {
        [data.locale]: `https://www.kumararanya.in/nri/${city}`,
      },
    },
  }
}

export default async function NRIPage({ params }) {
  const { city } = await params;
  const data = nriData[city];

  if(!data) {
    return <main style={{ padding: '120px 20px', textAlign: 'center' }}><h1>Location Not Found</h1></main>;
  }

  return (
    <main style={{ minHeight: '100vh', background: '#0a192f', paddingBottom: '100px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Premium Cinematic Hero */}
      <div style={{ height: '70vh', background: `linear-gradient(to right, rgba(10,25,47,0.9), rgba(10,25,47,0.3)), url('/assets/images/scenic_masterplan.png')`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', padding: '0 5%' }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(197, 160, 89, 0.1)', border: '1px solid var(--secondary)', color: 'var(--secondary)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '20px' }}>
            Exclusive NRI Investment Portal — {data.city}
          </div>
          <h1 style={{ color: 'white', fontSize: '56px', marginBottom: '20px', lineHeight: '1.1' }}>
            Diversify Your <span style={{ color: 'var(--secondary)' }}>{data.currency}</span> into Pune's Ultimate Asset
          </h1>
          <p style={{ color: '#ccc', fontSize: '22px', fontWeight: '300', lineHeight: '1.6', marginBottom: '40px' }}>
            {data.hook}
          </p>
          <a href="#nri-concierge" style={{ padding: '18px 40px', background: 'var(--secondary)', color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', borderRadius: '4px' }}>
            Schedule Virtual Tour ({data.timeZone})
          </a>
        </div>
      </div>

      {/* Pricing Data Translation */}
      <div style={{ maxWidth: '1000px', margin: '-50px auto 60px', position: 'relative', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', padding: '50px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '14px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Local Indian Pricing</div>
          <div style={{ fontSize: '42px', fontWeight: 'bold', color: 'white' }}>₹1.4 Cr</div>
        </div>
        <div style={{ fontSize: '32px', color: 'var(--secondary)', opacity: 0.5 }}>=</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '14px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Estimated Conversion</div>
          <div style={{ fontSize: '42px', fontWeight: 'bold', color: 'var(--secondary)' }}>{data.convertedPrice}</div>
        </div>
      </div>

      {/* The NRI Concierge Form */}
      <section id="nri-concierge" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: 'white', marginBottom: '20px' }}>The NRI Concierge</h2>
        <p style={{ fontSize: '18px', color: '#aaa', maxWidth: '600px', margin: '0 auto 40px' }}>
          As an investor based in {data.city}, you receive priority scheduling. Enter your details below and our senior directors will arrange a high-definition virtual site tour tailored to {data.timeZone}.
        </p>

        <form style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="text" placeholder="Full Name" required style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px', fontSize: '16px' }} />
          <input type="email" placeholder="Email Address" required style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px', fontSize: '16px' }} />
          <input type="text" placeholder={`WhatsApp Number (with ${data.city} code)`} required style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px', fontSize: '16px' }} />
          <button type="submit" style={{ padding: '20px', background: 'var(--secondary)', color: 'var(--primary)', border: 'none', fontWeight: 'bold', fontSize: '18px', borderRadius: '8px', cursor: 'pointer', marginTop: '10px' }}>
            Request Priority Virtual Tour
          </button>
        </form>
      </section>

    </main>
  );
}
