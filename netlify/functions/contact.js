export const handler = async (event) => {
  // Mock handler for Netlify Functions
  // In production, verify and send to email or CRM
  console.log('contact received', event.body)
  return { statusCode: 200, body: JSON.stringify({ ok: true }) }
}
