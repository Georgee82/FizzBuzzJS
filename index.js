const readline = require('readline');
const calculator = require('./calculator')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Enter a number between 1 and 100: ", function (num) {
    var number = parseInt(num);
    rl.close()
    if (number <= 100 && number >= 1) {
        console.log(calculator.calculate(number));
    } else {
        console.log(number + " is not a correct input");
    }
})