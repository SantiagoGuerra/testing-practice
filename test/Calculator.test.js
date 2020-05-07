import Calculator from '../src/Calculator';

const calculator = new Calculator();

describe('Calculator', () => {
  it('should make a sum operation with two numbers and return the result', () => {
    expect(calculator.add(10, 5))
      .toBe(15);
  });

  it('should make a substract operation with two numbers and return the result', () => {
    expect(calculator.substract(10, 5))
      .toBe(5);
  });

  it('should make a divide operation with two numbers and return the result', () => {
    expect(calculator.divide(10, 5))
      .toBe(2);
  });

  it('should make a multiply operation with two numbers and return the result', () => {
    expect(calculator.multiply(10, 5))
      .toBe(50);
  });
});