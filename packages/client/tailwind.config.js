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
        'accent-1': '#333',
      },
      width: {
        14: '3.5rem',
      },
    },
  },
  variants: [
    'responsive',
    'group-hover',
    // 'disabled',
    'hover',
    'focus',
    // 'active',
  ],
  plugins: [],
};
