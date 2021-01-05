var byteA = [1, 1, 0, 1, 1, 0, 1, 0];
var byteB = [1, 0, 1, 1, 0, 0, 1, 1];

function byteadder(byteA, byteB) {
    var answer = [];

    //function fulladder(byteA, byteB) {
    for (var i = 0; i < byteA.length; i++) {
        answer[i] = Number(answer[i] || 0) + byteA[i] + byteB[i]; // 2 or 1 or 0
        answer[i + 1] = Number(answer[i] >= 2);
        answer[i] = Number(answer[i] != 2) || 0;
    }
    //}
    return answer;
}

console.log(byteadder(byteA, byteB));

