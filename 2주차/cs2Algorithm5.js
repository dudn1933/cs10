var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    } else if (strs.length === 1) {
        return strs[0];
    } else {
        let result = [];
        const save = strs[0];

        // 3중 for문으로 각각 다 비교가 가능한지 구현해보기.
        for (let i = 0; i < save.length; i++) {
            let count = 0;
            for (let j = 1; j < strs.length; j++) {
                if (save[i] !== strs[j][i]) {
                    count = 1;
                }
            }
            if (count === 0) {
                result.push(save[i]);
            } else { break };
        }
        return result.join("");
    }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));