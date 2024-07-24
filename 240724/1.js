// 1. 빈칸 채우기 문제
// 1. 
let uninitialized;
console.log(uninitialized); // 결과값 < 빈칸 > undefined : 변수 할당을 해주지 않았기 때문에 빈값이 반환됩니다.


// 2. 
// < 빈칸 > apple = "사과";
// const apple = "사과";
// apple = "바나나"; // TypeError: Assignment to constant variable : 상수는 재할당을 할 수 없습니다.


// 3. 
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 빈칸 > 19 : 배열은 0부터 시작하므로 4번째에 있는 19가 3에 해당됩니다.


// 4. 
let mySchedule = "";
console.log(mySchedule || false); // < 빈칸 > false : 둘 다 false이므로 false가 반환됩니다.
console.log(!!mySchedule); // < 빈칸 > false : 빈 값이므로 정확한 논리결과 false을 반환합니다.