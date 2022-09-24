const config = require('../../config');

describe('Validate variables from config', () => {
  it('should return the correct values', () => {
    expect(typeof config.dev).toBe('boolean');
    expect(typeof Number(config.port)).toBe('number');
  });
});
