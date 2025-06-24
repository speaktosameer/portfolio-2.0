"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}

export function Analytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      // Track page views
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [GA_MEASUREMENT_ID])

  if (!GA_MEASUREMENT_ID) {
    return <>{/* Google Analytics will be configured when NEXT_PUBLIC_GA_MEASUREMENT_ID is set */}</>
  }

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

// Custom hook for tracking events
export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: any) => {
    if (typeof window !== "undefined" && window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      window.gtag("event", eventName, parameters)
    }
  }

  const trackPageView = (url: string) => {
    if (typeof window !== "undefined" && window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }
  }

  return { trackEvent, trackPageView }
}
