### babel-plugin-react-hyperscript-require
[![Build
Status](https://api.travis-ci.org/mciparelli/babel-plugin-react-hyperscript-require.svg?branch=master)](https://travis-ci.org/mciparelli/babel-plugin-react-hyperscript-require)
[![npm](https://img.shields.io/npm/v/babel-plugin-react-hyperscript-require.svg?maxAge=3600)](https://www.npmjs.com/package/babel-plugin-react-hyperscript-require)

&nbsp;

Babel plugin that adds react-hyperscript import declaration

_(this repo was cloned from [styled-components-require](https://github.com/mciparelli/babel-plugin-styled-components-require)
and modified to be used with [react-hyperscript](https://github.com/mlmorg/react-hyperscript))_

&nbsp;

#### Example

Your `component.js` that contains this code:

```js
const Component = h('div', 'hello world');
export default Component;
```

will be transpiled to:

```js
import h from 'react-hyperscript';

const Component = h('div', 'hello world');
export default Component;
```

&nbsp;

#### Usage

`npm install babel-plugin-react-hyperscript-require --save-dev`

Add `react-hyperscript-require` into `.babelrc`

```json
{
  "plugins": [
    "react-hyperscript-require"
  ]
}
```

&nbsp;

#### Tests

✓ add import statement if `h()` is present

✓ do not add when no h in use

✓ do not add import react-hyperscript twice

✓ do not add if it already imported

&nbsp;

#### You like?

:star: this repo

&nbsp;

#### License

MIT © [mciparelli](https://github.com/mciparelli)
