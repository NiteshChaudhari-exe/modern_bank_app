// Basic service worker registration for PWA (expects /sw.js at public)
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        // swallow silently in demo
        console.warn('ServiceWorker registration failed:', err)
      })
    })
  }
}
