// ─── Réponse normale : tokens émis par l'API ──────────────────────────────────
export interface LoginResponse {
  accessToken:  string;
  idToken:      string;
  refreshToken: string;
  expiresIn:    number;
}

// ─── Challenge NEW_PASSWORD_REQUIRED (premier login) ──────────────────────────
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
