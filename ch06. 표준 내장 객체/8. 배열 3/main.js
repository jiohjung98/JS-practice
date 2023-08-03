// .join()
// 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환

const arr = ['apple', 'banana', 'cherry']

console.log(arr.join())     // apple,banana,cherry - 인수를 제공하지 않으면 ,로 구분해서 문자데이터로 출력
console.log(arr.join(','))  // apple, banana, cherry - ,와 띄어쓰기로 구분
console.log(arr.join('/'))


// .map()
// 대상 배려의 길이만큼 주어진 콜백을 실행하고 콜백의 반환 값을 모아 새로운 배열 반환

const numbers = [1,2,3,4]
const newNums = numbers.map(item => item * 2)

console.log(newNums)    // [2,4,6,8]
console.log(numbers)    // [1,2,3,4] - 기존 배열엔 변화 x


// 서버에서 가져온 데이터 중 없는 속성을 프론트에서 추가해서 관리할 때 용이
const users = [
    {name: "neo", age: 85},
    {name: "amy", age: 22},
    {name: "Lewis", age: 11}
]

const newUsers = users.map(user => ({
        ...user,
        isValid: true,
        email: null
}))

console.log(newUsers)


// .pop()
// 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환
// 대상 배열 원본이 변경됨

console.log(arr.pop())   // cherry
console.log(arr)        // [apple, banana]


// .push()
// 대상 배열의 마지막에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환
// 대상 배열 원본이 변경됨

const newLength = arr.push('orange')
console.log(newLength)
console.log(arr)

arr.push('mango', 'strawberry')
console.log(arr)


// .reduce()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고 마지막에 호출되는 콜백의 반환값을 반환
// 각 콜백의 반환 값은 다음 콜백으로 전달

const nums = [1,2,3]
const sum = nums.reduce((acc, cur) =>  acc + cur, 0)

console.log(sum)


const users2 = [
    {name: "neo", age: 85},
    {name: "amy", age: 22},
    {name: "Lewis", age: 11}
]

// 총 나이 계산
const totalAge = users2.reduce((acc, cur) => {
    return acc + cur.age;
}, 0)
console.log(totalAge) // 118

// 모든 이름 추출
const namesArray = users2.reduce((acc, cur) => {
    acc.push(cur.name)
    return acc
}, [])
const names = namesArray.join(', ')
console.log(names)
console.log(namesArray)