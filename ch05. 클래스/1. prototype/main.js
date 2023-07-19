// prototype

// 배열 리터럴(기호를 통해 생성)
// const fruits = ["apple", "banana", "cherry"]

// new 키워드로 실행하는 함수: 생성자 함수 - 인스턴스
// length, includes - prototype 메소드(속성)
// []: 배열데이터, {}: 객체데이터, '': 문자데이터 - 기호를 사용한 리터럴 방식
const fruits = new Array("apple", "banana", "cherry")
console.log(fruits)
console.log(fruits.length)
console.log(fruits.includes("banana"))  // true
console.log(fruits.includes("orange"))  // false


Array.prototype.heropy = function() {
    console.log(this)
}

fruits.heropy()


const heropy = {
    firstName: 'heropy',
    lastName: 'Park',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const neo = {
    firstName: 'neo',
    lastName: 'Anderson'
}

console.log(heropy.getFullName()) // heropy Park

// neo라는 객체데이터가 heropy의 getFullName을 호출
console.log(heropy.getFullName.call(neo))   // neo Anderson

// 동일한 작업을 하는 것이 여러 개가 있으면 매우 번거로움
// 이러한 단점을 보완한 것이 prototype
// 첫번째 대문자(파스칼 케이스)
function User(first, last) {
    this.firstName = first
    this.lastName = last
}

// 프로토타입의 메소드를 만들 때는 일반함수 사용(화살표 함수 사용하면 안됨)
// getFullName함수는 User라는 함수의 프로토타입으로 등록
User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// User라는 생성자 함수에서 반환된 인스턴스 객체에서는 언제든지 프로토타입에 등록된 메소드를 사용할 수 있음!
const heropy2 = new User('Heropy', 'Park')
const neo2 = new User('Neo', 'Anderson')
console.log(heropy2)
console.log(neo2)
console.log(heropy2.getFullName())  
console.log(neo2.getFullName())

