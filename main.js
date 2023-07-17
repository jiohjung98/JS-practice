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
console.log((a+b).toFixed(1)) // 0.3
// toFixed(a) - 소수점 a까지만 나타내줌. 하지만 숫자데이터를 문자데이터로 바꿈
console.log(Number((a+b).toFixed(1)))