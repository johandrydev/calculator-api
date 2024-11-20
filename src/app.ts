import express, { Request, Response } from 'express';
import bodyParser from "body-parser";
import { CalculatorRequest, CalculatorResponse } from './interfaces/calculator';
import { Error } from './interfaces/error';
import { Calculator } from './services/calculator';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

const calculator = new Calculator();
app.post('/calculate', (req: Request, res: Response<CalculatorResponse | Error>): void => {
    const { expression } = req.body as CalculatorRequest;
    if (!expression) {
        res.status(400).json({
            message: 'Invalid input: Expression is required and must be a string.'
        });
        return;
    }

    try {
        const result = calculator.calculate(expression);
        res.send({ result });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message
            });
            return
        }
        res.status(500).json({
            message: 'Internal server error'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});