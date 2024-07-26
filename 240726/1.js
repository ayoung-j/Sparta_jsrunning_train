// 1. 얕은 복사
// 해당 문제를 출력해 보고 출력 값을 설명해주세요
// 1.
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1); // [ 10, 2, 3 ]
console.log(arr1 === arr2); // true

// 2.
const obj1 = { a: 1, b: 2, c: 3 };
// obj1을 얕은 복사하는 코드로 작성해주세요
const obj2 = obj1;
/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */
obj2.d = 4;

/* 해당값 obj1, obj2의 값을 출력해주세요 */
console.log(obj1); // { a: 1, b: 2, c: 3, d: 4 }
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }

// obj1과 obj2는 같은 주소를 가지고 있기 때문에 obj2의 값을 변경했을때 obj1의 값도 함께 변경이 됩니다.
