// .find()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소 반환
const arr = [5, 8, 130, 12, 44]
const foundItem = arr.find(item => item > 10)

console.log(foundItem)  // 130(첫 번째 요소 반환 후 반복 x)

const users = [
    {name: 'neo', age: 85},
    {name: 'amy', age: 12},
    {name: 'lewis', age: 11}
]

const foundUser = users.find(user => user.name === 'amy')

console.log(foundUser)  // amy


// .findIndex()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소의 인덱스 반환
const arr2 = [5, 8, 130, 12, 44]
const index = arr2.findIndex(item => item > 10)

console.log(index)  // 2


// .flat()
// 대상 배열의 모든 하위 배열을 지정된 깊이까지 이어붙인 새로운 배열 생성
// 깊이의 기본값 = 1
// ** js데이터 메소드를 확인할 때는 원본 데이터가 수정되는지, 새로운 데이터가 생성되는지 확인해야 함!
const arr3 = [1,2,[3,4]]
console.log(arr3.flat()) // [1,2,3,4]
console.log(arr3)   //[1,2,[3,4]]

const arr4 = [1,2,[3,4, [5,6]]]
console.log(arr4.flat())    // [1,2,3,4,[5,6]]
console.log(arr4.flat(2))   // [1,2,3,4,5,6] - 깊이 2로 지정
console.log(arr4.flat(Infinity))    // 모든 하위 배열 평평하게 만들어 하나의 배열을 만들어줌
console.log(arr4) 


// .forEach()
// 대상 배열의 길이만큼 주어진 콜백 실행
const arr5 = ['a', 'b', 'c']
arr5.forEach(item => console.log(item)) // a b c

for (let i=0; i < arr5.length; i++) {
    console.log(arr5[i])                // a b c
}


// .includes()
// 대상 배열이 특정 요소를 포함하고 있는지 확인
const arr6 = [1,2,3]
console.log(arr6.includes(1))   // true
console.log(arr6.includes(7))   // false

const fruits = ['apple', 'banana', 'cherry']
console.log(fruits.includes('apple'))   // true
console.log(fruits.includes('Apple'))   // false

const users2 = [
    {name: 'neo', age: 85},
    {name: 'amy', age: 12},
    {name: 'lewis', age: 11}
]

console.log(users2.includes({name: 'neo', age: 85}))    // false
// -> js는 기본적으로 데이터를 원시형과 참조형으로 구분
// 참조형: 객체, 배열, 함수 -> 생긴 것이 같더라도 다른 데이터일 수 있음(데이터의 불변성&가변성에서 더 살펴볼 예정)
// 값이 같아도 다른 데이터로 취급하므로 False가 나옴

const neo = users2[0]
console.log(users2.includes(neo))
