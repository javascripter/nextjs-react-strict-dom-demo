# Next.js + postcss-react-strict-dom Demo

## What

This is a continuation of StyleX CSS extraction method used for [React-Strict-DOM](https://github.com/facebook/react-strict-dom) using [postcss-react-strict-dom](https://github.com/javascripter/postcss-react-strict-dom), but **for Next.js 15 and App Dir**.

See related issues and PRs for context:

- https://github.com/facebook/react-strict-dom/issues/236
- https://github.com/facebook/react-strict-dom/issues/34
- https://github.com/facebook/react-strict-dom/pull/239

## How

### 1. Install dependencies

Install required dependencies:

```bash
bun add react-strict-dom
bun add --save-dev postcss-react-strict-dom autoprefixer
```

Install `@stylexjs/babel-plugin` explicitly (not sure this is a upstream bug but this dependency is required for running).

```bash
bun add --save-dev @stylexjs/babel-plugin@0.75
```

### 2. Apply patches

This repository tries to run the official example from RSD as closely as possible.

Please see `package.json` and `patches/` dir for more details:

1. Patch for "react-strict-dom@0.0.29" is applied to apply latest upstream changes not published yet on npm.

1. Patches borrowed from RSD (@stylexjs/stylex@0.7.5" and "@stylexjs/babel-plugin@0.7.5") are applied to render some official examples correctly.

### 3. Configure PostCSS Plugin for Next.js

Please see `next.config.ts`, `babel.config.js`, and `postcss.config.js` for correct configuration for Next.js.

### 4.Run

In development:

```bash
bun run dev
```

In production:

```bash
bun run build && bun run start
```

1. `/` renders the official example (copied and lightly-modified for Next.js)

2. `/server-action-demo' is a test page to confirm Server Actions still work correctly
