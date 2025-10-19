const fs = require('fs')
const path = require('path')

const pages = ['/', '/pricing', '/contact', '/signup']
const hostname = process.env.SITE_URL || 'https://example.com'

const urls = pages.map(p => `  <url><loc>${hostname}${p}</loc></url>`).join('\n')
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

fs.writeFileSync(path.join(process.cwd(), 'dist', 'sitemap.xml'), xml)
console.log('sitemap generated')
