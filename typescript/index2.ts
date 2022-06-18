//1강 함수 rest 파라미터, destructuring 할때 타입 지정
function func(...a:number[]){
//파라미터가 몇개가 들어올지 모르는 경우 rest파라미터를 사용한다. 
console.log(a) // [1,2,3,4] 배열로 반환한다. 
}
func(1,2,3,4)

//... 점세개 의미. 
//1. 함수 파라미터로 사용할 경우 rest parameter이다.
//2. 배열이나 객체 왼쪽에 쓰게 되면 괄호 벗겨준다. spread operator

//디스트럭쳐링

let arr = ['hello', 100] //이 자료들을 변수로 빼서 쓰고 싶다면,
let a = arr[0]
let a2 = arr[1]
let [a3, a4] = ['hello', 100]
let {student2, age2} = {student2: true, age2: 20}

//함수일 경우 
let obj2 =  {student2: true, age2: 20}
function func1(a,b){
    console.log(a,b);
}
func1(obj2.student2, obj2.age2)

//위 코드를 디스트럭쳐링으로 변경할 경우
function func2({student2,age2}){
    console.log(student2,age2)
} 
func2(obj2)

//----------------------------2강 Narrowing 할 수 있는 방법 더 알아보기.
function func3(a: string | undefined){
    if( a && typeof a ==='string'){
        //a가 undefined면 if문 실행 x 
        //a가 string이면 if 실행
    }
}
type Fish = {swim: string}
type Bird = {fly : string}

function func4(animal: Fish | Bird){
    if('swim' in animal){
        animal.swim
        //typeof는 배열인지 객체인지 넘버인지만을 알려준다. 속성이 있는지 확인하기 위해서는 위 코드처럼 '속성명' in 객체자료를 쓴다.속성이 다를때만!!
    }
}
//class 형태
let date = new Date()
if(date instanceof Date){

}

//------------------3강 삼수에 사용하는 never 타입도 있긴하다.
function func5():never {
    //never의 조건1. return 값이 없어야함. 조건2.endpoint가 없어야함. = 실은 둘다 비슷한 말인데,
    //함수에 return값을 안쓸경우 자동으로 return undefined를 반환한다. 
    throw new Error()//에러를 강제로 낸다 -> 에러가 나면 코드실행이 중단. (끝나는것이 아님.)
    while(true){

    }
}
//실제 코딩생황에서의 never 타입 쓰는 법 
// 대부분 쓸데없음 -> void로 쓰면 됨.
//코드를 이상하게 짤 경우 never가 나옴.

function func6(p:string){
    if(typeof p =='string'){
        console.log(p)
    }else {
        console.log(p) //파라미터가 string으로 들어오는데 else문이 있을 수가 있나? 
    }
}