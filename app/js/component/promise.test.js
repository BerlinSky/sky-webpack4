import { uppercase } from './promise';

test(`uppercase - 1 'test' to equal 'TEST'`, () => {
  return uppercase('test').then(str => {
    expect(str).toBe('TEST');
  })
})

test(`uppercase -2 'test' to equal 'TEST'`, () => {
  return uppercase('').catch(e => {
    expect(e).toBe('Empty string');
  })
})
