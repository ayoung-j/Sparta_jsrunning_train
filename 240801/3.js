// 3.this
// 1. <빈칸>을 작성해주세요
const obj1 = {
  value :20,
  getValue(){
    //   < 빈칸 >
    return this.value;
  }
}
// console.log( < 빈칸 > ) ; //  출력값 20
console.log(obj1.getValue()) ; //  출력값 20


// 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
const obj2 = {
    method : function(){
        console.log('첫번째 this : ',this);

        const innerMethod = () =>{
            setTimeout(function(){
                console.log('두번째 this : ' , this); 
            });
        }
        innerMethod();
    }
}

obj2.method();

// 첫번째 this :  {method: ƒ} → 메서드로서의 호출이기 때문에 obj2가 반환됩니다.
// 두번째 this :  Window → 화살표 함수는 this를 바인딩하지 않기 때문에 전역객체를 반환합니다.



