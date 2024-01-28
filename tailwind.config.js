/** @type {import('tailwindcss').Config} */
module.exports = {

  theme: {
    extend: {
      fontFamily: {
        'major-mono': ['Major Mono Display', 'monospace'],
      },
    },
  },
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      textColor: ['hover'],
    },
  },
}
