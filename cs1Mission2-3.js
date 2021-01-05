function dec2bin(decimal) {
    var answer = [];
    var mok = 0;
    var div = 0;

    do {
        mok = Math.floor(decimal / 2); // 1/2 = 0.5 따라서 0
        div = decimal - mok * 2;
        answer.push(div);
        decimal = mok;
    } while (mok != 0);

    return answer;
}

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
