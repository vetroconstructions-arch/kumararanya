import { locationsData } from '../../locationsData';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return Object.keys(locationsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = locationsData[slug];
  if(!data) return { title: 'Not Found' };
  
  return {
    title: `Best NA Bungalow Plots near ${data.name} | Aranya by Kumar Builders`,
    description: `Looking for plots or apartments in ${data.name}? ${data.hook} Aranya offers premium 100% Title Clear PMRDA NA Sanctioned & Ready Possession plots.`,
  }
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const data = locationsData[slug];

  if(!data) {
    return <main style={{ padding: '120px 20px', textAlign: 'center' }}><h1>Location Not Found</h1></main>;
  }

  // Generate the WhatsApp URL dynamically for this location
  const whatsappMessage = `Hello, I am interested in Aranya NA Bungalow Plots near ${data.name}. Please share pricing.`;
  const whatsappUrl = `https://wa.me/917744009295?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', paddingBottom: '100px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Cinematic Hero */}
      <div style={{ height: '60vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center', overflow: 'hidden' }}>
        <Image 
          src="/assets/images/clubhouse.jpg" 
          alt={`Aranya PMRDA Plots near ${data.name}`} 
          fill 
          priority 
          style={{ objectFit: 'cover', filter: 'brightness(0.4)' }} 
        />
        <div style={{ maxWidth: '900px', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'inline-block', padding: '8px 16px', border: '1px solid var(--secondary)', color: 'var(--secondary)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '30px' }}>
            {data.driveTime} from {data.name}
          </div>
          <h1 style={{ color: 'white', fontSize: '56px', marginBottom: '20px', lineHeight: '1.1' }}>
            Premium NA Bungalow Plots near <span style={{ color: 'var(--secondary)' }}>{data.name}</span>
          </h1>
          <p style={{ color: 'white', fontSize: '24px', fontWeight: '300', opacity: 0.9 }}>
            The Ultimate Real Estate Upgrade for {data.name} Residents.
          </p>
        </div>
      </div>

      {/* Content Blocks */}
      <div style={{ maxWidth: '900px', margin: '-50px auto 0', position: 'relative', background: 'white', padding: '60px', borderRadius: '16px', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }}>
        
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary)', fontSize: '32px', marginBottom: '20px' }}>The Financial Reality Check</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#444', fontStyle: 'italic', background: '#fafafa', padding: '30px', borderLeft: '4px solid var(--secondary)' }}>
            &quot;{data.hook}&quot;
          </p>
        </div>

        {/* Data Grid Comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px', marginBottom: '60px' }}>
          <div style={{ background: '#fdfdfd', padding: '30px', borderRadius: '12px', border: '1px solid #eee', textAlign: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#e74c3c', marginBottom: '10px' }}>{data.aptPrice}</div>
            <div style={{ fontSize: '14px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Avg. 3BHK in {data.name}</div>
            <div style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>Depreciating Asset</div>
          </div>
          
          <div style={{ background: 'var(--primary)', padding: '30px', borderRadius: '12px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '10px' }}>Same Price</div>
            <div style={{ fontSize: '14px', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '1px' }}>3000 sqft NA Plot at Aranya</div>
            <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '10px' }}>Appreciating Asset (18% CAGR)</div>
          </div>
        </div>

        {/* Google Maps Embed Integration */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>Dynamic Route from {data.name}</h3>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <iframe 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade" 
              src={`https://www.google.com/maps/embed/v1/directions?key=YOUR_GOOGLE_MAPS_API_KEY&origin=${encodeURIComponent(data.name + ', Pune')}&destination=Kumar+Aranya,+Marunji,+Hinjewadi,+Pune`}
            ></iframe>
          </div>
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#888', marginTop: '10px' }}>
            *Estimated drive time: {data.driveTime}. Avoid {data.name} traffic by investing in Marunji.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <h3 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '30px' }}>Ready to bypass {data.name} congestion?</h3>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn" style={{ background: 'transparent', border: '2px solid var(--primary)', color: 'var(--primary)', padding: '18px 40px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '8px' }}>
              Explore Masterplan
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '18px 40px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              💬 Secure Plot near {data.name}
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
