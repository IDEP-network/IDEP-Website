const path = require('path')

module.exports = {
  assetPrefix: './',
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    SUPABASE_API_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjE3NzY1MywiZXhwIjoxOTMxNzUzNjUzfQ.bQaXOhPTWaJvGVE4EWzudycVy3UZlIXTK6GQK7rIJLg",
    SUPABASE_URL: "https://dldtvmktmktybaadfddp.supabase.co"
  }
}