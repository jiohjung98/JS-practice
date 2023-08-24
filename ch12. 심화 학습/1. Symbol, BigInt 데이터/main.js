// 심볼

// 변경이 불가능한 데이터 - 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용

// Symbol('설명')
// 설명은 단순 디버깅을 위한 용도

const sKey = Symbol('Hello')

const user = {
    key: "일반 정보",
    [sKey]: "민감한 정보"
}

console.log(user.key)   // 일반 정보
console.log(user['key'])    // 일반 정보
console.log(user[sKey])     // 민감한 정보
console.log(user[Symbol('Hello')])  // undefined

import heropy from "./heropy.js"
import { birthKey, emailKey } from "./keys.js"

console.log(heropy)
console.log(Object.keys(heropy))

console.log(heropy[birthKey]);
console.log(heropy[emailKey]);




// BigInt

// 길이 제한이 없는 정수
// 숫자 데이터가 안정적으로 표시할 수 있는
// 최대치(2^53-1)보다 큰 정수 표현 가능
// 정수 뒤에 n을 붙이거나 BigInt()를 호출해 생성

console.log(12345612345612344561232312321414124124123123)   

console.log(12345612345612344561232312321414124124123123n) 
console.log(BigInt('12345612345612344561232312321414124124123123'))

const a = 11n
const b = 22

// 숫자 -> BigInt
console.log(a + BigInt(b))
