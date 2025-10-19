import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import DarkModeToggle from './components/DarkModeToggle'
import './index.css'

function Header() {
  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">Modern Bank</Link>
        <nav className="space-x-4">
          <Link to="/pricing" className="muted">Pricing</Link>
          <Link to="/contact" className="muted">Contact</Link>
          <Link to="/signup" className="btn-primary">Get started</Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Hero /><Features /><Testimonials /><section className="section"><div className="container text-center"><a className="btn-primary" href="/signup">Create your account</a></div></section></>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
