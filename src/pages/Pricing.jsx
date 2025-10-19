import React from 'react'

export default function Pricing() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6 text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-sm text-center">
            <h3 className="font-semibold mb-2">Starter</h3>
            <p className="text-2xl font-bold mb-2">Free</p>
            <p className="muted mb-4">Basic features for individuals</p>
            <button className="btn-primary">Get started</button>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm text-center">
            <h3 className="font-semibold mb-2">Pro</h3>
            <p className="text-2xl font-bold mb-2">$9/mo</p>
            <p className="muted mb-4">Everything for power users</p>
            <button className="btn-primary">Get Pro</button>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm text-center">
            <h3 className="font-semibold mb-2">Business</h3>
            <p className="text-2xl font-bold mb-2">$49/mo</p>
            <p className="muted mb-4">Advanced features for teams</p>
            <button className="btn-primary">Contact sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}
