// 프로그래머스 이상한 문자 만들기
const log = console.log;

function solution(s) {
    var answer = s.split(" ").map(v => {
        let save = '';
        for (let i = 0; i < v.length; i++) {
            if (i % 2) {
                save += v[i].toLowerCase();
            } else {
                save += v[i].toUpperCase();
            }
        }
        return save;
    }).join(" ");
    return log(answer);
}
solution("try hello world");