const num1 = '1110'
const num2 = '10101111'

function bin2dec(bin) {
    var answer = 0;
    var pow = 1;
    bin = bin.split('').reverse();

    for (var i = 0; i < bin.length; i++) {
        answer += bin[i] * pow;
        pow *= 2;
    }

    return answer;
}
console.log(bin2dec(num1))
console.log(bin2dec(num2))
