function halfadder(bitA, bitB) {
    let answer = [];

    function halfsum(bitA, bitB) {
        if (bitA !== bitB) {
            return true;
        } else {
            return false;
        }
    }
    function halfcarry(bitA, bitB) {
        if (bitA && bitB === true) {
            return true;
        } else {
            return false;
        }
    }
    answer.push(halfcarry(bitA, bitB), halfsum(bitA, bitB));
    return answer;
}

function fulladder(bitA, bitB, carry) {
    let answer = [];

    function fullsum(bitA, bitB, carry) {
        if (carry === true) {
            if (bitA && bitB === true) {
                return true;
            } else {
                return false;
            }
        } else if (carry === false) {
            if (bitA && bitB === true) {
                return false;
            } else {
                return true;
            }
        }
    }

    function fullcarry(bitA, bitB, carry) {
        if (carry === true) {
            return true;
        } else if (carry == false && (bitA && bitB) === true) {
            return true;
        } else {
            return false;
        }
    }

    answer.push(fullcarry(bitA, bitB, carry), fullsum(bitA, bitB, carry))
    return answer;
}

console.log(halfadder(true, false));
console.log(fulladder(true, true, true));
