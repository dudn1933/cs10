function sum(bitA, bitB) {
    return bitA && bitB ? false : true;
};

function carry(bitA, bitB) {
    return bitA && bitB ? true : false;
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
    let adder = sum(sum(bitA,bitB),carry);
    let upper = adder || carry ? true:false;
    answer.push(upper,adder)
    return answer;    
}

console.log(halfadder(true, true));
console.log(fulladder(true, true, true));
