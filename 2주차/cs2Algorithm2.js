//LeetCode 7. Reverse Interger

// 1번째 방법
var reverse = function (x) {

    const num = parseInt(x.toString().split('').reverse().join(''))

    if (x > Math.pow(2, 31) - 1 || num > Math.pow(2, 31) - 1) {
        return 0;
    } else {
        return x > 0 ? num : -num
    };
};

// 2번째 방법
var reverse = function (x) {
    let num = x.toString().split("").reverse().reduce((acc, cur) => {
        if (cur === "-") {
            return acc *= -1;
        } else {
            return acc + cur;
        }
    }, 0)// 초기 acc의 값은 0이고 그 다음부터 변한다.

    if (Math.abs(x) > Math.pow(2, 31) - 1 || Math.abs(num) > Math.pow(2, 31) - 1) {
        return 0;
    } else {
        return parseInt(num);
    }
};