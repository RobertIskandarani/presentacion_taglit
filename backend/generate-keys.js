#!/usr/bin/env node

/**
 * Script to generate secure keys for Strapi deployment
 * Run with: node generate-keys.js
 */

const crypto = require('crypto');

function generateKey() {
  return crypto.randomBytes(16).toString('base64');
}

console.log('🔐 Strapi Security Keys Generator');
console.log('=====================================\n');

console.log('Copy these values to your Railway environment variables:\n');

console.log(
  'APP_KEYS=' +
    [generateKey(), generateKey(), generateKey(), generateKey()].join(',')
);

console.log('API_TOKEN_SALT=' + generateKey());
console.log('ADMIN_JWT_SECRET=' + generateKey());
console.log('TRANSFER_TOKEN_SALT=' + generateKey());
console.log('JWT_SECRET=' + generateKey());

console.log('\n✅ All keys generated successfully!');
console.log('\n📝 Next steps:');
console.log('1. Copy each line above to your Railway environment variables');
console.log(
  '2. Make sure to set DATABASE_URL to your PostgreSQL connection string'
);
console.log('3. Set NODE_ENV=production');
console.log('4. Set HOST=0.0.0.0 and PORT=1337');
console.log('5. Deploy your application!');
