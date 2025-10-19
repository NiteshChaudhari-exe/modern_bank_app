import React from 'react'

export default function Footer() {
  return (
    <footer className="section bg-slate-900 text-slate-200">
      <div className="container text-center">
        <p className="text-sm">© {new Date().getFullYear()} Modern Bank. All rights reserved.</p>
      </div>
    </footer>
  )
}
