import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'

export default function RequireAuth({ children }) {
  const { isAuthenticated, isLoading } = useAuth0()
  if (isLoading) return <div className="container py-10">Loading auth...</div>
  if (!isAuthenticated) return <Navigate to="/signup" replace />
  return children
}
