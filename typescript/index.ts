let names: string = 'kim';

let object:{name : string} = {name : 'Lee' }
let object2:Object = {name : 'Lee' }

let name2:string | number = 'Lee' //유니온 타입

//타입이 많다?->변수로 지정해라
type Name = string | number


function func(x: number):number {
    return x*2
}

type Member = {
    name: string,
} // 해당 객체에 타입지정 할 것이 너무 많다?
type Member2 = {
    [key:string] : string; // 글자로 된 모든 obj 속성의 타입은 string이다. 
}


let john : Member ={ name : 'kim'}

//class 문법
class User {
    name:string;
    constructor(name:string){  
        this.name = name;
    }
}

//-------------------- 3강 -----------------------
let names01:string = 'lee';
let age:number = 6;
let foo:boolean = true;
let users:string[] = ['kim', 'park']
let users2:{mem: string, mem2: string} = {mem: 'kim', mem2: 'park'}
//타입을 굳이 지정 안해도 타입스크립트는 유추해서 타입을 지정한다. 

// 4강 - 타입을 미리 정하기 애매할 때(uniontype, any, unknown)
let user:(string | number | boolean) = 123; //유니온 타입
let uses3 :(number | string)[]=[1,2,3,'lee'];
let obj:{a:string | number} = {a: 123}; 
let user2:any;// user 어떤 타입이든 허용한다. 하지만 any를 남발하게 되면 자바스크립트를 사용하는 이유가 없다. 쉴드를 해제

let user3:unknown; //any보다 좀 더 안전한데 의미는 비슷하다. 허용은 가능하지만, 쉴드는 쳐줌.
//ex: 안전한 이유
user3 = 123;
user3 = {};
let variance : string = user3;//error

// 5강 -함수에 타입 지정하는 법 & void 타입

function fuc(x: number):number {
    return x * 2;
}//타입을 지정하지 않으면, 암묵적으로 any 타입이 지정된다. 
fuc(30);


function fuc2(x: number):void{
    1+1
}//리턴값이 없을때 즉, 리턴값이 없어요.!
fuc2(3);//타입지정된 파라미터는 필수로 넣어주어야 한다. 옵션일 경우에는 x?:number로 변경해준다. 
//여기서 주의할 점은 '변수?:number 처럼 옵션을 설정해 줄 경우 '변수: number | undefined 와 동일하다. 


function fuc3(x:number | string):void{
    console.log(x + 3);
}
fuc2(2)
//+ 연산자는 왼쪽이 숫자나 string일때 연산이 가능하다. 즉, string + number(가능) , number + number (가능) 이외에는 불가능
//위처럼 유니온타입은 하나의 타입이기 때문에 에러가 나온다.



// --------------------6강 타입 확정하기 Narrowing & Assertion 
//Type이 아직 하나로 확정 되지 않았을 경우 Type Narrowing을 써야한다. 타입을 하나로 정해준다.
//즉 if문을 활용하여 타입을 걸러준다.
//위코드를 아래코드로 변경하자 
function fuc4(x:number | string){
    if (typeof x === 'number' ){
        console.log(x + 3 )
        return x + 1;
    } else {
        return x + '1'
    }
}
fuc(3)

//Narrowing으로 판정해주는 문법들 
//typeof 변수 , 속성명in오브젝트자료, 인스턴스instance부모

//Narrowing 쓰기 싫다 => assertion : 타입 덮어 쓰기
function myfuc(x:number | string){
    let array :number [] = [];
    array[0] = x as number;//x를 넘버타입으로 덮을게요. 
}
myfuc(123);
//assertion 용도
//1. Narrowing할때 사용한다. 2.무슨 타입이 들어올지 100% 확신할 때 사용한다. 

// 7강 - 타입도 변수에 담아 쓰자. Type 키워드.
type Animal = string | number | undefined;
let animal :string | number | undefined;
let animal2 : Animal; // type을 변수처럼 만드는 것을  type alias(별칭)

type Animal3 = {name : string, age : number} //작명 관습 : 영어 대문자를 사용하며 Type을 붙여주는것이 관습이긴 함
let animal3: Animal3 = {name: 'lee', age: 20}

const live = { region: 'seoul'}
live.region = 'busan' 
// const 변수로 설정한 객체의 내부 정보를 변경할 수 있는데 typescript를 이용하면 수정불가능하게 할 수 있다. 아래 코드를 보자. 

type GirlFriend = {
    readonly name: string; //읽기 전용. 
}
const girl:GirlFriend = {
    name: 'ember'
}
girl.name = 'ura' // typescript 에러는 에디터 & 터미널에서만 존재한다. 실제 변환된 js파일에는 문제가 되지 않는다. 


type Name1 = string;
type Age = number;
type Person = Name | Age // type 변수 union type으로 합치기 가능.

type PositionX= {x : number };//Type변수 재정의 불가능. 
type PositionY= {y : number };

type NewType = PositionX & PositionY //= {x: number, y: number}과 동일하게 된다, &연산자로 obj 타입 합치기. (=extend한다.)

// ------------------------ 8강  Literal Types

//더 엄격한 타입지정 가능 = "이런 문자만 들어올 수 있습니다.~"
let name4 : 123; //앞으로 name에는 123만 들어올 수 있다. 
//함수도 동일하게 적용가능하며 파라미터에 무조건 'hello'가 들어와야 한다. 
function fuc5(a:'hello'): 1|0{
    return 1 //리턴도 정의가능하다. 
}
fuc5("hello")//

//Literal type의 문제점 
var data = {
    name : 'kim'
}
function myfunc ( a: 'kim' ){
//'kim'이라는 타입만 들어올 수 있습니다. 0
//'kim'이라는 자료만 들어올 수 있습니다. x
}
myfunc(data.name) //error data.name은 자료이다. 타입이 아니다. 타입은 string이다.