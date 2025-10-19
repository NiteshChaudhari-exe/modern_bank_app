import React from 'react'

function Feature({ title, children, icon }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm flex flex-col items-start">
      <img src={icon} alt="" className="mb-4 w-12 h-12" />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="muted text-sm">{children}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature title="Instant transfers" icon="/icon-speed.svg">Send money instantly to friends and businesses with low fees.</Feature>
          <Feature title="Secure by default" icon="/icon-secure.svg">We use bank-grade encryption and multiple layers of security to protect your funds.</Feature>
          <Feature title="Insights & dashboard" icon="/icon-dashboard.svg">Beautiful analytics to help you save more and understand your spending.</Feature>
        </div>
      </div>
    </section>
  )
}
