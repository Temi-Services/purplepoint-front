/** @type {import('tailwindcss').Config} */
module.exports = {
  // ─── Dark mode basé sur la classe CSS (ThemeService applique/retire 'dark' sur <html>) ───
  darkMode: 'class',

  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
  ],

  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },

    extend: {
      colors: {
        // Palette Purple PurplePoint
        purple: {
          50:  '#EEEDFE',
          100: '#CECBF6',
          200: '#AFA9EC',
          400: '#7F77DD',
          600: '#534AB7',
          800: '#3C3489',
          900: '#26215C',
        },

        // Tokens sémantiques (CSS vars → compatibles dark mode via ThemeService)
        primary:         'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-light': 'var(--color-primary-light)',
        'primary-text':  'var(--color-primary-text)',

        surface:    'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        border:     'var(--color-border)',
        muted:      'var(--color-muted)',

        success: '#1D9E75',
        warning: '#BA7517',
        danger:  '#E24B4A',
      },

      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
      },
    },
  },

  plugins: [],
};
