/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-teal-deep': '#06171b',
        'brand-teal-dark': '#081d22',
        'brand-teal': '#0e323a',
        'brand-cyan': '#0995c2',
        'brand-cyan-hover': '#0882a9',
        'brand-cyan-light': '#e6f6fc',
        'brand-teal-soft': '#f0f5f7',
        'brand-bg': '#f8fafb',
        'brand-border': '#d0dfe4',
        surface: '#f8fafb'
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.25rem' }],
        sm: ['0.9375rem', { lineHeight: '1.5rem' }]
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Georgia', 'serif']
      }
    }
  },
  plugins: []
};
