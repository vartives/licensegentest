addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url)
    const licenseCode = url.pathname.split('/')[2] // Get the license code from the URL
  
    // Beispielhafte Lizenzdaten - dies könnte auch aus einer echten Datenquelle stammen
    const licenses = [
      { licenseCode: "VIGA-12345678", expirationDate: "2024-12-31T23:59:59Z" },
      { licenseCode: "VIGA-87654321", expirationDate: "2025-01-01T23:59:59Z" }
    ]
  
    // Suchen nach der Lizenz
    const license = licenses.find(l => l.licenseCode === licenseCode)
  
    if (license) {
      return new Response(JSON.stringify(license), {
        headers: { 'Content-Type': 'application/json' },
      })
    } else {
      return new Response(JSON.stringify({ error: 'License not found' }), { status: 404 })
    }
  }
  