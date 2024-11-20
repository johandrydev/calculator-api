import { operatorsActions } from "../helpers/operators";

export class Calculator {
    private operators: string[] = ['*', '/', '+', '-'];

    public calculate(expression: string): number {
        const arrExpression = validateExpression(expression);
        const result = this.resolveExpression(arrExpression);
        return result;
    }

    private resolveParentheses(arrExpression: string[]) {
        let openIndex = arrExpression.indexOf('(');
        let closeIndex = arrExpression.indexOf(')');
        while (openIndex !== -1 && closeIndex !== -1) {
            const subExpression = arrExpression.slice(openIndex + 1, closeIndex);
            const result = this.resolveExpression(subExpression);
            arrExpression.splice(openIndex, closeIndex - openIndex + 1, result.toString());
            openIndex = arrExpression.indexOf('(');
            closeIndex = arrExpression.indexOf(')');
        }
        return arrExpression;
    }

    private resolveExpression(arrExpression: string[]): number {
        arrExpression = this.resolveParentheses(arrExpression);
        for (const operator of this.operators) {
            let operatorIndex = arrExpression.indexOf(operator);
            while (operatorIndex !== -1) {
                const left = parseFloat(arrExpression[operatorIndex - 1]);
                const right = parseFloat(arrExpression[operatorIndex + 1]);
                let result = 0;
                if (operatorsActions[operator]) {
                    result = operatorsActions[operator](left, right);
                }
                arrExpression.splice(operatorIndex - 1, 3, result.toString());
                operatorIndex = arrExpression.indexOf(operator);
            }
        }
        return parseFloat(arrExpression[0]);
    }
}

export const validateExpression = (expression: string): string[] => {
    const regex = /(\d+|\+|-|\*|\/|\(|\))/g;
    const arrExpression = expression.match(regex);
    if (!arrExpression) {
        throw new Error('Invalid expression');
    }
    return arrExpression;
}
