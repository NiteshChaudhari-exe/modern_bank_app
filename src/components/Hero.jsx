import React from 'react'

export default function Hero() {
  return (
    <header className="section hero">
      <div className="container hero-content text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Modern Bank — Modern, simple banking for everyone
        </h1>
        <p className="muted max-w-2xl mx-auto mb-8">
          Modern Bank offers instant transfers, clear insights, and enterprise-grade security. Open an account in minutes and manage your money with confidence.
        </p>
        <div className="space-x-4">
          <a className="btn-primary" href="#get-started">Get started</a>
          <a className="text-sm muted" href="#learn">Learn more</a>
        </div>
      </div>
    </header>
  )
}
