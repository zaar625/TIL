var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1강 함수 rest 파라미터, destructuring 할때 타입 지정
function func() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    //파라미터가 몇개가 들어올지 모르는 경우 rest파라미터를 사용한다. 
    console.log(a); // [1,2,3,4] 배열로 반환한다. 
}
func(1, 2, 3, 4);
//... 점세개 의미. 
//1. 함수 파라미터로 사용할 경우 rest parameter이다.
//2. 배열이나 객체 왼쪽에 쓰게 되면 괄호 벗겨준다. spread operator
//디스트럭쳐링
var arr = ['hello', 100]; //이 자료들을 변수로 빼서 쓰고 싶다면,
var a = arr[0];
var a2 = arr[1];
var _a = ['hello', 100], a3 = _a[0], a4 = _a[1];
var _b = { student2: true, age2: 20 }, student2 = _b.student2, age2 = _b.age2;
//함수일 경우 
var obj2 = { student2: true, age2: 20 };
function func1(a, b) {
    console.log(a, b);
}
func1(obj2.student2, obj2.age2);
//위 코드를 디스트럭쳐링으로 변경할 경우
function func2(_a) {
    var student2 = _a.student2, age2 = _a.age2;
    console.log(student2, age2);
}
func2(obj2);
//----------------------------2강 Narrowing 할 수 있는 방법 더 알아보기.
function func3(a) {
    if (a && typeof a === 'string') {
        //a가 undefined면 if문 실행 x 
        //a가 string이면 if 실행
    }
}
function func4(animal) {
    if ('swim' in animal) {
        animal.swim;
        //typeof는 배열인지 객체인지 넘버인지만을 알려준다. 속성이 있는지 확인하기 위해서는 위 코드처럼 '속성명' in 객체자료를 쓴다.속성이 다를때만!!
    }
}
//class 형태
var date = new Date();
if (date instanceof Date) {
}
//------------------3강 삼수에 사용하는 never 타입도 있긴하다.
function func5() {
    //never의 조건1. return 값이 없어야함. 조건2.endpoint가 없어야함. = 실은 둘다 비슷한 말인데,
    //함수에 return값을 안쓸경우 자동으로 return undefined를 반환한다. 
    throw new Error(); //에러를 강제로 낸다 -> 에러가 나면 코드실행이 중단. (끝나는것이 아님.)
    while (true) {
    }
}
//실제 코딩생황에서의 never 타입 쓰는 법 
// 대부분 쓸데없음 -> void로 쓰면 됨.
//코드를 이상하게 짤 경우 never가 나옴.
function func6(p) {
    if (typeof p == 'string') {
        console.log(p);
    }
    else {
        console.log(p); //파라미터가 string으로 들어오는데 else문이 있을 수가 있나? 
    }
}
붙;
//----------------- 4강 public, private 
var User2 = /** @class */ (function () {
    //public 일 경우모든 자식들이 이용가능,수정가능하다. (붙여도 안붙여도 된다.생략가능 )
    //private 일경우 class 안에서만 수정, 이용가능하다. 
    function User2(a) {
        this.name = a;
    }
    return User2;
}());
var user5 = new User2('a');
var User3 = /** @class */ (function () {
    function User3(a) {
        this.familyname = 'kim'; //실수로 패밀리네임을 외부에서 수정하지 못하게 하려면 private를 사용한다.  
        this.name = a + this.familyname; //필드값을 가져오려면 this를 써야한다. 
    }
    return User3;
}());
var user6 = new User3('민수');
//----------------- 5강 protect, static 키워드
var User6 = /** @class */ (function () {
    function User6() {
        this.x = 10;
    }
    return User6;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser;
}(User6));
//---------------------7강 import.export 그리고 namespace 
//---------------------8강 제네릭
function fuc7(x) {
    return x[0];
}
var ab = fuc7([4, 2]);
console.log(ab + 1);
var data23 = '{"name" : "dog", "age" : 1 }';
function 함수(x) {
    return JSON.parse(x);
}
var result = 함수(data23);
console.log(result);
//-------9강 tuple type
var mung = ['dog', true];
//튜플 안에 옵션표시 가능. ?
function fuc10() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
fuc10(1, 2, 3, 4, 5, 6);
var user10 = {
    name: 'kim',
    age: '20',
    location: 'seoul'
};
//11강 조건문으로 타입 만들기 & infer 
