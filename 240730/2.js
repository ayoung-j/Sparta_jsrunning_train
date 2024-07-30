// 2. Async / Await 다뤄보기
// 1번 문제에서 다루었던 비동기 처리를 async, await 키워드를 사용하여 코드를 수정해서 작성해주세요.
const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function promise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === API_URL) {
                resolve("성공");
            } else {
                reject("실패");
            }
        }, 3000);
    });
}

async function getData(url) {
    try {
        const result = await promise(url);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getData(API_URL); // 성공
getData(WRONG_URL); // 실패
