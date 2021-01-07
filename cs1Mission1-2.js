const first = [1, 1, 0, 1, 1, 0, 1, 0];
const second = [1, 0, 1, 1, 0, 0, 1, 1];

function sum(bitA, bitB) {
    if (bitA != bitB) {
        return 1;
    } else {
        return 0;
    }
};

function carry(bitA, bitB) {
    return bitA && bitB ? 1 : 0;
};

//------------------------------------- half adder
function halfadder(bitA, bitB) {
    let answer = [];
    answer.push(carry(bitA, bitB), sum(bitA, bitB));
    return answer;
}

//------------------------------------- full adder

function fulladder(bitA, bitB, carry) {
    let answer = [];
    let adder = sum(sum(bitA, bitB), carry);
    let upper = bitA || bitB && carry ? 1 : 0;
    answer.push(upper, adder)
    return answer;
}

//------------------------------------- Byte adder

//  first = [1, 1, 0, 1, 1, 0, 1, 0];
// second = [1, 0, 1, 1, 0, 0, 1, 1];
function byteadder(byteA, byteB) {
    var answer = [];
    let carry = 0;

    // 비트가 다를때 
    
    for (let value = 0; value < byteA.length; value++) {
        let solution = fulladder(byteA[value], byteB[value], carry);
        console.log(solution)
        carry = solution[0];
        answer.push(solution[1]);
    }
    answer.push(carry);
    return answer;
}

console.log(byteadder(first, second));

/*
var byteA = [1, 1, 0, 1, 1, 0, 1, 0];
var byteB = [1, 0, 1, 1, 0, 0, 1, 1];

function byteadder(byteA, byteB) {
    var answer = [];

    //function fulladder(byteA, byteB) {
    for (var i = 0; i < byteA.length; i++) {
        answer[i] = Number(answer[i] || 0) + byteA[i] + byteB[i]; // 2 or 1 or 0
        answer[i + 1] = Number(answer[i] >= 2);
        answer[i] = Number(answer[i] != 2) || 0;
    }
    //}
    return answer;
}

console.log(byteadder(byteA, byteB));
*/