import reverseString from '../src/reverseString';

const string = 'hola';

describe('reverseString', () => {
  it('takes a string and returns it reversed.', () => {
    expect(reverseString(string))
      .toBe('aloh');
  });

  it('does not mutate the original string', () => {
    expect(string)
      .toBe('hola');
  });
});