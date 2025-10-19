import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 700 },
  { name: 'May', value: 600 },
]

export default function Dashboard() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Dashboard (demo)</h2>
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold mb-2">Balance</h3>
          <p className="text-3xl font-bold">$12,340.50</p>
          <div style={{ width: '100%', height: 240 }} className="mt-6">
            <ResponsiveContainer>
              <LineChart data={data}><XAxis dataKey="name" /><YAxis /><Tooltip /><Line type="monotone" dataKey="value" stroke="#0ea5a4" /></LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
