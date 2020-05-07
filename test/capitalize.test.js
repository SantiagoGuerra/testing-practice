import capitalize from '../src/capitalize';

const string = 'car';
const stringWithUpperCase = 'cAR';

describe('Capitalize', () => {
  it('takes a string and returns that string with the first character capitalized', () => {
    expect(capitalize(string))
      .toBe('Car');
  });

  it('normalize a string even if this string has uppercases in the middle', () => {
    expect(capitalize(stringWithUpperCase))
      .toBe('Car');
  });

  it('does not mutate the original string', () => {
    expect(string)
      .toBe('car');
  });
});