function sum(bitA, bitB) {          
   if(bitA != bitB) {
       return 1;
   }  else {
       return 0;
   }
};

function carry(bitA, bitB) {                    // 0 0 = true   0 1 = false 
    return bitA === 1 && bitB === 1 ? 1 : 0;    // 1 1 = true   1 0 = false
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
    let upper = bitA || bitB && carry ? 1:0;
    answer.push(upper,adder)
    return answer;    
}

console.log(halfadder(1, 1));
console.log(fulladder(0, 0, 1));
