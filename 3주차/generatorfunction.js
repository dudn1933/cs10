// Generator Function

const log = console.log;

// iter(이터럴) =순회가능한 요소
function* filter(f, iter) {
    //    f =   a => a%2
    // iter =   iter배열
    for (const v of iter) {
        if (f(v)) yield v;
    }
}

function* map(f, iter) {
    for (const a of iter) {
        yield f(a);
    }
}

function take(length, iter) {
    let res = [];
    for (const a of iter) {
        res.push(a);
        if (res.length == length) return res;
    }
    return res;
}

function reduce(f, acc, iter) {
    for (const a of iter) {
        acc = f(acc, a);
    }
    return acc;
}

const add = (a, b) => a + b;

const go = (a, ...fs) => reduce((a, f) => f(a), a, fs);

go(10, a => a + 10, a => a + 1, log);

const f = (list, length) =>
    reduce(add, 0,
        take(length,
            map(a => a * a,
                filter(a => a % 2, list))));

const f2 = (list, length) => go(
    list,
    list => filter(a => a % 2, list),
    list => map(a => a * a, list),
    list => take(length, list),
    list => reduce(add, 0, list)
);

function main() {
    log(f2([1, 2, 3, 4, 5], 1));
    log(f2([1, 2, 3, 4, 5], 2));
    log(f2([1, 2, 3, 4, 5], 3));
}
main();