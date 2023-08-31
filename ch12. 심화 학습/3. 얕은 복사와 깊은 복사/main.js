// 얕은 복사와 깊은 복사

// 참조형은 가변성으로 인해 데이터를 복사할 때 주의가 필요

// 얕은 복사: 참조형의 1차원 데이터만 복사
// 깊은 복사: 참조형의 모든 차원 데이터를 복사

// 원시형 데이터는 기본 데이터가 변경되지 x
let a = 1
let b = a

b = 2

console.log(b)  // 2
console.log(a)  // 1

b = 3

console.log(b)  // 3
console.log(a)  // 1


// 참조형
// 얕은 복사
const c = {x:1}
const d = Object.assign({}, c)
const e = {...c} // 전개연산자 쓰면 객체데이터의 중괄호 제거하고 받아옴

d.x = 2

console.log(d)  // {x: 2}
console.log(c)  // {x: 1}
console.log(e)  // {x: 1}


const f = {x: {y:1}}
const g = {...f}

g.x.y = 2

console.log(g)  // {x: {y: 2}}
console.log(f)  // {x: {y: 1}}


// 깊은 복사