var names = 'kim';
var object = { name: 'Lee' };
var object2 = { name: 'Lee' };
var name2 = 'Lee'; //유니온 타입
function func(x) {
    return x * 2;
}
var john = { name: 'kim' };
//class 문법
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
//-------------------- 3강 -----------------------
var names01 = 'lee';
var age = 6;
var foo = true;
var users = ['kim', 'park'];
var users2 = { mem: 'kim', mem2: 'park' };
//타입을 굳이 지정 안해도 타입스크립트는 유추해서 타입을 지정한다. 
// 4강 - 타입을 미리 정하기 애매할 때(uniontype, any, unknown)
var user = 123; //유니온 타입
var uses3 = [1, 2, 3, 'lee'];
var obj = { a: 123 };
var user2; // user 어떤 타입이든 허용한다. 하지만 any를 남발하게 되면 자바스크립트를 사용하는 이유가 없다. 쉴드를 해제
var user3; //any보다 좀 더 안전한데 의미는 비슷하다. 허용은 가능하지만, 쉴드는 쳐줌.
//ex: 안전한 이유
user3 = 123;
user3 = {};
var variance = user3; //error
// 5강 -함수에 타입 지정하는 법 & void 타입
function fuc(x) {
    return x * 2;
} //타입을 지정하지 않으면, 암묵적으로 any 타입이 지정된다. 
fuc(30);
function fuc2(x) {
    1 + 1;
} //리턴값이 없을때 즉, 리턴값이 없어요.!
fuc2(3); //타입지정된 파라미터는 필수로 넣어주어야 한다. 옵션일 경우에는 x?:number로 변경해준다. 
//여기서 주의할 점은 '변수?:number 처럼 옵션을 설정해 줄 경우 '변수: number | undefined 와 동일하다. 
function fuc3(x) {
    console.log(x + 3);
}
fuc2(2);
//+ 연산자는 왼쪽이 숫자나 string일때 연산이 가능하다. 즉, string + number(가능) , number + number (가능) 이외에는 불가능
//위처럼 유니온타입은 하나의 타입이기 때문에 에러가 나온다.
//위코드를 아래코드로 변경하자
function fuc4(x) {
    if (typeof x === 'number') {
        console.log(x + 3);
    }
}
fuc(3);
