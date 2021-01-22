const log = console.log;
// 클로저

function factory_movie(title) {
    return {
        // get_title, set_title = 메소드
        get_title: function () { // 내부함수
            return title;
        },
        set_title: function (_title) { // 내부함수
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

log(ghost.get_title());
log(matrix.get_title());

ghost.set_title('공각기동대');
log(ghost.get_title());
log(matrix.get_title());

2번 리턴으로 인한 끝난 함수의 변수를 참조하는 내부함수
function outter() {
    var title = 'coding everybody';
    return function () {
        log(title);
    }
}
inner = outter(); // outter() 은 return을 통해 생을 마감했다.
inner();          // 하지만 내부함수 리턴한 내부함수 호출시 외부함수에 있는 변수를 가져다가 쓸 수 있다. 이것이 클로저의 독특함이다.

1번 내부함수가 외부함수의 변수를 쓸 수 있다.
function outter() {
    let title2 = '이건 외부함수 변수지롱'
    function inner() {
        var title = '이건 내부함수 변수지롱';

        console.log(title);
        console.log(title2)
    }
    inner();
}
outter();