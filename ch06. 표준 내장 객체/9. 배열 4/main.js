// .reverse()
// 대상 배열의 순서를 반전
// 대상 배열 원본이 변경됨!!

const arr = ['a', 'b', 'c'];
const reversed = arr.reverse()

console.log(reversed)
console.log(arr)


// .shift()
// 대상 배열에서 첫 번째 요소 제거하고 제거된 요소 반환
// 대상 배열 원본이 변경됨!!
// pop()은 마지막 요소 제거

console.log(arr.shift())
console.log(arr)


// .slice()
// 대상 배열에서 일부를 추출해 새로운 배열 반환
// 두 번째 인수 직전까지 추출하고 두 번째 인수를 생략하면 대상 배열의 끝까지 추출

const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log(arr2.slice(0, 3))   // a, b, c
console.log(arr2.slice(4, -1))   // e, f
console.log(arr2.slice(4))      // e, f, g



// .some()
// 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인
// 하나 이상 통과하면 true
// every() - 모든 콜백 테스트가 통과하는지 확인

const arr3 = [1,2,3,4]
const isValid = arr3.some(item => item > 3)

console.log(isValid)    // true

const isValid2 = arr3.some(item => item > 4)

console.log(isValid)    // false



// .sort()
// 대상 배열의 콜백을 반환 값(음수, 양수, 0)에 따라 정렬
// 콜백을 제공하지 않으면 요소를 문자열로 반환하고 유니코드 코드 포인트 순서로 정렬
// 대상 배열 원본이 변경됨!!

const numbers = [4, 17, 2, 103, 3, 1, 0]

numbers.sort()
console.log(numbers)    // 0, 1, 103, 17, 2, 3, 4 -> 콜백 제공하지 않아 유니코드 코드 포인트 순서로 정렬

numbers.sort((a,b) => a-b)
console.log(numbers)    // 0, 1, 2, 3, 4, 17, 103 -> 낮은 수부터 정렬

numbers.sort((a,b) => b-a)
console.log(numbers)    // 103, 17, 4, 3, 2, 1, 0 -> 높은 수부터 정렬


const users = [
    {name: "neo", age: 85},
    {name: "amy", age: 22},
    {name: "Lewis", age: 11}
]

users.sort((a,b) => a.age - b.age)
console.log(users)  // 나이가 적은 순서대로 유저 정렬



// .splice()
// 대상 배열에 요소를 추가하거나 삭제, 교체
// 대상 배열 원본이 변경
// .splice(a,b,c) -> a번째 해당하는 자리에다가 b만큼 삭제하고 그 자리에 c를 추가

const arr4 = ['a', 'b', 'c']
arr4.splice(2, 0, 'x')  // 

console.log(arr4)   // ['a', 'b', 'x', 'c']

arr4.splice(1, 2)   // index = 1부터 2개 제거해라

console.log(arr4)   // ['a', 'c']



// .unshift()
// 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환
// 대상 배열 원본이 변경

const arr5 = ['a', 'b', 'c']

console.log(arr5.unshift('x'))
console.log(arr5)   // 4



// Array.from()
// 유사 배열(array-like)을 실제 배열로 반환
// length 속성도 제공해야 함!

const arraylike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}

console.log(arraylike.constructor === Array)    // false
console.log(arraylike.constructor === Object)   // true - 객체데이터임

// arraylike.forEach(item => console.log(item)) -> Error(객체데이터이므로 forEach 사용불가)
Array.from(arraylike).forEach(item => console.log(item))    // a, b, c



// Array.isArray()
// 배열 데이터인지 확인

const array = ['a', 'b', 'c']
const arraylike2 = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}

console.log(Array.isArray(array))       // true
console.log(Array.isArray(arraylike2))  // false