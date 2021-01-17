# LinkedLsit

===============================================

## Node 생성

- linkedlist는 현재 data값과 next값을 객체를 통해 보유하고 있고 next의 첫 값은 null을 주고 생성자함수를 통해 다음값을 부여해주는 방식이다.
  <img src="https://i.ibb.co/bzq8kFD/node1.jpg">
  <img src="https://i.ibb.co/7XLYwhZ/Node.jpg">

## LinkedList 구현

- 처음 시작할때 head는 비어있는 상태이다.
  그렇기때문에 첫 값에 null값을 반환해준다.

  #### inserFirst(data)

  - 왼쪽부터 채워넣는 역할이다.
  - 비어있는 head에 new Node(data, this.head)
  - head값은 새로 들어온 값으로 채워진다.
    <img src="https://i.ibb.co/tZmvSWm/insert1.jpg">
    <img src="https://i.ibb.co/37v4Q0x/insert.jpg">

#### add

- 헤드가 비어있으면 첫번째 값으로 data값을 받고 이미 차있으면 노드의 오른쪽 부분에 값을 채워 넣어준다.
  <img src="https://i.ibb.co/g9q6Z0X/insertlast.jpg">
  <img src="https://i.ibb.co/fX5cDMf/add.jpg">
