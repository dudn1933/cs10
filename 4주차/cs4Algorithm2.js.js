// HackerRank

function timeConversion(s) {
    let date = s.slice(0, s.length - 2).split(":"); // 시간 분 초 배열
    let ampm = s.slice(s.length - 2, s.length); // PM AM 구별

    // === 으로 했을때 안됬던 이유는 date[0]는 문자고 12는 숫자이기 때문이다.
    if (ampm == 'PM') {
        date[0] != 12 ? date[0] = Number(date[0]) + 12 : date[0] = 12;
    } else if (ampm == 'AM' && date[0] == 12) {
        date[0] = '00'
    }

    return date.join(":")
}

console.log(timeConversion("07:05:45PM"))
console.log(timeConversion("12:05:45AM"))