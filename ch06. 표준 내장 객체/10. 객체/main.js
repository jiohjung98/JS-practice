// Object.assign()
// 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사하고 대상 객체를 반환

const target = {a: 1, b: 2}
const source1 = {b: 3, c: 4}
const source2 ={c: 5, d: 6}
const result = Object.assign(target, source1, source2)

console.log(target)     // {a: 1, b: 3, c: 5, d: 6}
console.log(result)     // {a: 1, b: 3, c: 5, d: 6}

// 새로운 객체 데이터를 반환하게 하려면?(원본데이터 변경 X)
const target2 = {a: 1, b: 2}
const source12 = {b: 3, c: 4}
const source22 ={c: 5, d: 6}
const result2 = Object.assign({}, target, source1, source2)

console.log(target2)     // {a: 1, b: 2}
console.log(result2)     // {a: 1, b: 3, c: 5, d: 6}


// Object.assign()의 경우 객체리터럴방식({})과 전개연산자를 사용해서 문법을 대신 할 수 있음
const target3 = {a: 1, b: 2}
const source13 = {b: 3, c: 4}
const source23 ={c: 5, d: 6}
const result3 = {
    ...target3,
    ...source13,
    ...source23
}

console.log(target3)    // {a: 1, b: 2} - 원본데이터 변하지 X - 왜그러지??
console.log(result3)    // {a: 1, b: 3, c: 5, d: 6}



// Object.entries()
// 주어진 객체의 각 속성과 값으로 하나의 배열을 만들어 요소로 추가한 2차원 배열 반환
// key, value 모두 출력 

const user = {
    name: "heropy",
    age: 85,
    isValid: true,
    email: "ckaquz98@naver.com"
}

console.log(Object.entries(user))   // 2차원배열 반환

for (const [key, value] of Object.entries(user)) {
    console.log(key, value)
}
// name heropy
// age 85
// isValid true
// email ckaquz98@naver.com



// Object.keys()
// 주어진 객체의 속성 이름을 나열한 배열 반환

console.log(Object.keys(users))    // ['name', 'age', 'isValid', 'email']



// Object.values()
// 주어진 객체의 속성 값을 나열한 배열 반환

console.log(Object.values(users))   // ['heorpy', 85, true, 'ckaquz98@naver.com']

