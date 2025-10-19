import React from 'react'

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6 text-center">What people say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-sm">“Great app — transfers are instant and reporting is clear.”</div>
          <div className="p-6 bg-white rounded-xl shadow-sm">“I love the dashboard and insights — I saved more this month.”</div>
          <div className="p-6 bg-white rounded-xl shadow-sm">“Secure and easy to use — highly recommended.”</div>
        </div>
      </div>
    </section>
  )
}
