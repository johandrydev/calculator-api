type OperatorActions = {
    [key: string]: (a: number, b: number) => number;
}

const add = (a: number, b: number): number => a + b;
const subtract = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number => a / b;

export const operatorsActions: OperatorActions = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
}