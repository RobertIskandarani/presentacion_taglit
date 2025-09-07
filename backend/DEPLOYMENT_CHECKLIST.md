# Railway Deployment Checklist

## Pre-Deployment ✅

- [ ] Code is committed to Git repository
- [ ] All dependencies are in `package.json`
- [ ] `railway.json` configuration file is created
- [ ] Environment variables are documented in `env.example`

## Railway Setup ✅

- [ ] Create Railway account at [railway.app](https://railway.app)
- [ ] Create new project from GitHub repository
- [ ] Set root directory to `backend` folder
- [ ] Add PostgreSQL database service

## Environment Variables ✅

Run `node generate-keys.js` to generate secure keys, then set these in Railway:

- [ ] `NODE_ENV=production`
- [ ] `HOST=0.0.0.0`
- [ ] `PORT=1337`
- [ ] `DATABASE_CLIENT=postgres`
- [ ] `DATABASE_URL=${{Postgres.DATABASE_URL}}`
- [ ] `DATABASE_SSL=true`
- [ ] `DATABASE_SSL_REJECT_UNAUTHORIZED=false`
- [ ] `APP_KEYS=...` (generated)
- [ ] `API_TOKEN_SALT=...` (generated)
- [ ] `ADMIN_JWT_SECRET=...` (generated)
- [ ] `TRANSFER_TOKEN_SALT=...` (generated)
- [ ] `JWT_SECRET=...` (generated)
- [ ] `PUBLIC_URL=https://your-app-name.railway.app`

## Post-Deployment ✅

- [ ] Access admin panel at `https://your-app-name.railway.app/admin`
- [ ] Create admin account
- [ ] Test API endpoints
- [ ] Update frontend to use new backend URL
- [ ] Configure CORS if needed

## Quick Commands

```bash
# Generate security keys
node generate-keys.js

# Test local build
npm run build
npm start

# Check logs in Railway dashboard
# Monitor deployment status
```

## Troubleshooting

- Check Railway logs for build/runtime errors
- Verify all environment variables are set
- Ensure database connection is working
- Test API endpoints manually
