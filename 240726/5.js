// 5. forEach로 변환해보기
//해당 문제를 forEach로 변경하여 풀어주세요
// 1.
var arr = [10, 20, 30];
let arrTen = [];
// 해당 로직을 작성하세요
arr.forEach(function (item) {
    arrTen.push(item * 10);
});
// 결과 값: [100, 200, 300] 출력해주세요
console.log(arrTen); // [ 100, 200, 300 ]

// 2.
var arr = [10, 22, 33];
let arrFive = [];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
arr.forEach(function (item) {
    if (item % 5 === 0) {
        arrFive.push(item);
    }
});
// 결과값 [10]
console.log(arrFive); // [ 10 ]
