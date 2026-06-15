import Navbar from '../../../components/Navbar';
import MasterplanInteractive from '../../../components/MasterplanInteractive';

export const metadata = {
  title: 'Interactive Masterplan | Aranya NA Bungalow Plots in Hinjewadi',
  description: 'View the 25+ Acre Masterplan for Aranya NA Bungalow Plots near Hinjewadi IT Park. Explore the Miyawaki forest, clubhouse, and plot layout.',
  alternates: {
    canonical: 'https://www.kumararanya.in/aranya-na-bungalow-plots-hinjewadi/masterplan'
  }
};

export default function MasterplanPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '150px 20px 80px', textAlign: 'center', background: '#0a192f', color: 'white' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px', color: 'var(--secondary)' }}>Interactive Masterplan</h1>
        <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          Explore 25+ Acres of pure luxury. Discover how your future estate seamlessly integrates with nature and world-class amenities.
        </p>
      </div>

      <div style={{ padding: '60px 0' }}>
        <MasterplanInteractive />
      </div>
    </main>
  );
}
