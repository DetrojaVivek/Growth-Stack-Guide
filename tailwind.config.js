/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        'bg-main': 'var(--bg-main)',
        'bg-surface': 'var(--bg-surface)',
        'bg-card': 'var(--bg-card)',
        'bg-navy': 'var(--bg-navy)',
        'bg-navy-card': 'var(--bg-navy-card)',
        'text-dark': 'var(--text-dark)',
        'text-muted': 'var(--text-muted)',
        'text-light': 'var(--text-light)',
        'border-color': 'var(--border-color)',
        'border-hover': 'var(--border-hover)',
        'border-dark': 'var(--border-dark)',
        'primary-yellow': 'var(--primary-yellow)',
        'primary-yellow-hover': 'var(--primary-yellow-hover)',
        'primary-yellow-light': 'var(--primary-yellow-light)',
        'purple-main': 'var(--purple-main)',
        'purple-hover': 'var(--purple-hover)',
        'purple-light': 'var(--purple-light)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        yellow: 'var(--shadow-yellow)',
        purple: 'var(--shadow-purple)',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-sm)',
        lg: 'var(--radius-lg)',
        pill: 'var(--radius-pill)',
      },
    },
  },
  plugins: [],
};
