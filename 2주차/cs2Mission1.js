class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Coordinates {
    condition(data) {
        let x = new Point(data[0], data[1]);
        let y = new Point(data[2], data[3]);
        if (x.x > 24 || x.y > 24 || y.x > 24 || y.y > 24) {
            console.log("24이상의 값은 적용할 수 없습니다.");
        } else {
            return this.sqrt(x, y);
        }
    }

    sqrt(x, y) {
        let a = x.x - y.x;
        let b = x.y - y.y;
        let result = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(4);
        console.log(`두 점 사이의 거리는 ${result}`);
    }
}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">좌표를 입력하세요.\n"
});

rl.prompt();
rl.on('line', function (line) {
    const input = line.match(/\d+/g).map(Number);
    var dot = new Coordinates(...input);
    dot.condition(input);
})
    .on('close', function () {
        process.exit();
    });