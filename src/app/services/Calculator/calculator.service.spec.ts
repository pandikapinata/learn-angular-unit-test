import { LoggerService } from '../Logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    let loggerService = new LoggerService();
    const calculator = new CalculatorService(loggerService);

    let result = calculator.add(2, 2);

    expect(result).toBe(4);
  });
  it('should substract two numbers', () => {
    let loggerService = new LoggerService();
    const calculator = new CalculatorService(loggerService);

    let result = calculator.substract(2, 2);

    expect(result).toBe(0);
  });
});
