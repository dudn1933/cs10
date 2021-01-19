// ========================================================================= 1번방법

const log = console.log;

const isFactor = (number, potentialFactor) => number % potentialFactor == 0;

const factorSet = array => new Set(array);

const calculate = number => new Array(Math.floor(Math.sqrt(number))).fill(0).map((v, i) => v = i + 1); // 10일때 1,2,3 반환

const factors = number =>
    factorSet(
        calculate(number)
            .filter(v => isFactor(number, v))
            .reduce((acc, cur) => acc.concat(cur, number / cur), []) // [] 에는 reduce의 initialValue == 초기값 이 들어간다.
        // concat = (value, value , value...)
        // reduce = (callback(accmulator, currentValue, index, array), initialValue)
    )

const sum = factors => Array.from(factors).reduce((acc, cur) => acc + cur);

const isPerfect = number => (sum(factors(number)) - number) == number;

const isAbundant = number => (sum(factors(number)) - number) > number;

const isDeficient = number => (sum(factors(number)) - number) < number;

const alpha1 = 10;
const alpha2 = 6;

log(isPerfect(alpha1));
log(isPerfect(alpha2));

// // ------------------------------------------------------------------------- PrimeAlpha

const prime = number => new Set([1, number]);

const sizes = number => factors(number) === prime(number);

const isPrime = number => number > 1 && equalSet(factors(number), prime(number));

const equalSet = (aset, bset) => Boolean(!(aset.size !== bset.size) + !(!(Array.from(aset).every(value => !bset.has(value)))));

const Alpha1 = 10;
const Alpha2 = 7;

log(isPrime(Alpha1));
log(isPrime(Alpha2));
















// ===================================================================2번째방법


// const factorSet = array => new Set(array);
//log(factorSet([1, 2, 3, 4])); = Set{1, 2, 3, 4}

// const calculate = number => new Array(Math.floor(Math.sqrt(number))).fill(0).map((v, i) => v = v*i + 1);
// // log(calculate(10)) = [1,2,3]

// const filter = number => calculate(number).filter(v => isFactor(number, v)); // [1,2]


// const sum = factors => Array.from(factors).reduce((acc, cur) => acc + cur);

//     const isPerfect = (factors, number) => (sum(factors) - number) == number;

//     const isAbundant = (factors, number) => (sum(factors) - number) > number;

//     const isDeficient = (factors, number) => (sum(factors) - number) < number;


// const factors = number =>
//     factorSet(
//         calculate(number)
//             .filter(v => isFactor(number, v))
//             // [1,2]
//             .reduce((acc, cur) => acc);
// log(factors(10));