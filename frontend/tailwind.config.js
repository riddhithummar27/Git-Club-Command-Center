/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 30s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-10deg) scale(1)' },
          '50%': { transform: 'translateY(-40px) rotate(10deg) scale(1.05)' },
        }
      },
      colors: {
        "primary-fixed": "var(--color-primary-fixed)",
        "surface-container-high": "var(--color-surface-container-high)",
        "error": "var(--color-error)",
        "outline-variant": "var(--color-outline-variant)",
        "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant)",
        "on-secondary-container": "var(--color-on-secondary-container)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        "on-background": "var(--color-on-background)",
        "surface-tint": "var(--color-surface-tint)",
        "surface-bright": "var(--color-surface-bright)",
        "primary-fixed-dim": "var(--color-primary-fixed-dim)",
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "on-tertiary": "var(--color-on-tertiary)",
        "surface-container-low": "var(--color-surface-container-low)",
        "on-tertiary-fixed": "var(--color-on-tertiary-fixed)",
        "secondary-fixed-dim": "var(--color-secondary-fixed-dim)",
        "on-primary-container": "var(--color-on-primary-container)",
        "on-error": "var(--color-on-error)",
        "on-primary-fixed": "var(--color-on-primary-fixed)",
        "surface": "var(--color-surface)",
        "on-primary": "var(--color-on-primary)",
        "tertiary-container": "var(--color-tertiary-container)",
        "primary": "var(--color-primary)",
        "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant)",
        "inverse-primary": "var(--color-inverse-primary)",
        "surface-dim": "var(--color-surface-dim)",
        "on-surface": "var(--color-on-surface)",
        "on-error-container": "var(--color-on-error-container)",
        "tertiary-fixed": "var(--color-tertiary-fixed)",
        "primary-container": "var(--color-primary-container)",
        "on-secondary": "var(--color-on-secondary)",
        "background": "var(--color-background)",
        "tertiary": "var(--color-tertiary)",
        "surface-variant": "var(--color-surface-variant)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "secondary-container": "var(--color-secondary-container)",
        "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim)",
        "on-secondary-fixed": "var(--color-on-secondary-fixed)",
        "inverse-surface": "var(--color-inverse-surface)",
        "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant)",
        "outline": "var(--color-outline)",
        "secondary-fixed": "var(--color-secondary-fixed)",
        "secondary": "var(--color-secondary)",
        "surface-container": "var(--color-surface-container)",
        "error-container": "var(--color-error-container)",
        "inverse-on-surface": "var(--color-inverse-on-surface)",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "1rem",
        "space-xs": "0.25rem",
        "space-xl": "2rem",
        "margin": "1rem",
        "gutter-desktop": "1.5rem",
        "space-lg": "1.25rem",
        "space-md": "0.75rem",
        "margin-desktop": "2rem",
        "space-sm": "0.5rem"
      },
      fontFamily: {
        'headline-xl': ['Plus Jakarta Sans', 'sans-serif'],
        'headline-sm': ['Plus Jakarta Sans', 'sans-serif'],
        'title-md': ['Plus Jakarta Sans', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'body-sm': ['Inter', 'sans-serif'],
        'label-mono-sm': ['JetBrains Mono', 'monospace'],
        'label-mono-md': ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'headline-xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'headline-sm': ['1.5rem', { lineHeight: '1.2' }],
        'title-md': ['1.125rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.5' }],
        'body-md': ['1rem', { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'label-mono-md': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'label-mono-sm': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }]
      }
    }
  },
  plugins: [],
}