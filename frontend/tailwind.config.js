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
        "background": "var(--color-background)",
        "surface": "var(--color-surface)",
        "surface-bright": "var(--color-surface-bright)",
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-container": "var(--color-surface-container)",
        "surface-container-high": "var(--color-surface-container-high)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "outline": "var(--color-outline)",
        "outline-variant": "var(--color-outline-variant)",
        
        "primary": "var(--color-primary)",
        "primary-container": "var(--color-primary-container)",
        "on-primary-container": "var(--color-on-primary-container)",
        "primary-fixed": "var(--color-primary-fixed)",
        "on-primary-fixed": "var(--color-on-primary-fixed)",
        "primary-fixed-dim": "var(--color-primary-fixed-dim)",
        
        "secondary": "var(--color-secondary)",
        "secondary-container": "var(--color-secondary-container)",
        "on-secondary-container": "var(--color-on-secondary-container)",
        "secondary-fixed": "var(--color-secondary-fixed)",
        "on-secondary-fixed": "var(--color-on-secondary-fixed)",
        
        "tertiary": "var(--color-tertiary)",
        "tertiary-container": "var(--color-tertiary-container)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",
        "tertiary-fixed": "var(--color-tertiary-fixed)",
        "on-tertiary-fixed": "var(--color-on-tertiary-fixed)",
        
        "error": "var(--color-error)",
        "error-container": "var(--color-error-container)",
        "on-error-container": "var(--color-on-error-container)"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
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
