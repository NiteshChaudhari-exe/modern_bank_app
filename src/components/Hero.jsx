import React from 'react'

export default function Hero() {
  return (
    <header className="section bg-gradient-to-r from-teal-50 to-white">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Modern Bank — Financial services made modern
        </h1>
        <p className="muted max-w-2xl mx-auto mb-8">
          Simple, secure, and fast banking for individuals and teams. Beautiful
          dashboards, instant transfers, and industry-leading security.
        </p>
        <div className="space-x-4">
          <a className="btn-primary" href="#get-started">Get started</a>
          <a className="text-sm muted" href="#learn">Learn more</a>
        </div>
      </div>
    </header>
  )
}
