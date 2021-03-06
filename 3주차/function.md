# 함수형 프로그래밍

====================================================================

### 순수함수란?

- <code>pure function</code>(순수함수)는 말그대로 수학적 함수를 말합니다.
- 들어온 인자가 같으면 항상 같은 값을 <code>return</code>한다.
- 그리고 함수가 받은 인자외에 다른 어떤 외부의 상태에 영향을 끼치지 않는 함수
- <code>return</code>값 외에는 외부와 소통하는 것이 없는 함수

- 순수함수는 조합성을 강조하고 이것은 모듈화 수준을 높이는 것입니다.
- 순수함수는 오류를 줄이고 안정성을 높이는게 목적이고 모듈화 수준이 높아지면 생산성이 높아집니다.

### example

```
function add(a,b) {
    return a + b;
}
console.log(add(10,5));
```

이것은 a와 b의 값이 같을때는 항상 같은 값을 <code>return</code>하기 때문에 순수 함수이다.

```
var c = 10;
function add2(a,b) {
    return a + b + c;
}
console.log(add2(10,5)); 의 결과값으로는 25가 나온다.
c = 20;
console.log(add2(10,5)); 의 결과값으로는 35가 나온다.
이것과 같이 함수의 인자값은 변하지 않았는데 외부에 의해 출력값이 변하게 된것은 순수함수가 아니다.
```

### 부수효과란?

- 함수내에서 변경된 값에 의해 외부의 값이 변경되는 것.

```
var c = 20;
function add3(a,b) {
c = b;
return a + b;
}
console.log(c);             이 출력에서의 c값과 c = 20
console.log(add3(20,30));   함수를 한번 호출시킨 후의 c값
console.log(c);             이 출력에서의 c값은 다르다. c = 30
```

# 고차함수

====================================================================

### 고차함수란?

- 고차함수는 간단히 정의하면 인자로 함수를 받거나 함수를 <code>return</code>하는 형식의 함수를 의미한다.
- 고차함수는 가독성을 높인다고 할 수 있다.
- <code>고차(high)</code>라는 이름에서 알 수 있듯이 고차함수는 조금 더 추상성이 높은 기능을 정의합니다.
- 추상성이 높다는 것은 디테일한 특성이 제거되고 가장 중요하거나 자주 반복되는 특성만을 가진다는 것을 의미합니다.
- 따라서 고차함수는 여러 함수들이 반복적으로 가지고있는 기능을 정의 해두고 나머지 디테일한 기능은 인자로 넣는 <code>Callback함수</code>를 통해 정의할 수 있습니다.
