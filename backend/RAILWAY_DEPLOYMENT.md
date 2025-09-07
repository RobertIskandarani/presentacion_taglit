# Railway Deployment Guide for Strapi Backend

This guide will help you deploy your Strapi backend to Railway.

## Prerequisites

1. A Railway account (sign up at [railway.app](https://railway.app))
2. Your backend code ready for deployment
3. A PostgreSQL database (Railway provides this)

## Step 1: Prepare Your Repository

1. Make sure your backend code is in a Git repository
2. Ensure all necessary files are committed:
   - `package.json`
   - `railway.json`
   - `env.example`
   - All source code in `src/`
   - Configuration files in `config/`

## Step 2: Create a New Railway Project

1. Go to [railway.app](https://railway.app) and sign in
2. Click "New Project"
3. Choose "Deploy from GitHub repo"
4. Select your repository
5. Choose the `backend` folder as the root directory

## Step 3: Add PostgreSQL Database

1. In your Railway project dashboard, click "New"
2. Select "Database" → "PostgreSQL"
3. Railway will automatically create a PostgreSQL database
4. Note the connection details (you'll need these for environment variables)

## Step 4: Configure Environment Variables

In your Railway project settings, add the following environment variables:

### Required Environment Variables

```bash
# Node Environment
NODE_ENV=production

# Server Configuration
HOST=0.0.0.0
PORT=1337

# Database Configuration
DATABASE_CLIENT=postgres
DATABASE_URL=${{Postgres.DATABASE_URL}}
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false

# App Keys (generate these with the commands below)
APP_KEYS=your_app_key_1,your_app_key_2,your_app_key_3,your_app_key_4

# API Token Salt
API_TOKEN_SALT=your_api_token_salt

# Admin JWT Secret
ADMIN_JWT_SECRET=your_admin_jwt_secret

# Transfer Token Salt
TRANSFER_TOKEN_SALT=your_transfer_token_salt

# JWT Secret
JWT_SECRET=your_jwt_secret

# Public URL (Railway will provide this after deployment)
PUBLIC_URL=https://your-app-name.railway.app
```

### Generate Secure Keys

Run these commands locally to generate secure keys:

```bash
# Generate App Keys
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"

# Generate API Token Salt
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"

# Generate Admin JWT Secret
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"

# Generate Transfer Token Salt
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"

# Generate JWT Secret
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
```

## Step 5: Deploy

1. Railway will automatically detect your Node.js application
2. It will run `npm install` and then `npm run build` (via postinstall script)
3. Finally, it will start your application with `npm start`
4. Your Strapi admin panel will be available at `https://your-app-name.railway.app/admin`

## Step 6: Configure CORS (if needed)

If you need to allow requests from your frontend, update the `config/middlewares.ts` file:

```typescript
export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

And create a `config/middlewares.ts` file with CORS configuration:

```typescript
export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'your-app-name.railway.app',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'your-app-name.railway.app',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

## Step 7: Access Your Application

1. Once deployed, your Strapi backend will be available at the Railway-provided URL
2. Access the admin panel at `https://your-app-name.railway.app/admin`
3. Create your admin account on first access
4. Your API will be available at `https://your-app-name.railway.app/api`

## Troubleshooting

### Common Issues

1. **Build Failures**: Check that all dependencies are properly listed in `package.json`
2. **Database Connection Issues**: Verify the `DATABASE_URL` environment variable is correctly set
3. **CORS Issues**: Update the CORS configuration in `config/middlewares.ts`
4. **Memory Issues**: Railway provides different plan tiers with varying memory limits

### Logs

Check the Railway dashboard logs for any deployment or runtime errors.

### Environment Variables

Make sure all required environment variables are set in the Railway dashboard.

## Next Steps

1. Update your frontend to use the new Railway backend URL
2. Set up custom domain (optional)
3. Configure SSL certificates (handled automatically by Railway)
4. Set up monitoring and alerts

## Support

- Railway Documentation: [docs.railway.app](https://docs.railway.app)
- Strapi Documentation: [docs.strapi.io](https://docs.strapi.io)
