// .toFixed()
// 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 변환
const num = 3.1415926535

console.log(num.toFixed(2))                     // 3.14 - 숫자가 아닌 문자열
console.log(typeof num.toFixed(2))              // string


// parseFloat - 숫자로 변환
console.log(parseFloat(num.toFixed(2)))          // 3.14 - 숫자
console.log(typeof parseFloat(num.toFixed(2)))   // number


// .toLocaleString()   
// 숫자를 현지 언어 형식의 문자로 변환
const num2 = 1000000

console.log(num2.toLocaleString())              // 1,000,000
console.log(`${num2.toLocaleString()}원`)        // 1,000,000원


// Number.isInteger()
// Number라는 클래스 부분에 붙어있음 - 정적메소드(클래스에서 바로 사용하는 메소드)
// 숫자가 정수인지 확인
const num3 = 123
const pi = 3.14

console.log(Number.isInteger(num3))  // true
console.log(Number.isInteger(pi))   // false


// Number.isNaN()
// 주어진 값이 NaN인지 확인
const num4 = NaN
const num5 = 123
const str6 = "hello"
const nul = null

console.log(Number.isNaN(num4))     // true
console.log(Number.isNaN(num5))     // false
console.log(Number.isNaN(str6))     // false
console.log(Number.isNaN(nul))      // false


// Number.parseInt() or parseInt()
// 주어진 값을 파싱해 특정 진수(radix)의 정수로 반환
const str7 = '3.1415926535'
const num6 = 3.1419626535

console.log(Number.parseInt(str7, 10))  // 3(10진수로 만들어라)
console.log(parseInt(str7, 10))         // 3
console.log(Number.parseInt(num6, 10))  // 3


// Number.parseFloat() or parseFloat()
// 주어진 값을 파싱해 부동소수점 실수로 반환
console.log(Number.parseFloat(str7))    // 3.1415926535
console.log(parseFloat(str7))           // 3.1415926535
console.log(Number.parseFloat(num6))    // 3.1415926535