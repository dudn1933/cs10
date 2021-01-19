class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Quadrangle {
    // 두점 사이의 거리
    line(first, second) {
        let x = first.x - second.x;
        let y = first.y - second.y;
        let result = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)).toFixed(4);
        return result;
    }

    //라인출력
    sqrt(data) {
        let first = new Point(data[0], data[1]);// first.x  first.y
        let second = new Point(data[2], data[3]);// second.x  second.y

        console.log(`두 점 사이의 거리는 ${this.line(first, second)}`);
    }

    //사각형
    quadrangle(data) {
        let dot1 = new Point(data[0], data[1]);        // first.x  first.y
        let dot2 = new Point(data[2], data[3]);       // second.x  second.y
        let dot3 = new Point(data[4], data[5]);
        let dot4 = new Point(data[6], data[7]);

        // dot1 점을 기준으로 3개의 선을 구해서 가장 긴선이 대각선
        let save = [];
        let line1 = this.line(dot1, dot2);
        let line2 = this.line(dot1, dot3);
        let line3 = this.line(dot1, dot4);
        save.push(line1), save.push(line2), save.push(line3);
        // 3개의 값을 내림차순 정렬 
        save.sort((a, b) => { return b - a });

        //피타고라스 c^2 == a^2 +b^2
        let twodotline = Math.sqrt(Math.pow(save[1], 2) + Math.pow(save[2], 2));

        // 가장긴 save[0]와 c^2(twodotline)가 같다면 직사각형
        if (Math.floor(save[0]) === Math.floor(twodotline)) {
            return console.log(`직사각형의 넓이는 ${save[1] * save[2]}`);
        } else {
            console.log("직사각형이 아닙니다.");
        }

        //console.log('사각형의 넓이는 ')
    }

}

class Drawgraph extends Point {
    dotline(data) {
        let a = new Point(data[0], data[1]);        // first.x  first.y
        let b = new Point(data[2], data[3]);        // second.x  second.y

        var arr = new Array(25).fill(0).map(() => new Array(60).fill(" "));
        arr[a.x][Math.ceil(a.y * 2.5)] = '*';
        arr[b.x][Math.ceil(b.y * 2.5)] = '*';
        this.draw(arr);
    }

    dotquadrangle(data) {
        let a = new Point(data[0], data[1]);        // first.x  first.y
        let b = new Point(data[2], data[3]);       // second.x  second.y
        let c = new Point(data[4], data[5]);
        let d = new Point(data[6], data[7]);

        var arr = new Array(25).fill(0).map(() => new Array(60).fill(" "));
        arr[a.x][Math.ceil(a.y * 2.5)] = '*';
        arr[b.x][Math.ceil(b.y * 2.5)] = '*';
        arr[c.x][Math.ceil(c.y * 2.5)] = '*';
        arr[d.x][Math.ceil(d.y * 2.5)] = '*';
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


var dot = new Point();
var area = new Quadrangle();
var show = new Drawgraph();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">좌표를 입력하세요.\n"
});
rl.prompt();
rl.on('line', function (line) {
    const input = line.match(/\d+/g).map(Number);
    if (input.length === 4) {
        area.sqrt(input);
        show.dotline(input);
        //show.print();
    } else {
        area.quadrangle(input);
        show.dotquadrangle(input)
    }

})
    .on('close', function () {
        process.exit();
    });