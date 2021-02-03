// HackerRank

const log = console.log;

function kangaroo(x1, v1, x2, v2) {
    // while 문으로 count++ 해서 10000보다 작을때로 루프 돌려도 될듯.
    for (let i = 0; i < 10000; i++) {
        if (x1 + v1 * i === x2 + v2 * i) {
            return "YES";
        }
    }
    return "NO";
}

log(kangaroo(0, 3, 4, 2));
log(kangaroo(0, 2, 5, 3));

