//객체 리터럴
const circle = {
    radius: 5,
    getDiameter(){
        return 2 * this.radius //this는 메서드를 호출한 객체를 가리킨다. (circle)
    }
}

//생성자 함수
function Circle(radius){
    this.radius = radius;//  생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다. 
}
const circle2 = new Circle(5);

console.log (this); // 전역에서 this는 전역 객체 window를 가리킨다. 

function person(name) {
    console.log(this);// 일반 함수 내부에서 this는 전역객체 window를 가리킨다.
}

const person2 = {
    name: "Lee",
    getName() {
        console.log(this);//메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다. {name:"Lee", getName:f}
    }
}

function Person(name) {
    this.name = name ;//생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다. 
    console.log(this)//Person {name: "Lee"}
}
const  me = new Person('Lee')

// var value = 1; 

// const obj = {
//     value:100,
//     foo() {
//         console.log("Hello", this) //{value: 100, foo: f}
        
//         // 콜백 함수 내부의 this에는 전역 객체가 바인딩 된다. 
//         setTimeout(function(){
//             console.log(this)//window
//             console.log(this.value); //1
//         }, 100)
//     }
// } 

var value = 1; 

const obj = {
    value:100,
    foo() {
        //this 바인팅(obj)을 변수 that에 할당한다.
        const that = this;
        
        // 콜백 함수 내부에서 this 대신 that을 참조한다. 
        setTimeout(function(){
            console.log(this)//obj{...}
            console.log(this.value); //100
        }, 100)
    }
} 