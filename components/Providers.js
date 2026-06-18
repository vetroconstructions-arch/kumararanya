'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function Providers({ children }) {
  // Use a placeholder reCAPTCHA site key if one isn't provided in .env
  // For production, the user MUST set NEXT_PUBLIC_RECAPTCHA_SITE_KEY in Vercel.
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Google's official testing key

  return (
    <GoogleReCaptchaProvider 
      reCaptchaKey={siteKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
