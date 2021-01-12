const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

//---------------------------------Node.js(백준 1009 문제)
rl
    .on('line', function (line) {
        input.push(line.split(' '));
    })
    .on('close', function () {
        const T = Number(input[0]);
        for (let i = 1; i <= T; i++) {

            let a = parseInt(input[i][0])
            let b = parseInt(input[i][1])

            let result = a;

            //핵심 포인트 엄청나게 큰 제곱근을 작게 만들어서 연산속도를 대폭 줄일 수 있다.
            b = b % 4 + 4;

            for (let i = 1; i < b; i++) {
                result = (result * a) % 10;
            }

            if (result === 0) result = 10;

            console.log(result);
        }
        process.exit();
    });