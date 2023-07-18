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


// 산술(Arithmetic)
// 연산자(기호)와 피연산자
console.log(1+2)
console.log(5-7)
console.log(3*4)
console.log(10/2)
console.log(7%5)

function isEven(num) {
    return num % 2 === 0
}

console.log(isEven(3))
console.log(isEven(12))



// 할당(Assignment)
// const: 재할당 x, let: 재할당 o

// const a4 = 3
// a4 = a + 2 
let a4 = 3
a4 += 2

console.log(a4)


// 증감연산자(Increment * Decrement)
let a5 = 3
let a6 = 6
let a7 = 9

console.log(a5++) // 3
console.log(a5) // 4

console.log(++a6) // 7
console.log(a6) // 7

console.log(--a7) // 8
a7 -= 1
console.log(a7) // 7


// 부정연산자
console.log(!true)
console.log(!false)

console.log(!0)
console.log(!!0)
console.log(!null)
console.log(!undefined)
console.log(!NaN)
console.log(!'')

console.log(!{})
console.log(![])


// 비교
const a8 = 1
const b4 = 3
console.log(a == b) // false(동등연산자)
console.log(a != b) // true

console.log(a === b) // false(일치연산자)
console.log(a !== b) // true

console.log(a > b)
console.log(a <= b)
 

// 논리(AND, OR)
const a9 = true
const b5 = false

if (a9&&b5) {
    console.log("모두 참")
}

if (a9 || b5) {
    console.log("하나 이상이 참")
}

// and- 왼쪽부터 확인해서 먼저 만나는 거짓 데이터 반환
console.log(true && false) // false
console.log(1 && 0) // 0
console.log(1 && 2 && 0) // 0
console.log("A" && 'B' && 'C') // 다 참이면 마지막 데이터 반환

// or- 왼쪽부터 확인해서 제일 먼저만나는 트루 데이터 반환
console.log(true || false)
console.log(0 || 1) // 1 
console.log(false || 0 || {}) // {}
console.log(false | 0 || NaN) // 다 거짓이면 마지막 데이터 반환


// Nullish 병합(??)- null, undefined 제외하고 모든 데이터를 만나면 그 데이터 만날 때 반환
const n = 0
const num1 = n || 7

console.log(num1) // 7

const num2 = n ?? 7

console.log(num2) // 0 
console.log(null ?? 1) // 1
console.log(undefined ?? 2) // 2
console.log(null ?? undefined) // undefined - 마지막 데이터 반환
console.log(null ?? 1 ?? 2) // 1
console.log(false ?? 1 ?? 2) // false
console.log(0 ?? 1 ?? 2) // 0


// 삼항연산자 - 조건 ? 참: 거짓
const a10 = 1

if (a<2) {
    console.log("참")
} else {
    console.log("거짓,,,")
}

console.log(a < 2 ? "참": "거짓...")


function getAlert(message) {
    return message ? message: "메시지 존재x"
}

console.log(getAlert("안녕하세요")) // 안녕하세요
console.log(getAlert()) // 메시지 존재x



// 전개 연산자 - 대괄호 기호 증발
const a11 = [1,2,3]
const b6 = [4,5,6]

console.log(a11)
console.log(...a11) // 1 2 3 

// concat - 병합 메소드
const c2 = a11.concat(b6)
console.log(c2)

const d2 = [a11, b6]
console.log(d2)

const d3 = [...a11, ...b6]
console.log(d3) // [1, 2, 3, 4, 5, 6]


// assign
const a12 = {x:1, y:2}
const b7 = {y:3, z:4}
const c3 = Object.assign({}, a12, b7)

console.log(c3)

const d4 = {a12,b7}
console.log(d4)

const d5 = {...a12, ...b7}
console.log(d5)

function fn(x, y, z) {
    console.log(x,y,z) // 1 2 3
}

fn(1,2,3)

const a13 = [1,2,3]
fn(a13[0], a13[1], a13[2]) // 1 2 3
fn(...a13) // 1 2 3
// 전개연산자(...)는 배열데이터의 대괄호, 객체데이터의 중괄호를 날려버린다!


// 구조 분해 할당
const arr = [1,2,3]
const a14 = arr[0]
const b8 = arr[1]
const c4 = arr[2]

console.log(a14, b8, c4) // 1 2 3

// 구조를 분해해서 각각의 변수에 재할당하는 것
const [a15, b9, c5] = arr
console.log(a15, b9, c5) // 1 2 3


let b10 = 0
let c6 = 0
const arr2= [1,2,3]
;[, b10, c6] = arr2

console.log(b10, c6)


const arr3 = [1,2,3]
const [a16, rest] = arr3

console.log(a16, rest) // 1 2


const arr4 = [1,2,3]
const [a17, ...rest2] = arr4

console.log(a17, rest2) // 1 [2, 3]


const obj = {
    a19: 1,
    b20: 2,
    c: 3,
    x: 7
}

// 객체 구조 분해 사용 x
const a18 = obj.a
console.log(a18)

// 객체 구조 분해 사용 o
const { a19, b20 } = obj

console.log(a19, b20) // 1 2

// 객체 구조 분해와 배열 차이
// 배열: 데이터가 대괄호안에서 나열
// 객체 구조 분해: 속성 이름으로 바로 데이터 찾을 수 있음

const {x = 4} = obj // x값이 없으면 x=4. 있으면 기본값 사용
console.log(x) // 7


// 변수 이름 바꾸기
const {a19: newName, y10: ten = 10 } = obj
console.log(newName, ten) // 1 10


// 객체 구조 분해에 전개연산자 사용
const obj2 = {
    a21: 1,
    b21: 2,
    c21: 3,
    x21: 7,
    y21: 100
}

const {c21, ...rest21} = obj2
console.log(c21, rest21)



// 선택적 체이닝
const user5 = undefined
console.log(user5?.name) 

const userC = {
    name: "jioh",
    age: 24,
    address: {
        country: "korea",
        city: "seoul"
    }
}

const userD = {
    name: "Neo",
    age: 22
}

function getCity(user) {
    return user.address?.city || "주소x"
}

console.log(getCity(userC))
console.log(getCity(userD)) // typeError방지 
