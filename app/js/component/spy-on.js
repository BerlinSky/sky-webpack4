export const foo = () => 'foo';
export const bar = () => 'bar';

export const foobar = () => main.foo() + main.bar();

const main = {
  foo,
  bar,
  foobar,
};

export default main;
