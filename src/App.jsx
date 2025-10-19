import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Features />
        <section className="section">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <a className="btn-primary" id="get-started" href="#">Create your account</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
