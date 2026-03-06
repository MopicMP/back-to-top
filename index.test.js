const { top, batch } = require('./index');

describe('back-to-top', () => {
  test('should process string input', () => {
    expect(top('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => top(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = top('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
