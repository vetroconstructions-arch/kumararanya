// Centralized Enquiry & UTM Attribution Helper for Kumar Aranya

// Collects and persists UTM parameters & referrer in sessionStorage
export function getAttributionData() {
  if (typeof window === 'undefined') return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
    
    keys.forEach(key => {
      const val = urlParams.get(key);
      if (val) {
        sessionStorage.setItem(`aranya_${key}`, val);
      }
    });

    if (document.referrer && !sessionStorage.getItem('aranya_referrer')) {
      sessionStorage.setItem('aranya_referrer', document.referrer);
    }

    return {
      utmSource: sessionStorage.getItem('aranya_utm_source') || 'Direct/Organic',
      utmMedium: sessionStorage.getItem('aranya_utm_medium') || 'Website',
      utmCampaign: sessionStorage.getItem('aranya_utm_campaign') || 'Kumar Aranya Main',
      gclid: sessionStorage.getItem('aranya_gclid') || '',
      referrer: sessionStorage.getItem('aranya_referrer') || ''
    };
  } catch (err) {
    return { utmSource: 'Direct/Organic' };
  }
}

// Universal submission wrapper with Analytics & Meta Pixel Event Triggers
export async function submitLead({ name, phone, email, projectInterest, source, recaptchaToken }) {
  const attribution = getAttributionData();

  const payload = {
    name: name || 'Investor Lead',
    phone: phone,
    email: email || '',
    projectInterest: projectInterest || 'Aranya NA Bungalow Plots',
    source: source || 'Website Enquiry',
    recaptchaToken: recaptchaToken || '',
    ...attribution
  };

  const res = await fetch('/api/enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();

  if (res.ok && data.success) {
    // Fire conversion analytics
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'lead_submitted',
        form_source: source || 'Website Enquiry',
        project: 'Kumar Aranya',
        ...attribution
      });

      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'Real Estate Lead',
          event_label: source || 'Website Enquiry',
          value: 17200000 // 1.72 Cr baseline
        });
      }

      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: projectInterest || 'Aranya NA Bungalow Plots',
          content_category: source || 'Website Enquiry'
        });
      }
    }
    return { success: true, data };
  } else {
    throw new Error(data.error || 'Failed to submit enquiry. Please verify your mobile number.');
  }
}
