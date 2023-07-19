// 정적 메소드
// Array.isArray()- 인자가 Array인지 판별
class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    // User라는 클래스 자체에서 사용하고싶으면 static 키워드 사용(안붙이면 인스턴스에서만 사용 가능)
    // 정적메소드는 클래스에서만 사용 가능. 각각의 인스턴스에선 사용 불가
    static isUser(user) {
        if(user.firstName && user.lastName) {
            return true
        } 
        return false
    }
} 

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', "Anderson")
const lewis = {
    name: "Lewis Yang",
    age: 85
}

console.log(heropy.getFullName())
console.log(neo.getFullName())
// console.log(User.getFullName()) // TypeError 
// console.log(heropy.isUser())    // TypeError

console.log(User.isUser(heropy))    // true
console.log(User.isUser(neo))       // true
console.log(User.isUser(lewis))     // false