// 3. PromiseAll 다뤄보기 (빈칸 채우기)
// 세 개의 setTimeout 비동기 함수를 각각 직렬, 병렬로 호출하는 코드입니다.
// 아래의 코드를 보고 < 빈칸 > 부분을 각각 채워주시고, 그렇게 생각하는 이유도 내용으로 적어주세요. (총 빈칸 3개)

function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 Complete");
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2 Complete");
        }, 2000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 3 Complete");
        }, 3000);
    });
}

async function runTasksSequential() {
    console.time("Sequential");
    try {
        const result1 = await task1();
        console.log(result1);
        const result2 = await task2();
        console.log(result2);
        const result3 = await task3();
        console.log(result3);
    } catch (error) {
        console.error("Error:", error);
    }
    console.timeEnd("Sequential");
    // 예상되는 대략적인 시간과 그 이유 < 빈칸 1 >
    // 예상되는 대략적인 시간: 6초
    // 1초 후 task1이 실행되고, 2초 후 task2가 실행되고, 3초 후 task3가 실행됩니다. 그러므로 총 6초가 걸립니다.
    // task1(1초) + task2(2초) + task3(3초) = 6초
}

async function runTasksParallel() {
    console.time("Parallel");
    try {
        // 병렬로 promise들을 한 번에 처리하는 코드
        // < 빈칸 2 >
        const results = await Promise.all([task1(), task2(), task3()]);
        results.forEach((result) => console.log(result));
    } catch (error) {
        console.error("Error:", error);
    }
    console.timeEnd("Parallel");
    // 예상되는 대략적인 시간과 그 이유 < 빈칸 3 >
    // 예상되는 대략적인 시간 : 3초
    // task1, task2, task3가 한번에 작동되기 때문에 3개의 task 중 제일 긴 초인 3초가 걸립니다.
}

// 함수 호출
runTasksSequential().then(() => runTasksParallel());
