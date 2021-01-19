// ================================================================================================= 공용부분
const factorSet = array => new Set(array);

const isFactor = (number, potentialFactor) => number % potentialFactor == 0;

// condition
// 완전수
const isPerfect = number => (sum(factors(number)) - number) == number;
// 과잉수
const isAbundant = number => (sum(factors(number)) - number) > number;
// 부족수
const isDeficient = number => (sum(factors(number)) - number) < number;
// 소수
const isPrime = number => number > 1 && equalSet(factors(number), prime(number));

// ====================================================================================================================================== 1번

const log = console.log;
// classifier
const calculate = number => new Array(Math.floor(Math.sqrt(number))).fill(0).map((v, i) => v = i + 1); // 10일때 1,2,3 반환

const factors = number => factorSet(calculate(number).filter(v => isFactor(number, v)).reduce((acc, cur) => acc.concat(cur, number / cur), []));

const sum = factors => Array.from(factors).reduce((acc, cur) => acc + cur);

const alpha1 = 10;
const alpha2 = 6;
log('=========== 1번문제 스타트 ===========')
log(isPerfect(alpha1));
log(isPerfect(alpha2));

// prime

const prime = number => new Set([1, number]);

const sizes = number => factors(number) === prime(number);

const equalSet = (aset, bset) => Boolean(!(aset.size !== bset.size) + !(!(Array.from(aset).every(value => !bset.has(value)))));

const Alpha1 = 10;
const Alpha2 = 7;

log(isPrime(Alpha1));
log(isPrime(Alpha2));
log('');
log('');
log('=========== 2번문제 스타트 ===========')
// ========================================================================================================================================== 2번
// 1~100 배열
// Make Number 2~100
const makenumber = number => [...Array(number + 1).keys()].slice(2);
// [...Array()]를 통해 배열을 만들고 .keys()를 통해 값을 준다.
// +1을 해준 이유는 0~99 이기 때문에 +1을 해주었다.

// 완전수 과잉수 부족수 소수 비교
const compare = number => {
    let save = [];

    if (isPerfect(number)) save.push("Perfect");
    if (isAbundant(number)) save.push("Abundant");
    if (isDeficient(number)) save.push("Deficient");
    if (isPrime(number)) save.push("Prime");

    return save;
}

// 재조합
const refactory = arr => arr.map(v => compare(v));

const print = number => {
    refactory(makenumber(number)).reduce((acc, cur) => {
        log(`${acc} : ${cur}`);
        return ++acc;
    }, 2); // 2 = 초기값
}

print(100);