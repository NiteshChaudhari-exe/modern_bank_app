import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function AuthButton() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  if (isAuthenticated) {
    return <button onClick={() => logout({ returnTo: window.location.origin })} className="ml-2 px-3 py-1 border rounded text-sm">Logout</button>
  }

  return <button onClick={() => loginWithRedirect()} className="ml-2 px-3 py-1 border rounded text-sm">Login</button>
}
