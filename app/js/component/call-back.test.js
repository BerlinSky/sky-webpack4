import { uppercase } from "./call-back";

test(`uppercase 'test to equal 'TEST'`, (done) => {
  uppercase('test', (str)=> {
    expect(str).toBe('TEST');
    done();
  })
});

