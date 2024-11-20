import { Calculator, validateExpression } from './calculator';

test('validateExpression', () => {
    expect(validateExpression('1 + 2')).toEqual(['1', '+', '2']);
    expect(validateExpression('1 + 2 * 3')).toEqual(['1', '+', '2', '*', '3']);
    expect(validateExpression('1 + (2 * 3)')).toEqual(['1', '+', '(', '2', '*', '3', ')']);
    expect(validateExpression('1 + (2 * 3) + 1')).toEqual(['1', '+', '(', '2', '*', '3', ')', '+', '1']);

    expect(() => validateExpression('test')).toThrow('Invalid expression');
});

test('calculate', () => {
    const calculator = new Calculator();
    expect(calculator.calculate('1 + 2')).toBe(3);
    expect(calculator.calculate('1 + 2 + 3')).toBe(6);
    expect(calculator.calculate('1 + 2 * 3')).toBe(7);
    expect(calculator.calculate('1 + (2 * 3)')).toBe(7);
    expect(calculator.calculate('1 + (2 * 3) + 1')).toBe(8);
    expect(calculator.calculate('10 * (2 + 5) * 10')).toBe(700);
    expect(calculator.calculate('1 + (2 * 3) + 1 * 2 + 3')).toBe(12);
    expect(calculator.calculate('1 + (2 * 3) + (3 * 5) + 3')).toBe(25);
    expect(calculator.calculate('2 + (10 / 2) + 3')).toBe(10);
    expect(calculator.calculate('2 + (10 / 2) * 9 / 3')).toBe(17);
});