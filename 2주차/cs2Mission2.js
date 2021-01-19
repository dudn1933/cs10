class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Triangle {
    length(a, b) {
        let x = a.x - b.x;
        let y = a.y - b.y;
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }

    Area(data) {
        let line1 = new Point(data[0], data[1]);
        let line2 = new Point(data[2], data[3]);
        let line3 = new Point(data[4], data[5]);
        let a = this.length(line1, line2);
        let b = this.length(line2, line3);
        let c = this.length(line3, line1);

        let s = (a + b + c) / 2
        return console.log(`삼각형의 넓이는 ${Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(4)}`);
    }

    condition(data) {
        if (this.x1 > 24 || this.y1 > 24 || this.x2 > 24 || this.y2 > 24) {
            console.log("24이상의 값은 적용할 수 없습니다.");
        } else {
            return this.Area(data);
        }
    }
}

class Drawgraph extends Point {
    dottriangle(data) {
        let a = new Point(data[0], data[1]);        // first.x  first.y
        let b = new Point(data[2], data[3]);
        let c = new Point(data[4], data[5]);        // second.x  second.y

        var arr = new Array(25).fill(0).map(() => new Array(60).fill(" "));
        arr[a.x][Math.ceil(a.y * 2.5)] = '*';
        arr[b.x][Math.ceil(b.y * 2.5)] = '*';
        arr[c.x][Math.ceil(c.y * 2.5)] = '*';
        this.draw(arr);
    }

    draw(arr) {
        let str = '';
        for (let i = 24; i >= 1; i--) {
            if (i < 10) {
                str += ` ${i}|`;
                for (let j = 0; j < 60; j++) {
                    str += arr[i][j];
                }
            } else {
                str += `${i}|`;
                for (let j = 0; j < 60; j++) {
                    str += arr[i][j];
                }
            }
            str += "\n";
        }
        str += `  +`
        for (let i = 0; i < 60; i++) {
            str += `─`;
        }
        str += `\n`;
        for (let i = 0; i <= 24; i = i + 2) {
            if (i < 10) str += `  ${i}  `;
            else str += ` ${i}  `;
        }
        console.log(str)
    }
}

var show = new Drawgraph();
var dot = new Triangle();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">좌표를 입력하세요.\n"
});
rl.prompt();
rl.on('line', function (line) {
    const input = line.match(/\d+/g).map(Number);
    dot.condition(input);
    show.dottriangle(input);
})
    .on('close', function () {
        process.exit();
    });