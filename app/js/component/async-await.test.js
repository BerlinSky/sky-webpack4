import { uppercase } from './promise';

test(`uppercase - 3 'test' to equal 'TEST'`, async () => {
  const str = await uppercase('test')
  expect(str).toBe('TEST')
})
