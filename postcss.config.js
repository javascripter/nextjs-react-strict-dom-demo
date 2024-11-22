// postcss.config.js
module.exports = {
  plugins: {
    'postcss-react-strict-dom': {
      include: ['src/**/*.{js,jsx,ts,tsx}'],
    },
    autoprefixer: {},
  },
}
