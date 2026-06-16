import { NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export function proxy(request) {
  const url = request.nextUrl.clone();
  
  // Only target the homepage
  if (url.pathname !== '/') return NextResponse.next();

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
