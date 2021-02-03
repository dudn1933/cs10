const EventEmitter = require('events');
const emitter = new EventEmitter();

// class OrderWaitingTable { //queue테이블
//     constructor() {
//         this.list = [];
//     }

//     add(data) {
//         this.list.push(data);
//     }

//     delete() {
//         this.list.shift();
//     }

//     getList() {
//         return [...this.list];
//     }
// }

class OrderList {
    init() {
        this.pushlist();
    }

    pushlist() {
        emitter.on('takeOrder', (drinkType, drinkCount) => {
            const drink = { drinkType, drinkCount };
            // this.table.add(drink);
            emitter.emit('drinkList', drink);
        })
    }
}

class Manager {
    constructor() {
        this.drinkMenu = ['아이스아메리카노', '카페라떼', '프라프치노'];
    }

    init() {
        this.print();
    }

    print() {
        emitter.on('drinkList', list => {
            console.log(`Barista ~ 만들어야 할 MENU는 ${this.drinkMenu[list.drinkType - 1]}, ${list.drinkCount}잔이야 ~ 준비해 ~`);
            const baristaPass = [this.drinkMenu[list.drinkType - 1], list.drinkCount]
            emitter.emit('orderMenu', baristaPass);
        })
    }
}

class Barista {
    init() {
        this.Make();
    }

    Make() {
        emitter.on('orderMenu', baristaPass => {
            console.log(`Manager님! ${baristaPass[0]}, ${baristaPass[1]}잔 준비중입니다 ~`);
            setInterval(() => {
                console.log(`Manager님! ${baristaPass[0]}, ${baristaPass[1]}잔 나왔습니다 ~`);
            }, 3000)
            // clearInterval 조건을 설정해 주는데 아메리카노의 시간을 받아와서 그 시간을 만족시키면 클리어. 좀더생각해보자.
        });
    }
}

class Start {
    constructor() {
        this.readline = require('readline');
        this.rl = this.readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    init() {
        console.log('>메뉴  =  1. 아메리카노(3s)    2. 카페라떼(5s)    3. 프라프치노(10s)');
        console.log('> 주문할 음료를 입력하세요. 예) 아메리카노 2개 => 1:2');
        this.rl.setPrompt('입력> ');
        this.rl.prompt();
        this.receiveInput();
        this.closeModule();
    }

    receiveInput() { //입력받은 문자열 읽기
        this.rl.on("line", (line) => {
            const [drinkType, drinkCount] = line.split(':').map(Number);
            emitter.emit('takeOrder', drinkType, drinkCount);
        })
    }

    closeModule() { //모듈 종료
        this.rl.on("close", () => {
            process.exit();
        })
    }
}
// const orderWaitingTable = new OrderWaitingTable();
const orderList = new OrderList();
orderList.init();
const manager = new Manager();
const barista = new Barista();
manager.init();
barista.init();
const start = new Start();
start.init();