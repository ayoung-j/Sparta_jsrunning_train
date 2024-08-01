// 2. 스코프
// 1. 출력값과 출력되는 값의 이유를 설명해주세요
var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName(); // yuno2 → 변수를 찾을 때 가까운 스코프에서 먼저 찾으므로 yuno2가 반환됩니다.


// 2. 출력값과 출력되는 값의 이유를 설명해주세요
function test() {
    var x = 1;

    if(true){
        var x = 2;
    }

    console.log(x);
}

test(); // 2 → var로 선언한 변수는 if문 안에서도 동작을 합니다.
// (블록스코프, 함수스코프 공부할 것)

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요
const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`); // 화살표 함수 : yuno → 화살표 함수는 this바인딩을 하지 않고, 접근하고자 하면 스코프체인상 가장 가까운 this에 접근하게 됩니다.
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`); // 일반 함수 : undefined → 호출시점에 있는 this를 바인딩합니다. 호출시점에 name이 없으므로 undefined가 반환됩니다.
        }
        arrow();
        normal();
    }
};

nameObj.method();
