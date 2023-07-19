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


// if 조건문
// 기본적으로 함수는 리턴값이 없으면 undefined 반환
function isPositive(number) {
    if (number > 0) {
        return '양수'
    } else {
        return '음수'
    }
}

console.log(isPositive(1))
console.log(isPositive(-2))


// switch 조건문
function price(fruit) {
    let p
    switch(fruit) {
        case 'apple':
            p = 1000
        case 'banana':
            return p = 1500
        case 'cherry':
            p = 2000
        default:
            return 0
    }
    return p
}

console.log(price('apple'))
console.log(price('hello'))


// for 반복문
// for(초기화; 조건; 증감) {
//     반복 실행 코드
// }
for (let i = 0; i < 10; i++) {
    console.log(i)
}

for (let i = 9; i >- 1; i--){
    if (i<4) {
        break
    }
    if (i % 2 === 0) {
        continue // 현재반복만 종료하고 다음반복으로 넘어감
    }
    console.log(i)
}


// for of 반복문(배열)
const fruits5 = ['apple', 'banana', 'cherry']
for (let i = 0; i < fruits5.length; i++) {
    console.log(fruits5[i])
}

for (const fruit of fruits5) {
    console.log(fruit) // apple banana cherry
}

const users1 = [
    {
        name: "jioh",
        age: 26
    },
    {
        name: "neo",
        age: 30
    }
]

for (const user of users1) {
    console.log(user)
}


// for in 반복문(객체 데이터)
const users2 = {
    name: 'jioh',
    age: 26,
    isValid: true,
    email: 'ckaquz98@naver.com'
}

for (const key in users2) {
    console.log(key,':' , users2[key])
}


// while 반복문 - 무한반복이 될 수 있으므로 조심
let n1 = 0
while (n1 < 4) {
    console.log(n1)
    n1++
}


// Do while 반복문 - 조건을 먼저 보지 않고 일단 do {} 부분을 실행 
let n2 = 0
// while(n2) {
//     console.log // 출력값 x- false 이므로
// }

do {
    console.log(n2)
} while(n2)

do {
    console.log(n2)
    n2++
} while(n2 < 4)


// 함수
// 함수 선언문
// function hello() {}

// 함수 표현식
// const hello = function () {}

// 호이스팅- 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
hello2()

function hello2() {
    console.log("hello~")
}
// -> 함수 선언문의 경우 선언이 호출보다 아래줄에 적혀있는데도 에러없이 동작함(호이스팅). 함수 표현식은 불가

// hello3()

// const hello3 = function() {
//     console.log("Hello!~")
// }
// -> 함수 표현식은 호출이 먼저나오면 에러 발생


// 반환 및 종료
function hello3() {
    return 'hihi~'
    // return 키워드는 데이터 반환뿐 아니라 함수 동작 멈춤 기능 제공- return 다음에 코드써도 동작 x
    console.log("이 글씨는 안보여요")
}

console.log(hello3())


function plus(num) {
    return num + 1
}

console.log(plus(2)) // 3
console.log(plus()) // NaN


function plus2(num) {
    if (typeof num !== 'number') {
        console.log('숫자 입력해라')
        return 0
    }
    return num + 1
}

console.log(plus2(2)) // 3
console.log(plus2()) // NaN


// 매개변수 패턴
function sum(a, b) {
    return a + b;

}

console.log(sum(1,2)) // 3
console.log(sum(7)) // NaN(7 + undefined)

// 1. 기본값 사용- 아무것도 들어오지 않았을 때 이 값 사용
function sum2(a, b=1) {
    return a + b;

}

console.log(sum2(1,2)) // 3
console.log(sum2(7)) // 8(7+1)


// 2. 객체 구조 분해 할당
const users3 = {
    name: 'jioh',
    age: 25
}

// 객체 데이터 자체(name)를 매개변수 위치에서 구조 분해
function getName({name}) {
    return name
}

console.log(getName(users3))
// -> getName이 호출될 때 들어가는건 객체데이터(users3)이고 그 객체데이터를 함수가 받음.
// 근데 별도의 매개변수 이름은 지정되어있지 않고 받은 객체데이터를 구조 분해해서 name이라는 속성만 꺼내서 바로 리턴
// 훨씬 더 문법이 간단해지는 장점

// 이메일 없을 경우 기본값 지정
function getEmail({email = '이메일 존재 x'}) {
    return email
}

console.log(getEmail(users3)) // 이메일 존재 x


// 3. 배열 구조 분해 할당
const fruits6 = ['apple', 'banana', 'cherry']

function getSecondItem(array) {
    return array[1]
}

console.log(getSecondItem(fruits6)) // banana

// 배열 구조 분해 실행
function getSecondItem2([, b]) {
    return b
}

console.log(getSecondItem(fruits6)) // banana

const numbers = [1,2,3,4,5,6,7]
console.log(getSecondItem(numbers))

// 4. 나머지 매개변수 - 전개연산자 사용
    // reduce - 배열데이터를 다루는 메소드
    // reduce메소드는 배열데이터의 아이템 개수만큼 콜백함수 실행
    // 초기에 acc는 초기값 0. cur은 첫 데이터 1이 들어감
    // 반복시에 acc에는 1이 들어가고 cur에는 2가 들어감 -> return 3
    // arguments: 유사배열(배열데이터는x)- reduce 매소드 사용할 수 없음(활용도 떨어짐)
function sum3(...rest) {
    console.log(rest)
    console.log(arguments)
    return rest.reduce(function(acc, cur) {
        return acc + cur
    }, 0)
}

console.log(sum3(1,2))
console.log(sum3(1,2,3,4))



// 화살표 함수(function 사용하지않음- 단순하게 쓸 수 있음). 자주쓰니까 잘 알아두자
// -> 화살표함수는 함수 표현(선언x): 할당연산자를 사용하므로
// const sum = () => {}

// 일반 함수
function sum4(a,b) {
    return a+b
}

console.log(sum4(1,2)) // 3

// 화살표 함수(중괄호, return 생략 가능)- 간단하게 한 줄로 작성 가능
const sum5 = (a,b) => a+b

console.log(sum5(4,5)) // 9

const a22 = () => {}
const b22 = x => {}  // 매개변수가 1개이면 () 생략 가능
const c22 = x =>  x*x
const d22 = () => {return {a:1}}
const e22 = () => {a:1} // 잘못된 식- {a:1}이 데이터인지 확인 불가능
const f22 = () => ({a:1}) // 객체데이터는 다음과 같이 소괄호()로 묶어줘야함
const g22 = () => [1,2,3] // 배열데이터는 소괄호로 묶어줄 필요 x


// 즉시 실행함수(IIFE, Immediately-Invoked Function Expression)
const a23 = 7
const double = () => {
    console.log(a23 * 2)
}

double(a23) // ;붙여야 끝났다고 인식

// 즉시 실행
// ;붙여야 위에 코드 끝났다고 인식
;(() => {
    console.log(a23 * 2)
})()

;(() => {})()       // (F)()

// 일반함수 즉시실행 4가지
;(function () {console.log(a23 * 3)})() // (F)()
;(function () {console.log(a23 * 4)}()) // (F())
;!function () {console.log(a23 * 5)}()  // !F()
;+function () {console.log(a23 * 6)}()  // +F()

// 화살표 함수 즉시실행
// 두 번째 소괄호()로 들어가는 데이터를 즉시실행 함수 매개변수에 전달
// 전역데이터 이름을 간소화할 수 있음
// 코드의 난독화가 있음
;((a,b) => {
    console.log(a.innerWidth)
    console.log(b.body)
})(window, document)


// 콜백(하나의 함수)- 함수가 실행될 때 인수로 들어가는 또 다른 함수
// a,b 모두 하나의 함수. a를 실행할 때 b라는 함수 자체를 인수로 넣어줌
// 그 함수 데이터가 callback이라는 이름의 매개변수로 들어가지고 callback은 하나의 함수데이터이므로 소괄호를 열어서 실행 가능


const a24 = callback => {
    console.log('a')
    callback()
}
const b24 = () => {
    console.log('b')
}

a24(b24) // a함수가 호출될 때 b라는 함수데이터가 인수로 들어감. b: 콜백함수

const sum6 = (a,b,c) => {
    setTimeout(() => {
        c(a+b)
    }, 1000)
}

// sum6함수가 호출될 때 첫 번째, 두번째 인수는 숫자데이터가 들어감(1,2는 a,b라는 매개변수가 받음)
// 세 번째 임수로는 하나의 함수데이터가 들어감. 그것을 c라는 매개변수가 받음
// sum6함수 내의 setTimeout함수를 통해 1초 뒤에 해당하는 코드를 실행
// c라는 함수는 sum6가 호출될 때 만들어진 3번째 인수에 해당하는 함수이므로 a+b를 value라는 매개변수로 받아 출력
sum6(1,2, value => {
    console.log(value)
})


// 콜백 이미지 로드
// https://www.gstatic.com/webp/gallery/4.jpg
// loadImage라는 함수가 호출이 되면 document.createElement를 통해 이미지태그를 js메모리상에서 생성
// img태그의 src속성에 url 정보 할당
// img태그에 addEventListener를 통해 load 이벤트를 추가
// load 이벤트는 src 속성에 부여된 이미지 주소를 로드하는 이벤트
// 주소 로드가 끝나면 콜백 실행
// cb()가 호출되는 시점은 이미지 로드가 끝난상태
const loadImage = (url, cb) => {
    const imgEl = document.createElement('img')
    imgEl.src = url
    imgEl.addEventListener('load', () => {
        setTimeout(() => {
            cb(imgEl)
        }, 1000)
    })
}

const containerEl = document.querySelector('.container')
loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
    containerEl.innerHTML = ""
    containerEl.append(imgEl)
})


// 재귀(함수 자기 자신을 내부에서 호출)
// 기본적으로 무한동작하므로 멈추는 것 설정해야 함
let i = 0
const a25 = () => {
    console.log('aaa')
    i += 1
    if (i < 4) {
    a25()
    }
}
a25()

const userA1 = {name: 'a', parent: null}
const userB1 = {name: 'b', parent: userA1}
const userC1 = {name: 'c', parent: userB1}
const userD1 = {name: 'd', parent: userC1}

// 
const getRootUser = user => {
    if (user.parent) {
        return getRootUser(user.parent)
    }
    return user
}

console.log(getRootUser(userD1))
console.log(getRootUser(userC1))
console.log(getRootUser(userB1))
console.log(getRootUser(userA1))


// 호출 스케줄링
// 2초내에 h1태그를 클릭하면 함수 종료. 클릭하지 않으면 함수 실행
// setTimeout: 2초뒤에 helloo 함수 실행
const helloo = () => {
    console.log('hello~~')
}

const timeout = setTimeout(helloo, 2000)
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    console.log("clear!")
    clearTimeout(timeout)
})

// setIntetval: 2초마다 helloo 함수 실행
const timeout1 = setInterval(helloo, 2000)
const h1E12 = document.querySelector('h1')
h1E12.addEventListener('click', () => {
    console.log("clear!~~")
    clearInterval(timeout)
})


// this
// 일반 함수의 this: 호출 위치에서 정의
// 화살표 함수의 this: 자신이 선언된 함수(렉시컬) 범위에서 정의
const userss = {
    firstName: "hero",
    lastName: "iam",
    age: 85,
    getFullName: function() {
        this.firstName
        this.lastName
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(userss.getFullName())

function userss2() {
    this.firstName = "neo"
    this.lastName =  "you"
    
    return {
        firstName: "hero",
        lastName: "iam",
        age: 85,
        getFullName: () => {
            return `${this.firstName} ${this.lastName}` // neo you
        }
    }
}

const u1 = userss2()
console.log(u1.getFullName())

// 하나의 객체데이터에서 특정한 속성에 함수를 할당하면 속성을 메소드라 함
// 속성과 메소드를 묶어서 멤버라고도 함
function userss3() {
    // 속성 부분
    this.firstName = "neo"
    this.lastName =  "you"
    return {
        firstName: "hero",
        lastName: "iam",
        age: 85,
        // getFullName: 속성이긴하지만 할당데이터가 함수데이터.
        //  -> 속성이 아닌 메소드라 부름
        // getFullName: function() 대신 getFullName()만 쓰는 것도 가능
        getFullName() {
            return `${this.firstName} ${this.lastName}` // hero iam
        }
    }
}

const lewis = {
    firstName: 'Lewis',
    lastName: 'Yang'
}

const u2 = userss3()
console.log(u2.getFullName())

// lewis라는 객체데이터는 u2라는 객체가 가지고있는 getFullName메소드를 빌려서 call할 수 있음
console.log(u2.getFullName.call(lewis)) // Lewis Yang


// 일반 함수
const timer = {
    title: 'TIMER',
    // timeout은 함수데이터가 할당되므로 속성x, 메소드
    timeout: function() {
        console.log(this.title)
        // setTimeout: 몇초뒤에 함수 실행시킴
        // 일반함수에서의 this: 호출위치에서 정의
        // setTimeout 내부에서 호출. 우리는 this가 뭔지 모름
        // 함수 내부에서 또 다른 함수가 들어있는 구조면 일반 함수보다 화살표 함수 쓰는 것이 더 적합함
        setTimeout(function() {
            console.log(this.title) // undefined
        }, 1000)
    }
}

timer.timeout()

// 화살표 함수
const timer2 = {
    title: 'TIMER',
    timeout() {
        console.log(this.title)
        setTimeout( () => {
            console.log(this.title) // TIMER
        }, 1000)
    }
}

timer2.timeout()