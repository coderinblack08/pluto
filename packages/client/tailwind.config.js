module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge:
    process.env.NODE_ENV === 'production'
      ? ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}']
      : [],
  theme: {
    extend: {
      colors: {
        'gray-50': '#f9fafb',
      },
      boxShadow: {
        error: '0 0 0 3px #fed7d7',
      },
      width: {
        7: '1.75rem',
        14: '3.5rem',
      },
      maxWidth: {
        'sm-md': '26rem',
      },
      padding: {
        7: '1.75rem',
      },
      margin: {
        7: '1.75rem',
      },
    },
  },
  variants: [
    'responsive',
    'group-hover',
    'focus-within',
    // 'disabled',
    'hover',
    'focus',
    // 'active',
  ],
  plugins: [require('@tailwindcss/custom-forms')],
};
