// k번째 수

// 1번째 방법
function solution(array, commands) {
    var answer = [];

    let arr = new Array(commands.length).fill(0).map((v, i) => {
        v = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b); // sort()로 하게되면 프로그래머스에서는 오류가 난다.
        return v;                                                                  // 이유는 sort는 기본적으로 문자열 비교이기 때문에
    });                                                                            // 9 와 10을 비교할 경우 9와 1이 비교가 된다.
    for (let i = 0; i < arr.length; i++) {                                         // 따라서 sort((a,b) => a-b) 라고 해줘야한다.
        let result = arr[i][commands[i][2] - 1];
        answer.push(result);
    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]], [5, 6, 3]))

// 2번째 방법
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        console.log(sPosition, ePosition, position);
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
                                        // [2,5,3]을 예시로 들면 fIndex 요소가 1 < fIndex < 4 작다 라는 것을 표현한 것이다. value에 적용하면 5 2 6 3
            .sort((a, b) => a - b)

        return newArray[position - 1]
    })
}