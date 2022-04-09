const calculator = require('./calculator')

test("number '5' should result in response 'Buzz'", () => {
    expect(calculator.calculate(5)).toBe("Buzz");
});

test("number '3' should result in response 'Fizz'", () => {
    expect(calculator.calculate(3)).toBe("Fizz");
});

test("number '15' should result in response 'FizzBuzz'", () => {
    expect(calculator.calculate(15)).toBe("FizzBuzz");
});

test("number '2' should result in response '2'", () => {
    expect(calculator.calculate(2)).toBe(2);
});