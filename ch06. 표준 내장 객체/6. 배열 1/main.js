// .length
// 배열의 길이를 반환
const arr = ['a', 'b', 'c']

console.log(arr.length)   // 3


// .at()
// 대상 배열을 인덱싱
// 음수 값을 사용하면 뒤에서부터 인덱싱
// 배열의 마지막 아이템을 인덱싱할 때 간편함
console.log(arr[0])     // a
console.log(arr.at(0))  // a

console.log(arr[arr.length-1])  // c
console.log(arr.at(-1))         // c


// .concat()
// 대상 배열과 주어진 배열을 병합해 새로운 배열 반환
const arr2 = ['a', 'b', 'c']
const arr3 = ['d', 'e', 'f']
const arr4 = arr2.concat(arr3)

console.log(arr2)   // a b c
console.log(arr3)   // d e f
console.log(arr4)   // a b c d e f

// 전개연산자 사용해서 다르게 구현 가능
const arr5 = [...arr2, ...arr3]
console.log(arr5)   // a b c d e f


// .every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참을 반환하는지 확인
const arr6 = [1,2,3,4]
const isValid = arr6.every(item => item < 5)

console.log(isValid)    // true

const isValid2 = arr6.every(item => item < 4)
console.log(isValid2)   // false


// .filter()
// 콜백: 함수에 인수로 사용되는 또  다른 함수(number => number < 30)
// 주어진 콜백 테스트를 통과(참을 반환)하는 모든 요소(배열 안의 각각의 데이터 - item, element)를 새로운 배열로 반환
// 모든 요소가 테스트를 통과하지 못하면 빈 배열 반환
const numbers = [1,20,7,9,104,0,58]
const filteredNumbers = numbers.filter(number => number < 30)

console.log(filteredNumbers)    // [1, 20, 7, 0]

const filteredNumbers2 = numbers.filter(number => number < 0)

console.log(filteredNumbers2)    // [] - 빈 배열 반환