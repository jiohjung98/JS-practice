// Getter, Setter 
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
console.log(heropy.getFullName())   // Heropy Park

heropy.firstName = 'Neo'
console.log(heropy.getFullName())   // Neo Park


// 위를 조금 더 편하게 써보자 - getter 사용
class User2 {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    // get이라는 키워드는 속성에 붙이지 않고 함수데이터(메소드)에 붙여서 사용
    // fullName은 값을 얻어내는 기능(fullName은 getter)
    // fullName이라는 메소드를 속성처럼 사용
    // 값을 조회하는 메소드
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    // fullName에 값을 할당해주는 메소드
    set fullName(value) {
        console.log(value)  // Neo Anderson
        ;[this.firstName, this.lastName] = value.split(' ')   // Neo Anderson이라는 문자데이터를 띄어쓰기 기준으로 쪼개서 배열데이터로 만듦
    }
} 

const heropy2 = new User2('Heropy', 'Park')
console.log(heropy2.fullName)   // Heropy Park

heropy2.firstName = 'Neo'
console.log(heropy2.fullName)   // Neo Park

heropy2.fullName = 'Neo Anderson' // 값을 할당
console.log(heropy2)    // Neo Anderson 