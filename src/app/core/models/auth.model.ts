// ─── Réponse normale : tokens Cognito ────────────────────────────────────────
export interface LoginResponse {
  accessToken:  string;
  idToken:      string;
  refreshToken: string;
  expiresIn:    number;
}

// ─── Challenge Cognito NEW_PASSWORD_REQUIRED ──────────────────────────────────
export interface NewPasswordChallenge {
  challenge: 'NEW_PASSWORD_REQUIRED';
  session:   string;
  email:     string;
}

// ─── Union des deux cas possibles ────────────────────────────────────────────
export type AuthLoginResult = LoginResponse | NewPasswordChallenge;

// ─── Type guard ───────────────────────────────────────────────────────────────
export function isChallenge(r: AuthLoginResult): r is NewPasswordChallenge {
  return 'challenge' in r;
}
