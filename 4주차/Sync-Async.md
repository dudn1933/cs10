# 동기(Sync) VS 비동기(Async)

> 동기 & blocking

- 요청을 보낸 후 해당 응답을 받아야 다음 동작을 실행(EX.은행)
- 순수 자바스크립트는 동기적으로 작동한다.
- 자바스크립트를 비동기적으로 작동시키는 것은 자바스크립트 엔진 바깥을 감싸고 있는 호스팅 환경이고 Node.js 또한 호스팅 환경중의 하나가 되었다.

> 비동기 & non-blocking

- 비동기 : 요청을 보낸 후 응답에 관계없이 다음 동작을 실행(EX.카페)
- non-blocking : setTimeout은 제어권을 쥐고 있지 않던데? 바로 반환하더라고, non-blocking이네!

<br></br>

> 비동기 처리란?

- 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고, 순차적으로 다음 코드를 먼저 실행하는 자바스크립트의 특성(싱글 스레드, 콜스택).
- 클라이언트에서 서버로 데이터를 요청 했을 때, 서버가 그 요청에 대한 응답을 언제 줄지도 모르는데 마냥 기다릴 수 없어 비동기처리가 필요(즉시 처리하지 못하는 이벤트들은 Web API를 이용하여 콜백큐로 보내서 이벤트루프를 통해 콜스택이 비었을 경우 실행)
  <br></br>

### 비동기 예제/setTimeout()

```
console.log('1');
setTimeout(() => {
    console.log('2')
}, 3000)
console.log('3');

결과값
1 -> 3 -> 2 순으로 출력한다.
```

<br></br>

> Promise

- Promise 객체를 사용하여 비동기 작업이(성공 혹은 실패) 완료된 후의 결과 값을 받을 수 있다. 그래서 이후 처리를 쉽게 컨트롤 가능하다.

- Promise는 함수를 인자로 받으며 인자로 들어온 함수는 다시 resolve(비동기 처리 성공)와 reject(비동기 처리 실패) 2개의 함수를 인자로 받게된다.
- resolve 시 then 메소드, reject 시 catch 메소드의 인자로 넘어간다.
- then 메소도는 다시 Promise를 반환하여 연속적으로 then 사용가능

```
//promise
function add(x) {
    return new Promise((resolve, reject) => {
        let sum = x + x;
        console.log(sum);
        resolve(sum);
    })
};

 add(2).then(result => {
     add(result).then(result => {
         add(result).then(result => {
             console.log('finish!');
         })
     })
 });

// 위의 예시에서 들여쓰기를 없애려면 return을 하라!
add(2).then(result => {
    return add(result)
}).then(result => {
    return add(result)
}).then(result => {
    console.log(`finish!`);
});
```

```
// callback지옥
function add(x, callback) {
     let sum = x + x;
     console.log(sum);
     callback(sum);
 };

 add(2, function (result) {
     add(result, function (result) {
         add(result, function (result) {
             console.log('finish!');
         })
     })
 });
```

<br></br>

> call 과 apply

- call과 apply는 함수를 호출하는 함수이다. 그러나 그냥 실행하는 것이 아니라 첫 번째 인자에 this 로 setting하고 싶은 객체를 넘겨주어 this를 바꾸고나서 실행한다.

```
const obj ={ name: 'TOM' };

const say = city => {
    console.log(`Hello, my name is ${this.name}, I live in ${city}`);
}

say('seoul');
say.call(obj, `seoul`);
say.apply(obj, ['seoul']);
```

첫 번째 실행인 say.call(obj, 'seoul'); 의 경우와 세 번째 실행인 say.apply(obj, 'seoul'); 은 this를 obj로 변경시켰으므로 원하는 값이 나온다.

- call 과 apply의 차이점은 실제 필요한 parameter을 입력하는 방식이다.
- call 과는 다르게 apply는 두 번째 인자부터 모두 배열에 넣어야 한다.

<br></br>

> EventEmitter

- <code>on()</code> 메소드 = 이벤트가 전달될 객체에 이벤트 리스너를 설정하는 역할. 보통은 노드 내부에서 미리 만들어 제공하는 이벤트를 받아 처리하지만, 필요할 떄는 직접 이벤트를 만들어 전달 할 수도 있다.
- <code>once()</code> 메소드 = 이벤트 리스너 함수가 한번이라도 실행하고 나면 자동으로 제거 되므로 이벤트를 딱 한번만 받아서 처리 할 수 있다.
- <code>emit()</code> = 이벤트를 다른쪽으로 전달하고 싶을 경우에 사용한다.
  이벤트를 처리하는 <strong><code>EventEmitter</code></strong>의 주요 메소드

```
1번 예제

var EventEmitter = require("events").EventEmitter;
var evt = new EventEmitter();

evt.on("helloNode", str => {
    console.log("Hello! " + str);
});

setTimeout(() => {
    evt.emit("helloNode", "Node.js");
}, 3000);

<output>
3초 후) Hello! node.js
```

```
2번 예제

process.on('exit',() => {
    console.log('exit 이벤트 발생함');
});

setTimeout(() => {
    console.log('2초 후에 시스템 종료 시도함');
    process.exit();
},2000);
```

```
3번 예제

process.on('tick', count => {
    console.log('tick Event Occur : %s', count);
});

setTimeout(() => {
    console.log('2초 후에 tick 이벤트 전달을 시도함');
    process.emit('tick', '2');
}, 2000)
```
