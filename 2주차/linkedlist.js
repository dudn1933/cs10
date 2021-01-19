// 노드생성
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// 링크드 리스트 구현
class LinkedList {
    constructor() {
        //처음 헤드는 비어있음.
        this.head = null;
        this.size = 0;
        this.Allsec = 0;
    }

    // 새로운 data 값 unshift 하기
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // 새로운 data 값 push 하기
    insertLast(data) {
        let node = new Node(data);
        let current;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;

        for (let i = 0; i < obj.length; i++) {
            if (obj[i].RandomString === data) {
                sec = obj[i].sec;
            }
        }
        this.Allsec += Number(sec);
    }

    // index 위치에 data 추가하기
    insertAt(data, index) {
        // If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        var node = new Node(data);
        let current;
        let previous;

        //Set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index;
        }

        node.next = current;
        previous.next = node;

        this.size++

        for (let i = 0; i < obj.length; i++) {
            if (obj[i].RandomString === data) {
                sec = obj[i].sec;
            }
        }
        this.Allsec += Number(sec);
    }

    // data 찾기
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }

    // data 지우기
    removeAt(index) {
        let current = this.head;
        let previous;
        while (current.data !== index) {
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
        this.size--;

        for (let i = 0; i < obj.length; i++) {
            if (obj[i].RandomString === index) {
                sec = obj[i].sec;
            }
        }
        this.Allsec -= Number(sec);
    }

    //초기화
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // 출력
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    //비디오값 출력
    printListVideo() {
        let current = this.head;
        let str = "|---[";
        while (current) {
            //초 찾기
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].RandomString === current.data) {
                    //전역변수로 설정해준 obj배열에 랜덤id의 값이 들어있음.
                    sec = obj[i].sec;
                }
            }
            str += `${current.data}, ${sec}sec]---[`;
            if (!current.next) break;
            else {
                current = current.next;
            }
        }
        console.log(str + "end]");
    }

    // render 출력
    printrender() {
        let count = this.size;
        let sec = this.Allsec;
        console.log(`영상클립 : ${Number(count)}`);
        console.log(`전체길이 : ${Number(sec)}`);
    }
}

const list = new LinkedList();

// 동일한 id 있는지 검렬하고 insterFirst에 push
// 출력 (id중복 제거 + 랜덤 숫자)
var obj = [];
var final = [];
function test() {
    var save = [];

    while (save.length != 13) {
        result = string();
        save.push(result);
        save.filter((value, index) => save.indexOf(value) === index);
        // [...new Set(save)]; 또한 id중복 제거
    }

    for (let i = 0; i < save.length; i++) {
        obj[i] = { "RandomString": `${string()}`, "sec": `${sec()}` }
        final[i] = `제목${i + 1}(${obj[i].RandomString}) : ${obj[i].sec}`;
    }

    for (let i = save.length - 1; i >= 0; i--) {
        list.insertFirst((final[i]));
    }
    // 출력
    list.printListData();
} test();

// Random ID 생성
function string() {
    let char = "abcdef";
    let word_length = 4;
    let RandomString = '';

    for (let i = 0; i < word_length; i++) {
        let length = Math.floor(Math.random() * char.length);
        RandomString += char.substring(length, length + 1);
    }
    return RandomString;
}

// sec 생성
function sec() {
    let sec = Math.floor(Math.random() * 15 + 1)
    return sec;
}

// 2번을 하기위해 위에값 초기화
list.clearList();

// =============================================================== 1번

// ex) console.log(obj[0].RandomString)


const video = new LinkedList();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const input = line.split(" ");
    if (input[0] === "add") {
        video.insertLast(input[1]);
        video.printListVideo();
    } else if (input[0] === "insert") {
        video.insertAt(input[1], Number(input[2]));
        video.printListVideo();
    } else if (input[0] === 'delete') {
        video.removeAt(input[1])
        video.printListVideo();
    } else if (input[0] === 'render') {
        video.printrender();
    }
})
    .on('close', function () {
        process.exit();
    });