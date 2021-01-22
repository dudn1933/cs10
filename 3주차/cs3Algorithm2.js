// 프로그래머스 모의고사

const log = console.log;

function solution(answers) {
    var answer = [];
    let list = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    let point = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (list[0][i % 5] === answers[i]) point[0]++;
        if (list[1][i % 8] === answers[i]) point[1]++;
        if (list[2][i % 10] === answers[i]) point[2]++;
    }

    // forEach로 해결해보기
    let max = Math.max(point[0], point[1], point[1]);

    for (let i = 0; i < point.length; i++) {
        if (max == point[i]) answer.push(i + 1);
    }
    return answer;
}

log(solution([1, 2, 3, 4, 5])); // return 1
log(solution([1, 3, 2, 4, 2])); // return 1,2,3




