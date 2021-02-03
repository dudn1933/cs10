//HackerRank

function zz(arr) {
    let sum1 = 0;
    let sum2 = 0;

    arr.forEach((v, i) => sum1 += v[i]);
    arr.forEach((v, i) => sum2 += v[arr.length - 1 - i]);

    console.log(sum1);
    console.log(sum2);

}
zz([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);