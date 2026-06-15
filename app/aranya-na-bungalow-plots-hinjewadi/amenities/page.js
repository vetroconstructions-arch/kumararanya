import Navbar from '../../../components/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Luxury Amenities | Aranya NA Bungalow Plots in Hinjewadi',
  description: 'Experience 2.5 Acres of premium club-class amenities and a Japanese Miyawaki forest at Aranya NA Bungalow Plots near Hinjewadi IT Park.',
  alternates: {
    canonical: 'https://www.kumararanya.in/aranya-na-bungalow-plots-hinjewadi/amenities'
  }
};

export default function AmenitiesPage() {
  const amenitiesList = [
    { name: '2.5 Acre Grand Clubhouse', icon: '🏛️' },
    { name: 'Japanese Miyawaki Forest', icon: '🌲' },
    { name: 'Olympic-length Swimming Pool', icon: '🏊‍♂️' },
    { name: 'State-of-the-Art Gymnasium', icon: '🏋️‍♀️' },
    { name: 'Meditation & Yoga Pavilion', icon: '🧘' },
    { name: 'Banquet Hall for Celebrations', icon: '🎉' },
    { name: 'Children’s Activity Park', icon: '🛝' },
    { name: 'Multi-Cuisine Cafe', icon: '☕' }
  ];

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '150px 20px 80px', textAlign: 'center', background: '#0a192f', color: 'white' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px', color: 'var(--secondary)' }}>Luxury Amenities</h1>
        <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          A lifestyle curated for the elite. Indulge in world-class facilities right outside your front door.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {amenitiesList.map((item, index) => (
            <div key={index} style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '20px', color: 'var(--primary)', fontWeight: 'bold' }}>{item.name}</h3>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
           <Link href="/aranya-na-bungalow-plots-hinjewadi/contact" className="btn" style={{ padding: '20px 40px', fontSize: '18px' }}>Schedule a Site Visit</Link>
        </div>
      </div>
    </main>
  );
}
