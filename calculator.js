var result;

function calculate(number) {
    return getResult(number);
}

function getResult(number) {
    if (number % 15 === 0)
        result = "FizzBuzz";
    else if (number % 3 === 0)
        result = "Fizz";
    else if (number % 5 === 0)
        result = "Buzz";
    else {
        result = number;
    }
    return result;
}

exports.calculate = calculate;