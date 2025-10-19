import React, { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('dark') === '1')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('dark', dark ? '1' : '0')
  }, [dark])

  return (
    <button onClick={() => setDark(d => !d)} className="ml-2 px-3 py-1 border rounded text-sm">
      {dark ? 'Dark' : 'Light'}
    </button>
  )
}
