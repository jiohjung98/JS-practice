// ES6 Classes

// 기존 property 방식
// function User(first, last) {
//     this.firstName = first
//     this.lastName = last
// }

// User.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
// }

// ES6 Class 방식
class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
} 

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')

console.log(heropy.getFullName())
console.log(neo.getFullName())
console.log(heropy)
console.log(neo)