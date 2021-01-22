# process 와 thread

## process

- 간단하게 말하면 실행중인 프로그램이다.
- 프로세스는 사용중인 파일, 데이터, 프로세서의 상태, 메모리 영역 주소 공간, 스레드 정보, 전역 데이터가 저장된 메모리 부분 등 수 많은 자원을 포함하는 개념이다. 종종 스케쥴링의 대상이 되는 작업이라고 불리기도 한다.
- 프로세스는 프로그램이 동작하는데 필요한 정보를 저장하기 위한 공간을 할당받는데 이 공간은 각각의 프로세스별로 code(text), data, stack, heap 영억으로 나뉘어 관리된다.
- 프로세스는 다른 프로세스와 서로 자원을 공유하지 않는다.
  <br></br>
  <img src="https://gmlwjd9405.github.io/images/os-process-and-thread/process.png">
  <br></br>

## thread

- 하나의 프로그램 내에서 여러 개의 실행 흐름을 두기 위한 모델이다.
- 하나의 프로세서(실행 중인 프로그램)에서 각 독립적인 일의 단위인 thread로 여러작업을 처리할 수 있다.
- 하나의 프로세서에서 병렬적으로 여러 개의 작업을 처리하기 위해서는 각 작업을 스레드화 하여 멀티스레딩이 가능하게 해야한다.
  <br></br>
  <img src="https://gmlwjd9405.github.io/images/os-process-and-thread/thread.png">
  <br></br>
  <br></br>

#### 공통점

- 멀티프로세스와 멀티스레드는 양쪽 모두 여러 흐름이 동시에 진행된다는 공통점을 가지고 있다.

#### 차이점

- 멀티프로세스에서 각 프로세스는 독립적으로 실행되며 각각 별개의 메모리를 차지하고 있는 것과 달리 멀티 스레드는 프로세스 내의 메모리를 공유해 사용할 수 있다. 또한 프로세스 간의 전환속도보다 스레드 간의 전환속도가 빠르다.
- 멀티스레드의 다른 장점은 CPU가 여러 개일 경우에 각각의 CPU가 스레드 하나씩을 담당하는 방법으로 속도를 높일 수 있다는 것이다. 이러한 시스템에서는 여러 스레드가 실제 시간상으로 동시에 수행 될 수 있다.
  <br></br>
  <img src="https://gmlwjd9405.github.io/images/os-process-and-thread/multi-thread.png">

<br></br>

## Multi Thread

> 프로그램 실행 시 동시에 다수의 처리를 병행하기 위해 여러 개의 처리 단위인 스레드를 생성하여 운영하는 방법

- 동시성(Concurrency) : 멀티 작업을 위해 하나의 코어에서 멀티 스레드가 번갈아 가며 실행하는 성질
  <br></br>

<img src="https://mblogthumb-phinf.pstatic.net/MjAxNzA4MjZfNjgg/MDAxNTAzNjk5MjEzMDIw.UPvE2MAmWkmNI2z61CUN4kstIGjX7VoKI7Y6eX1noKIg.IoVjyeSp3axFBV53YRnl8CFPxDzbb-ns13loa0SjdQUg.PNG.qbxlvnf11/20170826_070740.png?type=w2">
<br></br>

- 병렬성(Parallelism) : 멀티 작업을 위해 멀티코어에서 개별 스레드를 동시에 실행하는 성질
  <br></br>

<img src="https://mblogthumb-phinf.pstatic.net/MjAxNzA4MjZfOTYg/MDAxNTAzNjk5MjEzMzMx.dZs7v2EsZTOhmabhQo3Q_Nshoowi4vs2O7SyGhdfD8cg.vGN4p340i1nH3jYgDZj2AgUFAU8nFN4mBq9PB8nFnaYg.PNG.qbxlvnf11/20170826_071255.png?type=w2">
<br></br>

#### multi tasking

- 두 가지 이상의 작업을 동시에 처리하는 것. 멀티 스레드 방식을 이용하여 멀티 테스킹 작업이 가능하다.
  <br></br>

## Thread Scheduling

- 스레드의 개수가 코어의 수 보다 많을 경우, 스레드를 어떤 순서에 의해 동시성으로 실행할 것인가를 정하는 작업이다.
  스레드 스케줄링에 의해 스레드들은 아주 짧은 시간에 번갈아가면서 그들의 <code>run()</code>메소드를 조금씩 실행한다.

### Scheduling 방식

- 우선순위(Priority) 방식 : 우선순위가 높은 스레드가 실행 상태를 더 많이 가지도록 스케줄링하는 것으로, 스레드 객체에 우선 순위 번호를 부여할 수 있기 때문에 개발자가 코드로 제어할 수 있다.
  <br></br>
- 순환 할당(Round-Robin) 방식 : 시간 할당량을 정해서 하나의 스레드를 정해진 시간만큼 실행하고 다시 다른 스레드를 싱행하는 방식으로, 자바 가상 기계에 의해서 정해지기 때문에 코드로 제어할 수 없다.
  <br></br>

## 메모리 구조

<br></br>
<img src="https://user-images.githubusercontent.com/49153756/95016525-769c2780-068e-11eb-9c04-22da6a232278.png">
<br></br>

- STACK : 임시 데이터 저장- 로컬변수, 리턴 어드레스(함수)
- HEAP : 메모리관리, 동적 메모리 할당(시스템 콜로 관리)
- BSS : 프로그램에서 사용될 변수들이 실제로 위치하는 영역, 아직 초기화가 이루어지지 않은 변수들이 모여있다.
- DATA : 초기화가 진행된 글로벌 변수, 스태틱 변수 저장
- TEXT : 실제로 우리가 작성한 소스코드가 들어가 있다. 프로그램이 실행되면 텍스트 영역에 들어있는 어셈블리어 코드들이 한줄한줄 해석되면서 프로그램이 실행되는 것이다.
  <br></br><br></br>

## Web worker & Worker thread

- 웹 워커(Web workder)는 스크립트 연산을 웹 어플리케이션의 주 실행 스레드와 분리된 별도의 백그라운드 스레드에서 실행할 수 있는 기술이다. 웹 워커를 통해 무거운 작업을 분리된 스레드에서 처리하면 주 스레드가 멈추거나 느려지지 않고 동작할 수 있다.
  <br></br>
  <br></br>

## 논리적 스레드 & 물리적 스레드

- 스레드에는 논리적 스레드와 물리적 스레드가 존재한다.
  <br></br>
  <img src="https://i.ibb.co/pfzsbWd/image.jpg">
  <br></br>
- 현재 내 컴퓨터는 6코어(헥사코어) 12스레드 이다. 원래는 1코어에 1스레드가 정석? 이지만 인텔의 하이퍼 스레딩 기술로 인해 1코어가 2개의 스레드를 가지고 일을 한다.
  <br></br>
  <img src="https://i.ibb.co/yPQSFCJ/image.jpg">
  <br></br>
- 현재 실행중인 프로세스 개수는 273개이며 논리적 스레드는 3161 이다.
- 프로세스의 작업은 코어에서 이루어지고 코어에는 각 2개씩 총 12스레드를 가지고 있는 내컴퓨터는 273(프로세스) X 12(물리적스레드)를 하면 논리적 스레드의 값을 알 수 있다.
