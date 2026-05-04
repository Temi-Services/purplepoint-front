/** @type {import('tailwindcss').Config} */
module.exports = {
  // Mode sombre basé sur la préférence système (media)
  darkMode: 'media',

  content: [
    // tes chemins de fichiers ici
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
  ],

  theme: {
    // Définition de la police (sans-serif par défaut)
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },

    // Extension du thème (pour ne pas écraser les valeurs par défaut)
    extend: {
      colors: {
        // Palette Purple (copie des valeurs v4)
        purple: {
          50: '#EEEDFE',
          100: '#CECBF6',
          200: '#AFA9EC',
          400: '#7F77DD',
          600: '#534AB7',
          800: '#3C3489',
          900: '#26215C',
        },

        // Tokens sémantiques (référencent des variables CSS pour compatibilité dark mode)
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-light': 'var(--color-primary-light)',
        'primary-text': 'var(--color-primary-text)',

        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        border: 'var(--color-border)',
        muted: 'var(--color-muted)',

        success: '#1D9E75',
        warning: '#BA7517',
        danger: '#E24B4A',
      },

      // Rayon des bordures
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
      },
    },
  },

  plugins: [],
};
