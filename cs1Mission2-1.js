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

console.log(dec2bin(173));
