import React from 'react'
import { useForm } from 'react-hook-form'

export default function Signup() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => alert('Signup mock: ' + JSON.stringify(data))

  return (
    <section className="section">
      <div className="container max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Create your free account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register('name')} placeholder="Full name" className="w-full p-3 border rounded" />
          <input {...register('email')} type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <button className="btn-primary w-full">Create account</button>
        </form>
      </div>
    </section>
  )
}
