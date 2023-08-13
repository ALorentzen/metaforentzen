module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        'themePrimary-100': '#ecf9ec',
        'themePrimary-200': '#d0f0d0',
        'themePrimary-300': '#b3e7b3',
        'themePrimary-400': '#10b981',
        'themePrimary-500': '#059669',
        'themePrimary-600': '#047857',
        'themePrimary-700': '#065f46',
        'themePrimary-800': '#064e3b',
        'themePrimary-900': '#1f2937',
        'themeSecondary-100': '#e0f7f5',
        'themeSecondary-200': '#b3f0ec',
        'themeSecondary-300': '#80e8e3',
        'themeSecondary-400': '#00ab93',
        'themeSecondary-500': '#007965',
        'themeSecondary-600': '#006056',
        'themeSecondary-700': '#004c4c',
        'themeSecondary-800': '#003d3d',
      },
      fontSize: {
        'xs': '14px',
        'sm': '16px',
        'base': '18px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '28px',
        '3xl': '36px',
        '4xl': '48px',
        '5xl': '64px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
