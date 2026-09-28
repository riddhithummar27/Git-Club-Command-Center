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
        "primary-fixed": "#ffdad2",
        "surface-container-high": "#2a2a2a",
        "error": "#ffb4ab",
        "outline-variant": "#5b403a",
        "on-tertiary-fixed-variant": "#19512c",
        "on-secondary-container": "#fff7f0",
        "on-tertiary-container": "#003114",
        "surface-container-highest": "#353534",
        "on-background": "#e5e2e1",
        "surface-tint": "#ffb4a3",
        "surface-bright": "#393939",
        "primary-fixed-dim": "#ffb4a3",
        "surface-container-lowest": "#0e0e0e",
        "on-tertiary": "#003918",
        "surface-container-low": "#1c1b1b",
        "on-tertiary-fixed": "#00210c",
        "secondary-fixed-dim": "#f5bd58",
        "on-primary-container": "#570c00",
        "on-error": "#690005",
        "on-primary-fixed": "#3d0600",
        "surface": "#131313",
        "on-primary": "#631000",
        "tertiary-container": "#669d71",
        "primary": "#ffb4a3",
        "on-primary-fixed-variant": "#8b1a00",
        "inverse-primary": "#b62500",
        "surface-dim": "#131313",
        "on-surface": "#e5e2e1",
        "on-error-container": "#ffdad6",
        "tertiary-fixed": "#b5f1be",
        "primary-container": "#fd5832",
        "on-secondary": "#422c00",
        "background": "#131313",
        "tertiary": "#9ad4a4",
        "surface-variant": "#353534",
        "on-surface-variant": "#e4beb6",
        "secondary-container": "#976a00",
        "tertiary-fixed-dim": "#9ad4a4",
        "on-secondary-fixed": "#271900",
        "inverse-surface": "#e5e2e1",
        "on-secondary-fixed-variant": "#5f4100",
        "outline": "#ab8981",
        "secondary-fixed": "#ffdeaa",
        "secondary": "#f5bd58",
        "surface-container": "#201f1f",
        "error-container": "#93000a",
        "inverse-on-surface": "#313030"
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