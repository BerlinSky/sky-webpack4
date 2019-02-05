import main, { foo, bar, foobar } from './spy-on';

describe('foobar', () => {
  let fooSpy;
  let barSpy;

  beforeAll(() => {
    fooSpy = jest.spyOn(main, 'foo');
    barSpy = jest.spyOn(main, 'bar');
  });

  describe('foo', () => {
    it('returns "foo"', () => {
      expect(foo()).toBe('foo');
    });
  });

  describe('bar', () => {
    it('returns "bar"', () => {
      expect(bar()).toBe('bar');
    });
  });

  it('calls `foo` and `bar`', () => {
    main.foo();
    expect(fooSpy).toHaveBeenCalled();

    main.bar();
    expect(barSpy).toHaveBeenCalled();
  });

  describe('foobar', () => {
    it('returns "foobar"', () => {
      expect(foobar()).toBe('foobar');
    });
  });

  afterAll(() => {
    // fooSpy.mockReset();
    // barSpy.mockReset();
    fooSpy.mockRestore();
    barSpy.mockRestore();
  });
});
