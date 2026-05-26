// scripts/set-env.ts
// Exécuté avant ng build pour injecter les variables Railway dans environment.prod.ts
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const apiUrl = process.env['API_URL'];

if (!apiUrl) {
  console.error('[set-env] ❌  La variable d\'environnement API_URL est manquante.');
  process.exit(1);
}

const content = `// Généré automatiquement par scripts/set-env.ts — NE PAS ÉDITER
export const environment = {
  production: true,
  apiUrl:     '${apiUrl}',
} as const;
`;

const outPath = resolve(__dirname, '../src/environments/environment.prod.ts');
writeFileSync(outPath, content, 'utf8');
console.log(`[set-env] ✅  environment.prod.ts généré → apiUrl: ${apiUrl}`);
