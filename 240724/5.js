// 5. 점수 수정하기 [선택 문제]
const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];
let newScores = [];

function calculator(a, operator, b) {
    if (operator == "+") {
        return a + b;
    } else if (operator == "-") {
        return a - b;
    } else if (operator == "*") {
        return a * b;
    } else if (operator == "/") {
        return a / b;
    }
}

function add(scores) {
    for (let i = 0; i < scores.length; i++) {
        newScores.push(calculator(scores[i], "+", 3));
    }
}
add(scores);

console.log(newScores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]
