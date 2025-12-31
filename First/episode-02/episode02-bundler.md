## What is a bundler:

A bundler is a build tool that takes many files in a React app (JS, JSX, CSS, images, etc.) and bundles them into optimized files that the browser can load efficiently.


Why a bundler is needed in React:
---------------------------------
React apps are written using:

- a. Multiple JS/JSX modules (import / export)
- b. Modern syntax (ES6+, JSX)
- c. Assets (CSS, images, fonts)

Browsers cannot directly understand JSX or advanced module graphs. A bundler:
-----------------------------------------------------------------------------
- Converts JSX → JavaScript
- Resolves imports
- Optimizes output for performance

What a bundler does (step by step):
-----------------------------------------------------------------------------
 - Starts from an entry file (usually src/index.js)
 - Builds a dependency graph (follows all import statements)
 - Transforms code (JSX → JS, modern JS → browser-compatible JS)
 - Bundles files into one or more output files
 - Optimizes (minification, tree-shaking, code-splitting)

Simple example:

React source code
-----------------
// App.jsx
export default function App() {
  return <h1>Hello React</h1>;
}


The bundler converts this into browser-ready JavaScript and outputs something like:

function App() {
  return React.createElement("h1", null, "Hello React");
}

Common bundlers used with React include:
----------------------------------------
- Webpack:   Powerful, highly configurable, industry standard.
- Vite:      Very fast dev server, uses native ES modules.
- Parcel:    Zero-config bundler, good for quick setups.


What problems bundlers solve:
------------------------------
- Browsers don’t understand JSX → bundler transpiles
- Many files cause many requests → bundler bundles
- Large JS slows load → bundler optimizes
- Unused code → bundler tree-shakes


Bundler vs Babel (common confusion)
=============================================
Babel: Transpiles code (JSX, ES6 → JS)

Bundler: Manages files, dependencies, and optimizations
👉 Bundlers use Babel internally


Summary:
A bundler in React is a build tool that processes, transforms, and combines application code and assets into optimized JavaScript files that browsers can efficiently load.
