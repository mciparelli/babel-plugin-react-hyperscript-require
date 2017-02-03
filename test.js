const babel = require('babel-core');
const assert = require('assert');
const reactHyperscriptPlugin = require('./index').default;

let transform;

describe('babel-plugin-react-hyperscript', () => {
  beforeEach(() => {
    transform = code => babel.transform(code, {
      plugins: [reactHyperscriptPlugin],
    }).code;
  });

  it('add import statement if `h()` is present', () => {
    const transformed = transform(
`const SomeComponent = h('div', 'hello world');
export default SomeComponent;`
    );

    assert.equal(transformed,
`import h from 'react-hyperscript';
const SomeComponent = h('div', 'hello world');
export default SomeComponent;`
    );
  });

  it('do not add when no h in use', () => {
    const transformed = transform('const some = code();');

    assert.equal(transformed, `const some = code();`);
  });

  it('do not add import react-hyperscript twice', () => {
    const transformed = transform(
`const SomeComponent = h('div', 'hello world');
const SomeOtherComponent = h('div', 'hello world other');
export default { SomeComponent, SomeOtherComponent };`
    );

    assert.equal(transformed,
    `import h from 'react-hyperscript';
const SomeComponent = h('div', 'hello world');
const SomeOtherComponent = h('div', 'hello world other');
export default { SomeComponent, SomeOtherComponent };`);
  });

  it('do not add if it already imported', () => {
    const transformed = transform(
`import h from 'react-hyperscript';
const SomeComponent = h('div', 'hello world');
export default SomeComponent;`
    );

    assert.equal(transformed,
      `import h from 'react-hyperscript';
const SomeComponent = h('div', 'hello world');
export default SomeComponent;`
    );
  });
});
