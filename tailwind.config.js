module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottomPink': '0 9px 4px -6px  rgba(236,72,153, 0.9)',
        'bottomViolet': '0 9px 4px -6px rgba(158, 91, 240, 0.9)',
        'bottomWhite': '0 9px 4px -6px rgba(255, 255, 255, 0.9)',
      },
      variants: {
        extend: {
          boxShadow: ['group-hover'],
        },
      },
      backgroundColor: {
      'themePrimary-400': 'var(--themePrimary-400)',
      'themePrimary-800': 'var(--themeSecondary-800)',
      },
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
        'themeTertiary-100': '#fce7f3',
        'themeTertiary-200': '#fbcfe8',
        'themeTertiary-300': '#f9a8d4',
        'themeTertiary-400': '#f472b6',
        'themeTertiary-500': '#ec4899',
        'themeTertiary-600': '#db2777',
        'themeTertiary-700': '#be185d',
        'themeTertiary-800': '#9d174d',
      },
      fontFamily: {
        'sofia': ['SofiaSansCondensed', 'system-ui'],
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
