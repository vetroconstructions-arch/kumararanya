import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - assets (images/videos)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets).*)',
  ],
};

// Extremely basic Edge-compatible Rate Limiter map. 
// Note: In a real Vercel Edge environment, this map resets often and isn't shared across regions. 
// For enterprise rate limiting, Redis (Upstash) is recommended.
const rateLimitMap = new Map();

export function middleware(request) {
  const url = request.nextUrl.clone();
  
  // 1. RATE LIMITING LOGIC (Protects all routes, specifically APIs and dynamic pages)
  const ip = request.ip || request.headers.get('x-forwarded-for') || '127.0.0.1';
  const limit = 50; // 50 requests
  const windowMs = 60 * 1000; // 1 minute
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 1,
      startTime: Date.now()
    });
  } else {
    let data = rateLimitMap.get(ip);
    if (Date.now() - data.startTime > windowMs) {
      // Reset window
      data.count = 1;
      data.startTime = Date.now();
    } else {
      data.count++;
      if (data.count > limit) {
        console.log(`[SECURITY] Blocked IP ${ip} due to rate limiting.`);
        return new NextResponse(
          JSON.stringify({ error: 'Too Many Requests. Security limits exceeded.' }),
          { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }
  }

  // 2. A/B TESTING LOGIC (Only runs on the homepage '/')
  if (url.pathname === '/') {
    // Check if user already has an assigned A/B test variant
    let variant = request.cookies.get('ab-test-variant')?.value;

    // If not, randomly assign them
    if (!variant) {
      variant = Math.random() < 0.5 ? 'A' : 'B';
    }

    // Rewrite URL invisibly for Variant B
    if (variant === 'B') {
      url.pathname = '/home-b';
      const response = NextResponse.rewrite(url);
      if (!request.cookies.has('ab-test-variant')) {
        response.cookies.set('ab-test-variant', variant, { maxAge: 60 * 60 * 24 * 30 }); // 30 days
      }
      return response;
    }

    // Standard response for Variant A
    const response = NextResponse.next();
    if (!request.cookies.has('ab-test-variant')) {
      response.cookies.set('ab-test-variant', variant, { maxAge: 60 * 60 * 24 * 30 });
    }
    return response;
  }

  // Allow all other routes through
  return NextResponse.next();
}
