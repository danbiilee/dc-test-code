const Calculator = require('../calculator.js');

describe('Caculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // it === Caculator
  it('inits with 0', () => {
    expect(calculator.value).toBe(0);
  });

  it('sets', () => {
    calculator.set(3);
    expect(calculator.value).toBe(3);
  });

  it('clear', () => {
    calculator.set(1);
    calculator.clear();

    expect(calculator.value).toBe(0);
  });

  it('adds', () => {
    calculator.set(3);
    calculator.add(2);

    expect(calculator.value).toBe(5);
  });

  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      calculator.add(101);
    }).toThrow('Value can not be greater than 100');
  });

  it('subtracts', () => {
    calculator.set(3);
    calculator.subtract(5);

    expect(calculator.value).toBe(-2);
  });

  it('multiply', () => {
    calculator.set(-2);
    calculator.multiply(2);

    expect(calculator.value).toBe(-4);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      calculator.set(1);
      calculator.divide(0);

      expect(calculator.value).toBe(Infinity);
    });

    it('4 / 4 === 1', () => {
      calculator.set(4);
      calculator.divide(4);

      expect(calculator.value).toBe(1);
    });
  });
});
