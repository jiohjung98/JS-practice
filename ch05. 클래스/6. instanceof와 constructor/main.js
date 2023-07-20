// 상속 예제
class A {
    constructor() {
    }
}

class B extends A {
    constructor() {
        super()
    }
}

class C extends B {
    constructor() {
        super()
    }
}

const a = new A()
const b = new B()
const c = new C()

console.log(c instanceof A) // true
console.log(c instanceof B) // true
console.log(c instanceof C) // true

// constructor 속성 사용
console.log(c.constructor === A)    // false
console.log(c.constructor === B)    // false
console.log(c.constructor === C)    // true

const fruits = new Array('apple', 'banana')
console.log(fruits.constructor === Array)   // true
console.log(fruits instanceof Array)        // true