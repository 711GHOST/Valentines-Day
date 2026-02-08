module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: '#C9B6E3',
          50: '#F7F4FB',
          100: '#F2EFF8',
          200: '#E6DEF1',
          300: '#D8CBEA',
          400: '#C9B6E3',
          500: '#B397D1'
        },
        beige: {
          DEFAULT: '#F6EFE6',
          100: '#FBF8F5',
          200: '#F6EFE6',
          300: '#EDE2D0'
        },
        plum: '#6B3E6B',
        warmgray: '#6B6B6B'
      },
      boxShadow: {
        soft: '0 6px 20px rgba(165,140,190,0.12)'
      }
    }
  },
  plugins: []
}
