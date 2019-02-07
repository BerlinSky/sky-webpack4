import * as math from "./math";

math.log = jest.fn(() => 'test');

test(`The math log function`, () => {
  const result = math.log(10000, 10)
  expect(result).toBe('test')
  expect(math.log).toHaveBeenCalled()
  expect(math.log).toHaveBeenCalledWith(10000, 10)
})
