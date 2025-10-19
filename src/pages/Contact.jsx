import React from 'react'

export default function Contact() {
  return (
    <section className="section">
      <div className="container max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact us</h2>
        <p className="muted mb-4">Have questions? Send us a message and we'll get back to you.</p>
        <form action="/api/contact" method="post" className="space-y-4">
          <input name="name" placeholder="Name" className="w-full p-3 border rounded" />
          <input name="email" placeholder="Email" className="w-full p-3 border rounded" />
          <textarea name="message" placeholder="Message" className="w-full p-3 border rounded h-32" />
          <button className="btn-primary">Send message</button>
        </form>
      </div>
    </section>
  )
}
