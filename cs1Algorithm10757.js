const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let num1 = [];
let num2 = [];
let arrResult = [];
let carry = '';

rl
    .on('line', function (line) {
        input.push(line)
    })
    .on('close', function () {
        for (let i = 0; i < input.length; i++) {
            num1[i] = input[i].slice(input[i].length / 2, input[i].length);
        }
        for (let i = 0; i < input.length; i++) {
            num2[i] = input[i].slice(0, input[i].length / 2);
        }

        arrResult[0] = String(parseInt(num1[0]) + parseInt(num1[1]));
        arrResult[1] = String(parseInt(num2[0]) + parseInt(num2[1]));
        console.log(arrResult[0]);
        console.log(arrResult[1]);


        carry = String(parseInt(arrResult[1]) + parseInt(arrResult[0][0]));
        arrResult[0] = String(arrResult[0].slice(1, arrResult[0].length));


        let result = carry + arrResult[0];

        //console.log(result);
        process.exit();
    });