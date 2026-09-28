/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        "surface-subtle": "var(--color-surface-subtle)",
        "surface-container": "var(--color-surface-container)",
        "surface-container-high": "var(--color-surface-container-high)",
        "border-subtle": "var(--color-border-subtle)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        "primary": "var(--color-primary)",
        "primary-container": "var(--color-primary-container)",
        "secondary": "var(--color-secondary)",
        "secondary-container": "var(--color-secondary-container)",
        "tertiary": "var(--color-tertiary)",
        "tertiary-container": "var(--color-tertiary-container)",
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
        "headline-xl-mobile": ["Plus Jakarta Sans"],
        "headline-xl": ["Plus Jakarta Sans"],
        "headline-sm": ["Plus Jakarta Sans"],
        "label-md": ["Manrope"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "headline-md": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "label-sm": ["Manrope"],
        "body-sm": ["Inter"],
        "label-lg": ["Manrope"],
        "headline-lg": ["Plus Jakarta Sans"]
      },
    }
  },
  plugins: [],
}
