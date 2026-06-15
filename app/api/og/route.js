import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Aranya NA Bungalow Plots';
    const subtitle = searchParams.get('subtitle') || 'The Ultimate Real Estate Investment in West Pune.';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a192f',
            position: 'relative',
          }}
        >
          {/* Subtle gradient overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, rgba(10, 25, 47, 1) 100%)',
            }}
          />
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 80px',
              textAlign: 'center',
              zIndex: 10,
            }}
          >
            <div style={{ color: '#D4AF37', fontSize: 40, letterSpacing: '8px', marginBottom: 20, fontWeight: 'bold' }}>
              ARANYA
            </div>
            
            <div
              style={{
                fontSize: 70,
                color: 'white',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 30,
                maxWidth: '900px'
              }}
            >
              {title}
            </div>

            <div
              style={{
                fontSize: 32,
                color: '#cccccc',
                fontWeight: 400,
                maxWidth: '800px',
                lineHeight: 1.4
              }}
            >
              {subtitle}
            </div>
          </div>
          
          <div style={{ position: 'absolute', bottom: 40, display: 'flex', alignItems: 'center', borderTop: '2px solid rgba(212, 175, 55, 0.3)', paddingTop: 20 }}>
            <div style={{ fontSize: 24, color: '#D4AF37', letterSpacing: '2px' }}>KUMAR BUILDERS</div>
            <div style={{ width: 6, height: 6, backgroundColor: '#D4AF37', borderRadius: '50%', margin: '0 20px' }} />
            <div style={{ fontSize: 24, color: 'white' }}>www.kumararanya.in</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
