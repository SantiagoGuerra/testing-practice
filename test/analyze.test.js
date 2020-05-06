import analyze from '../src/analyze';

describe('analize()', () => {
  it('should return a object with the following properties: ', () => {
    expect(analyze([1, 2, 3, 4]))
      .toEqual({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4,
      });
  });
});