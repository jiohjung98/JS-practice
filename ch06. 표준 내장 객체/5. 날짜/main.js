// 타임스탬프
const date = new Date()
console.log(date)   // 현재 날짜 출력

// js는 '월'을 표시할 때 제로베이스드 넘버링 사용
// 1월: 0, 2월: 1, 3월: 2... 12월: 11
const d1 = new Date(2022, 11, 16, 12, 57, 30)   // 11 - 12월(Dec)
console.log(d1)     // Fri Dec 16 2022 12:57:30

const d2 = new Date('Fri Dec 16 2022 12:57:30 GMT+0900 (한국 표준시)')
console.log(d2)

// .getFullYear(), .setFullYear() - 프로토타입메소드(인스턴스에 붙여쓰므로)
// 날짜 인스턴스의 연도를 반환하거나 지정
console.log(d2.getFullYear())   // 2022

d2.setFullYear(2023)
console.log(d2.getFullYear())   // 2023


// .getMonth(), .setMonth()
// 날짜 인스턴스의 월을 반환하거나 지정
// 0부터 시작(Zero-based numbering)
console.log(date.getMonth())    // 6 - 7월을 의미

date.setMonth(0)
console.log(date.getMonth())    // 0 - 1월을 의미


// .getDate(), .setDate()
// 날짜 인스턴스의 일을 반환하거나 지정
console.log(date.getDate())     // 20

date.setDate(11)
console.log(date.getDate())     // 11


// .getHours(), .setHours()
// 날짜 인스턴스의 시간을 반환하거나 지정
console.log(date.getHours())

date.setHours(7)
console.log(date.getHours())


// .getMinutes(), .setMinutes()
// 날짜 인스턴스의 분을 반환하거나 지정
console.log(date.getMinutes())

date.getMinutes(7)
console.log(date.getMinutes())


// .getSeconds(), .setSeconds()
// 날짜 인스턴스의 초를 반환하거나 지정
console.log(date.getSeconds())

date.setSeconds(7)
console.log(date.getSeconds())


// .getDay() - 값 얻는 것만 존재(지정 x)
// 날짜 인스턴스의 요일을 반환
const date1 = new Date()
const day = date.getDay()

console.log(day)
console.log(getDayKo(day))

function getDayKo(day) {
    switch(day) {
        case 0: return '월'
        case 1: return '화'
        case 2: return '수'
        case 3: return '목'
        case 4: return '금'
        case 5: return '토'
        case 6: return '일'
    }
}


// .getTime(), .setTime()
// 1970-01-01 00:00:00(유닉스타임)부터 경과한
// 날짜 인스턴스의 밀리초(ms)로 반환하거나 지정
console.log(date.getTime())
console.log(date)

date.setTime(17000000000)
console.log(date.getTime())

// isAfter함수생성 - 프로토타입 속성에 붙어있는 메소드이므로 인스턴스에서 사용
Date.prototype.isAfter = function (date) {
    const a = this.getTime()
    const b = date.getTime()
    console.log(a)
    console.log(b)
    return a > b
}

const d3 = new Date('Sat Jan 01 2022 00:00:00 GMT+0900 (한국 표준시)')
const d4 = new Date('Sun Jan 01 2023 00:00:00 GMT+0900 (한국 표준시)')


console.log(d3.isAfter(d4)) // false
console.log(d4.isAfter(d3)) // true


// Date.now()
// 1970-01-01 00:00:00(유닉스타임)부터 경과한
// 메소드가 호출될 때의 밀리초를 반환
// time 변수를 만드는 시점은 아래 코드를 적을 때임 - 고정된 숫자이므로 어디에서 사용되든 같은 숫자값
// Date.now()는 계속 달라짐
const time = new Date().getTime()
console.log(Date.now())
console.log(time)

setTimeout(() => {
    console.log(Date.now())     // 1초뒤의 결과값이 나옴
    console.log(time)
}, 1000
)