// HackerRank

// 정말 온갖 방법을 다해봤다.
// 죄수 - 캔디 + 1 % 의자 등등 진짜 모든 경우의 수를 다 해본것같다 ^-^
// 이래서 머리가 나쁘면 몸이 고생한다고 하는 것 같다 ^^ ...

function saveThePrisoner(n, m, s) {
    if ((m + s - 1) % n !== 0) {
        return (m + s - 1) % n;
    } else {
        return n;
    }
};

console.log(saveThePrisoner(5, 2, 1));
console.log(saveThePrisoner(5, 2, 2));
console.log(saveThePrisoner(5, 5, 5));
console.log(saveThePrisoner(5, 1, 5));
console.log(saveThePrisoner(3, 11, 3)); //1


