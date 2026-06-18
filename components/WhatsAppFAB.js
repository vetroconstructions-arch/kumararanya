'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function WhatsAppFAB() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay appearance for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const whatsappMessage = "Hello, I am interested in Aranya NA Bungalow Plots near Hinjewadi. Please share the brochure and pricing details.";
  const whatsappUrl = `https://wa.me/917744009295?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'whatsapp_click',
            form_type: 'fab_button',
            project: 'Aranya'
          });
        }
      }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        zIndex: 9999,
        transition: 'transform 0.3s ease',
        textDecoration: 'none'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <svg viewBox="0 0 32 32" width="35" height="35" fill="currentColor">
        <path d="M16.002 2C8.27 2 1.996 8.273 1.996 16c0 2.464.646 4.873 1.874 6.993L2 30l7.158-1.877c2.053 1.121 4.382 1.71 6.84 1.71 7.734 0 14.006-6.271 14.006-14.002C30.004 8.273 23.736 2 16.002 2zm0 25.545c-2.083 0-4.122-.56-5.912-1.623l-.423-.251-4.394 1.152 1.171-4.28-.276-.438c-1.168-1.859-1.783-4.008-1.783-6.223 0-6.438 5.239-11.677 11.685-11.677 6.444 0 11.684 5.239 11.684 11.677S22.446 27.545 16.002 27.545zm6.417-8.756c-.352-.176-2.082-1.028-2.404-1.144-.323-.118-.557-.176-.792.176-.235.352-.91 1.144-1.115 1.379-.205.235-.41.264-.763.088-.352-.176-1.485-.548-2.83-1.751-1.045-.935-1.75-2.091-1.955-2.444-.205-.352-.022-.542.154-.718.158-.158.352-.41.528-.616.176-.205.235-.352.352-.587.118-.235.059-.44-.029-.616-.088-.176-.792-1.91-1.085-2.614-.287-.687-.577-.595-.792-.605-.205-.01-.44-.01-.675-.01-.235 0-.616.088-.938.44-.323.352-1.232 1.203-1.232 2.934 0 1.731 1.261 3.403 1.437 3.638.176.235 2.478 3.784 6 5.303.838.361 1.492.577 2.001.738.841.266 1.607.228 2.213.138.68-.1 2.082-.85 2.375-1.672.293-.822.293-1.526.205-1.672-.088-.147-.323-.235-.675-.41z" />
      </svg>
    </a>
  );
}
