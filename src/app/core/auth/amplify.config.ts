import { Amplify } from 'aws-amplify';
import { environment } from '../../../environments/environment';

export function configureAmplify(): void {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: environment.cognito.userPoolId,
        userPoolClientId: environment.cognito.clientId,
      },
    },
  });
}
