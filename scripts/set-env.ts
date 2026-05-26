// scripts/set-env.js
const { writeFileSync } = require('fs');
const { resolve }       = require('path');

const apiUrl = process.env['API_URL'];

if (!apiUrl) {
  console.error('[set-env] ❌  La variable API_URL est manquante.');
  process.exit(1);
}

const content = `// Généré automatiquement par scripts/set-env.js — NE PAS ÉDITER
export const environment = {
  production: true,
  apiUrl: '${apiUrl}',
  cognito: {
    userPoolId: 'us-east-1_U3yCwN5yQ',
    clientId:   '3nngurnl4v1m22l4l21r7oivph',
    redirectUri:        'https://TON-DOMAINE.railway.app/login',
    redirectSignOutUri: 'https://TON-DOMAINE.railway.app/login',
  },
} as const;
`;

const outPath = resolve(__dirname, '../src/environments/environment.prod.ts');
writeFileSync(outPath, content, 'utf8');
console.log(`[set-env] ✅  environment.prod.ts généré → apiUrl: ${apiUrl}`);
