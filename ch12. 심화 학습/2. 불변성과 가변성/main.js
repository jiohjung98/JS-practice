// 불변성 및 가변성

// 불변성: 설정된 데이터가 메모리에서 변경 x
// 가변성: 생성된 데이터가 메모리에서 변경 가능

let a = 1
let b = 1

b = 2

console.log(b)  // 2
console.log(a)  // 1


let c = {x:1}
let d = c

d.x = 2

console.log(c)  // {x:2}
console.log(d)  // {x:2}