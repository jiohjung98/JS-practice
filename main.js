const string1 = "Hello"
const string2 = 'Hello'
// 백틱(`): 보관용도(데이터 넣기)로 사용
// 템플릿 리터럴: 기호를 통해 데이터를 만드는 방식(백틱을 통해 문자데이터를 만드는 것)
const string3 = `Hello ${string1} ?!`

console.log(string3)

// 타입
const number = -123.1234
const pi = 3.14

console.log(typeof(number + undefined))
console.log(typeof pi)


// 부동소수점 오류 
const a = 0.1
const b = 0.2

console.log(a+b) // 0.300...4 
// toFixed(a): 소수점 a까지만 나타내줌. 하지만 숫자데이터를 문자데이터로 바꿈
console.log((a+b).toFixed(1)) // 0.3
// Number: 숫자로 바꿔줌
console.log(Number((a+b).toFixed(1)))


// Boolean
const c = true  
const d = false

if(a) {
    console.log("hello")
}


// null
let age = null // 명시적인 표현

console.log(age)

// 1초 뒤에 숫자 넣어줌
setTimeout(function () {
    age = 85
    console.log(age)
},1000)


// undefined
const User = {
    name: 's',
    age: 26
}

console.log(User.name)
console.log(User.age)
console.log(User.email) // 출력: undefined -값이 할당되지 않은 암시적인 상태


// 배열 데이터
const fruits = new Array("Apple", "Banana", "Cherry")
const fruits2 = ["Apple", "Banana", "Cherry"] // array literal

console.log(fruits)
console.log(fruits2)
console.log(fruits[1])
console.log(fruits.length)
console.log(fruits[fruits.length-1])


// Object(객체) - 생성자 함수 형태
// key(속성)&value(값)으로 구성
const User2 = new Object()
User2.name = "jioh"
User2.age = 26

console.log(User2)


// Object(객체) - function
function User3() {
    this.name = "jiohh"
    this.age = 25
}

console.log(User3) 


// Object(객체) - {} literal 방식
const User4 = {
    name: "jiohh",
    age: 27,
    age: 22
}

console.log(User4.name) // 점 표기법
console.log(User4['name'])  // 대괄호 표기법
console.log(User4) // 객체 데이터에서 키는 고유하고 순서가 없다



const UserA = {
    name: "Ais",
    age: 27,
}

const UserB = {
    name: "Bis",
    age: 26,
    parent: UserA
}

console.log(UserB)
console.log(UserB.parent.name)
console.log(UserB['parent']['name'])

const Users = [UserA, UserB]

console.log(Users)
console.log(Users[0])


// function
function hello() {
    console.log("Hello")
}

hello() // Call(호출)

function getNumber() {
    return 123
}

console.log(getNumber) // 함수자체 리턴
console.log(getNumber()) // 리턴값 리턴
console.log(typeof getNumber) // function
console.log(typeof getNumber()) // number

// 익명함수- 함수데이터를 변수에 담아 씀
const getNumber2 = function() {
    return 456
}

console.log(typeof getNumber2)
console.log(typeof getNumber2())


const a1 = function() {
    console.log("A")
}

const b1 = function(c) {
    console.log(c)
    c()
}

// b1(789) // 123이라는 데이터는 b1 함수의 인수로 들어가 매개변수(c)가 받음
b1(a1)


// 형 변환(Type Conversion)
const a2 = 1 // Number
const b2 = '1' // String

console.log(a2 === b2) // 일치 연산자- false
console.log(a2 == b2) // 동등 연산자(형변환)- true

const a3 = 0
const b3 = false

console.log(a3 == b3) // true 
// 동등연산자를 쓰면 예상치 못한 답이 나올 수 있으므로 주의


// 참과 거짓(Truthy & Falsy)

//  false인 것 
// 1) false
// 2) 0
// 3) null
// 4) undefined
// 5) NaN(NotaNumber)
// 6) ''(빈문자열)
// 7) 0n(BigInt)
if (true) {
    console.log("참!")
}

if (false) {
    console.log("거짓~")
}

if (123) {
    console.log("참2!")
}

if (0) {
    console.log("참일까요?") // false
}

if ('0') {
    console.log("참이네요")
}


const fruits3 = ['apple', 'banana']

if (fruits3) {
    console.log("Item in array")
}

const fruits4 = []

if (fruits4.length) {
    console.log("Item not in array")
}


// 데이터타입 확인(typeof)
console.log(typeof 'hello' == 'string')
console.log(typeof 123 == 'number')
console.log(typeof false === 'boolean')
console.log(typeof undefined === 'undefined')

// null, 배열, 객체데이터는 모두 object - 구분안됨
console.log(typeof null === 'object')
console.log(typeof [] === 'object')
console.log(typeof {} === 'object')

console.log([].constructor == Array) 
console.log({}.constructor == Object)
// null은 constructor 사용할 수 없음
// console.log(null.constructor)
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null')

console.log(typeof function () {} === 'function')


// 함수만들어서 사용해보기
function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType("Hello") === 'String')
console.log(checkType(null))
console.log(checkType([]))
console.log(checkType({}))




