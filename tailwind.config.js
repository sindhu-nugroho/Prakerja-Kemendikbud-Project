/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        educourse: '#00acb4',
        paragraf: '#22d3ee',
        yellow: '#ffcb00',
        dark: '#0f172a'
      },
    screens: {
      '2xl': '1320px',
    },
    },
  },
  plugins: [],
}

