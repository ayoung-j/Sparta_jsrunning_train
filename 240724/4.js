// 4. 계산기 문제
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

calculator(3, "+", 6); // 결과값 9
calculator(11, "-", 6); // 결과값 5
calculator(6, "*", 3); // 결과값 18
calculator(15, "/", 3); // 결과값 5
