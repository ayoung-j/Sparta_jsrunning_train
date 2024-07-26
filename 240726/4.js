// 4. 배열 API 활용
// 1.
//배열 API map 활용
var arr = [10, 20, 30];
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
// 결과 값: [100, 200, 300]을 출력해주세요
let multiply = arr.map((n) => n * 10);
console.log(multiply); // [ 100, 200, 300 ]

// 2.
//배열 API filter 활용
var arr = [10, 22, 33];
// 5의 배수를 찾아 반환해주세요
// 결과값 [10]을 출력해주세요
let multiples = arr.filter((n) => n % 5 === 0);
console.log(multiples); // [ 10 ]

// 3.
const numbers = [5, 10, 15, 20, 25];
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
// 출력값 [20, 25]
let big = numbers.filter((n) => n > 15);
console.log(big); // [ 20, 25 ]

// 4.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요
let longLength = arr.filter((n) => n.length >= 4);
console.log(longLength); // ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"]

// 5.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요
let oddLength = arr.filter((n) => n.length % 2 !== 0);
console.log(oddLength); // [ 'mango' ]

// 6.
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// 오름차순으로 정렬하여 출력해주세요
let arrSort = arr.sort((a, b) => a - b);
console.log(arrSort); // [1, 1, 2, 3, 3, 4, 5, 5, 6, 9];

// 7.
var student = [
    { name: "이재상", age: 25 },
    { name: "정윤오", age: 30 },
    { name: "김준현", age: 12312 },
];
// age를 이용하여 내림차순으로 정렬하고 출력해주세요
let ageSort = [];
for (let i = 0; i < student.length; i++) {
    ageSort.push(student[i].age);
    ageSort.sort((a, b) => b - a);
}
console.log(ageSort); // [ 12312, 30, 25 ]

// 8.
var student = [
    { id: 1, name: "이재상" },
    { id: 2, name: null },
    { id: 3, name: "김준현" },
];
// 객체 배열에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요
let studentNull = student.some((student) => student.name === null);
console.log("name 속성이 null인 객체가 있는지 : ", studentNull); // true

// 9.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.
let overLength = arr.some((n) => n.length > 5);
console.log("길이가 5를 초과하는 요소가 있는지 : ", overLength); // true

// 10.
var arr = ["banana", "kiwi", "mango"];
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요
arr.splice(2, 0, "Cherry");
console.log(arr); // [ 'banana', 'kiwi', 'Cherry', 'mango' ]

// 11.
var arr = [1, 5, -3, 10, 0, 8];
// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요
let negativeReturn = arr.some((n) => n < 0);
console.log("음수가 하나라도 있는지", negativeReturn); // true

// 12.
var arr = [1, 5, -3, 10, 0, 8];
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요
let allNegativeReturn = arr.every((n) => n < 0);
console.log("모든 숫자가 음수인지", allNegativeReturn); // false
