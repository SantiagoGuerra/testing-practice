import caesar from '../src/caesar';

describe('Caesar Function', () => {
  it('ciphers each letter in the plaintext using a shift', () => {
    expect(caesar('hola', 5))
      .toBe('mtqf');
  });

  it('keeps the same case', () => {
    expect(caesar('ZzZ AaA', 1))
      .toBe('AaA BbB');
  });

  it('works with punctiation', () => {
    expect(caesar('ZzZ AaA :', 1))
      .toBe('AaA BbB !');
  });

  it('cifher numbers', () => {
    expect(caesar('ZzZ AaA 0', 1))
      .toBe('AaA BbB 1');
  });

  it('cifhers large text', () => {
    expect(caesar('Lorem ipsum Dolor, amnet! #4508-349567', 1))
      .toBe('Mpsfn jqtvn Epmps; bnofu" $5619+450678');
  });
});