// 9. Palindrome Number
var isPalindrome = function (x) {
    if (x < 0) return false;

    let get = x.toString()
    if (get.length === 1) return true;

    const first = get[0];
    const last = get[get.length - 1];

    if (first !== last) return false; // 두자리수 ex) 11일 경우 length=2 이기때문에 ture,
    if (get.length === 2) return true;//             12일 경우 first !== last에서 걸러진다.
    if (x.length === 0) return true;

    const substr = get.substring(1, get.length - 1);
    return isPalindrome(substr);
};

console.log(isPalindrome(121));
console.log(isPalindrome(10));
console.log(isPalindrome(101));
console.log(isPalindrome(100));
console.log(isPalindrome(1000021))
