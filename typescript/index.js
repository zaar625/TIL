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
// --------------------6강 타입 확정하기 Narrowing & Assertion 
//Type이 아직 하나로 확정 되지 않았을 경우 Type Narrowing을 써야한다. 타입을 하나로 정해준다.
//즉 if문을 활용하여 타입을 걸러준다.
//위코드를 아래코드로 변경하자 
function fuc4(x) {
    if (typeof x === 'number') {
        console.log(x + 3);
        return x + 1;
    }
    else {
        return x + '1';
    }
}
fuc(3);
//Narrowing으로 판정해주는 문법들 
//typeof 변수 , 속성명in오브젝트자료, 인스턴스instance부모
//Narrowing 쓰기 싫다 => assertion : 타입 덮어 쓰기
function myfuc(x) {
    var array = [];
    array[0] = x; //x를 넘버타입으로 덮을게요. 
}
myfuc(123);
var animal;
var animal2; // type을 변수처럼 만드는 것을  type alias(별칭)
var animal3 = { name: 'lee', age: 20 };
var live = { region: 'seoul' };
live.region = 'busan';
var girl = {
    name: 'ember'
};
girl.name = 'ura'; // typescript 에러는 에디터 & 터미널에서만 존재한다. 실제 변환된 js파일에는 문제가 되지 않는다. 
// ------------------------ 8강  Literal Types
//더 엄격한 타입지정 가능 = "이런 문자만 들어올 수 있습니다.~"
var name4; //앞으로 name에는 123만 들어올 수 있다. 
//함수도 동일하게 적용가능하며 파라미터에 무조건 'hello'가 들어와야 한다. 
function fuc5(a) {
    return 1; //리턴도 정의가능하다. 
}
fuc5("hello"); //
//Literal type의 문제점 
var data = {
    name: 'kim'
};
function myfunc(a) {
    //'kim'이라는 타입만 들어올 수 있습니다. 0
    //'kim'이라는 자료만 들어올 수 있습니다. x
}
myfunc(data.name); //error data.name은 자료이다. 타입이 아니다. 타입은 string이다.
//위 문제점을 보완할 수 있는 방법.
var data2 = {
    name: 'lee'
};
(function () { return 10; }); // === () => 10
var fuc6 = function () {
    return 10;
}; //함수 표현식에만 타입지정이 가능하다. 
//obj 안에 함수 만들기
var user4 = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    }
};
user4.plusOne();
//---------------------------10강 타입스크립트로 HTML 변경과 조작할 때 주의점
var title = document.querySelector('#title');
title.innerHTML = '반가워요'; //유니온타입이다. 타입을 하나로 narrowing으로 해야한다.아래와 같다. 
//첫번째 방법.
if (title != null) {
    title.innerHTML = 'Hello';
}
//두번째 방법
if (title instanceof Element) { //Element 요소의 자식에 title이 있냐? ->true
    title.innerHTML = 'hehe';
}
//세번째 type assertion
var title2 = document.querySelector('#title'); //타입을 Element로 간주해주세요~ 100퍼 확신일때(너무 자주 사용하면 안되.)
if (title2 === null || title2 === void 0 ? void 0 : title2.innerHTML) { //?를 넣으면 1.제목에 innerHTML이 있으면 출력해주고 없으면 undefined 뱉어주세요.
    title2.innerHTML = 'haha';
}
var link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) { //이타입은 href, style,class 등을 사용할 수 있어요~ 라는 속성이 있기 때문에 정확한 속성을 알아야한다. 
    link.href = 'https://kakao.com';
}
var btn = document.querySelector('#button');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    //의미: btn에 이벤트리스너 가능하면 해주시고 아니면 undefined 뱉어주세요.
});
//-------------------- 13강 
var Person2 = /** @class */ (function () {
    function Person2(a) {
        this.name = a;
    }
    Person2.prototype.func2 = function (a) {
        console.log('hello' + a);
    };
    return Person2;
}()); //복제되는게 항상 오브젝트인데 리턴 타입지정할 이유는 없다.
var person01 = new Person2('hello');
Person2.prototype.func2 = function () { }; //프로토타입 지정
person01.func2('hi');
//---------------------------14강
var rec = { color: 'red', width: '100' };
//interface Square { color: string, width: number}
var student = { name: 'kim' };
var teacher = { name: 'lee', age: 20 };
//복사해달라는 의미가 아니라 둘다 만족하는 타입을 만들어 주세요랑 같다. 
//Type VS interface
//1. 타입은 중복선언 불가능하고, 인터페이는 중복선언 가능하다. 인터페이스에 중복선언을 할경우 중복된 것들이 자동으로 합쳐진다.
//2.인터페이스의 장점: 외부 라이브러리같은 경우 인터페이스가 많다. ->커스터마이징이 쉽다. 속성을 추가 가능
//다른 사람이 이용많이 할 것 같으면 object 타입 정할 때 interface 쓰셈.
