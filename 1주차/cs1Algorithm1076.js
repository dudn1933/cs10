const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let color = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
let input = [];
let calculate = [];

rl
    .on('line', function (line) {
        input.push(line)
    })
    .on('close', function () {
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < color.length; j++) {
                if (input[i] === color[j]) {
                    calculate.push(j);
                }
            }
        }
        let change = 1 << parseInt(calculate[2]);
        let result = parseInt(`${calculate[0]}${calculate[1]}`) * parseInt(change.toString(2));
        console.log(parseInt(result));
        process.exit();
    });