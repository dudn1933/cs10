//프로그래머스 카카오톡 크레인

const log = console.log;

function solution(board, moves) {
    var answer = 0;
    var basket = [];

    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1]) {
                if (basket[basket.length - 1] == board[j][moves[i] - 1]) {
                    basket.pop();
                    answer += 2;
                } else {
                    basket.push(board[j][moves[i] - 1]);
                }
                board[j][moves[i] - 1] = 0; // 배열을 push했기때문에 그 부분에 0을 채워줘야한다.
                break;
            }
        }
    }

    return answer;
}

log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]));