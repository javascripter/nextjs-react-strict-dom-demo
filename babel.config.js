function getIsDev(caller) {
  if (caller?.isDev != null) return caller.isDev
  // https://babeljs.io/docs/options#envname
  return (
    process.env.BABEL_ENV === 'development' ||
    process.env.NODE_ENV === 'development'
  )
}
module.exports = function babelConfig(api) {
  const dev = api.caller(getIsDev)

  return {
    presets: [
      [
        'react-strict-dom/babel-preset',
        {
          debug: true,
          dev,
          rootDir: process.cwd(),
        },
      ],
      [
        'next/babel',
        {
          'preset-env': {
            targets: {
              // https://github.com/vercel/next.js/issues/57966
              // `next/babel` breaks Server Actions unless we specify the targets.
              // The below values are default values taken from Next.js documentation
              // and has been tested to work with Server Actions.
              // https://nextjs.org/docs/architecture/supported-browsers
              chrome: 64,
              edge: 79,
              firefox: 67,
              opera: 51,
              safari: 12,
            },
          },
        },
      ],
    ],
  }
}
