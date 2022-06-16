//-------------------------------11강 class 키워드 알아보기

let nunu = {
    q:'consume',
    w:'snowball'
}

let garen = {
    q:'strike',
    w:'courage'
}

//이걸 백개 할 수는 없자나. class를 사용할 건데 오브젝트를 뽑아내는 기계이다. 
function Machine(a,b){
    this.q =a;
    this.w =b;
}
let nunu2 = new Machine(consume,snowball);
//es6문법
class Hero {
    constructor(a,b){
        this.q = a;
        this.w = b;
    }
}//부모
let hero = new Hero(consume, snowball);//자식(부모의 a,b를 물려받는다라고도 표현한다. -> 프로토타입방법도 가능하다.)

//-----------------12강 prototype 문법 짚어보기
//만약 console창에 Hero.prototype을 치면 {constructor: f}나온다.  프로토타입은 유전자라고 생각하자.
Hero.prototype.name='kim' //이와같이 적용하면 부모유전자에 kim을 넣는 것이다. 
//그러면 자식인 hero에서
hero.name //유전자를 받을 수 있다. 실제로는 hero를 출력하면 없지만. (hero가 name을 가지고 있지 않다면  hero 부모 유전자를 뒤진다.)
//<object에서 자료뽑을 때 일어나는 일> 1. 직접 자료를 가지고 있으면 그거 출력 2. 없으면 부모유전자까지 뒤짐. 3.없으면 부모의부모 유전자까지 디짐.=프로토타입 체인

let array = [4,2,1];
let array2 = new Array(4,2,1)
array.sort()//부모유전자에 sort() 유전자를 가지고 있다. 
//console에 Array.prototype을 쳐보자.

Array.prototype.func = function(){} //모든 어레이에  func이라는 유전자를 넣을거다.

//--------------------13강

class Person {
data = 0; //클래스 안에 변수를 저장할 수 있다. class 필드값.
}
console.log(person1.data); //필드값을 넣고 불러올수 있다. 
let person1 = new Person();
let person2 = new Person();