export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1',
  cognito: {
    userPoolId: 'us-east-1_U3yCwN5yQ',
    clientId: '3nngurnl4v1m22l4l21r7oivph',
    // domain: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_U3yCwN5yQ/.well-known/jwks.json',
    redirectUri: 'http://localhost:4200/login',
    redirectSignOutUri: 'http://localhost:4200/login',
  },
} as const;
