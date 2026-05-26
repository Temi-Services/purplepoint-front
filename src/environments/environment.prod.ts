// src/environments/environment.prod.ts  (généré par scripts/set-env.js au build)
export const environment = {
  production: true,
  apiUrl: 'VITE_API_URL_PLACEHOLDER',
  cognito: {
    userPoolId: 'us-east-1_U3yCwN5yQ',
    clientId: '3nngurnl4v1m22l4l21r7oivph',
    // domain: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_U3yCwN5yQ/.well-known/jwks.json',
    redirectUri: 'http://localhost:4200/login',
    redirectSignOutUri: 'http://localhost:4200/login',
  },
} as const;
