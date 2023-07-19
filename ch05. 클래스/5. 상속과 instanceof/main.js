// 상속(Inheritance)

// 운송수단
class Vehicle {
    constructor(acceleration = 1) {
        this.speed = 0
        this.acceleration = acceleration
    }
    accelerate() {
        this.speed += this.acceleration
    }
    decelerate() {
        if (this.speed <= 0) {
            console.log("정지!")
            return
        }
        this.speed -= this.acceleration
    }
}

// 자전거
// super함수 - vehicle 클래스가 가진 constructor 부분
// bicycle 클래스는 운송수단을 상속받아서 내부에서 사용할건데, 운송수단의 constructor가 super을 통해 호출
class Bicycle extends Vehicle {
    constructor(price=100, acceleration) {
        super(acceleration)
        this.price = price
        this.wheel = 2
    }
}

// new Bicycle() - 생성자 함수
// bicycle - 인스턴스
const bicycle = new Bicycle(300, 2) 
console.log(bicycle)

const bicycle2 = new Bicycle(300) 
bicycle2.accelerate()
console.log(bicycle2) // speed = 1
bicycle2.accelerate()
console.log(bicycle2) // speed = 2

// instanceof 키워드 - 키워드 앞쪽의 데이터가 키워드 뒤쪽의 클래스에서 인스턴스로 만들어졌는지 확인
console.log(bicycle2 instanceof Bicycle)    // true
console.log(bicycle2 instanceof Vehicle)    // true - Bicycle 클래스가 Vehicle 클래스를 상속받아서 만들어졌으므로 true


class Car extends Bicycle {
    constructor(license, price, acceleration) {
        super(price, acceleration)
        this.license = license
        this.wheel = 4
    }
    // accelerate 메소드 재정의 
    accelerate() {
        if (!this.license) {
            console.error('무면허!')
            return
        }
        this.speed += this.acceleration
        console.log('가속!', this.speed)
    }
}

const carA = new Car(true, 7000, 10)
const carB = new Car(false, 4000, 6)

carA.accelerate()
console.log(carA)   // speed = 10

carB.accelerate()
console.log(carB)   // 무면허!

console.log(carA instanceof Car)    // true


// 보트
class Boat extends Vehicle {
    constructor(price,  acceleration) {
        super(acceleration)
        this.price = price
        this.moter = 1
    }
}

const boat = new Boat(10000, 5)
console.log(boat)
console.log(boat instanceof Bicycle)    // false