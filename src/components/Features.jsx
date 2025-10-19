import React from 'react'

function Feature({ title, children }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
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
          <Feature title="Fast transfers">Send money instantly to anyone, anywhere.</Feature>
          <Feature title="Secure by design">Bank-level encryption and multi-factor auth.
          </Feature>
          <Feature title="Beautiful dashboard">Track spending and save with insights.
          </Feature>
        </div>
      </div>
    </section>
  )
}
