//LeetCode 7. Reverse Interger

var reverse = function (x) {

    const num = parseInt(x.toString().split('').reverse().join(''))

    if (x > Math.pow(2, 31) - 1 || num > Math.pow(2, 31) - 1) {
        return 0;
    } else {
        return x > 0 ? num : -num
    };
};