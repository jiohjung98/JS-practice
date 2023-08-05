// Promise

const a = () => {
    // 하나의 클래스를 new라는 키워드와 함께 함수처럼 호출하면 생성자 함수라고 함
    // Promise 클래스를 사용하는 것은 콜백이라는 매개변수를 대신해서 resolve라는 개념으로 실행 위치 보장!
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(1)
            resolve()
        }, 1000)
    })
} 

// const b = () => console.log(2)

// a().then(() => { b() })


const b = () => {
    // 하나의 클래스를 new라는 키워드와 함께 함수처럼 호출하면 생성자 함수라고 함
    // Promise 클래스를 사용하는 것은 콜백이라는 매개변수를 대신해서 resolve라는 개념으로 실행 위치 보장!
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(2)
            resolve()
        }, 1000)
    })
} 

const c = () => {
    // 하나의 클래스를 new라는 키워드와 함께 함수처럼 호출하면 생성자 함수라고 함
    // Promise 클래스를 사용하는 것은 콜백이라는 매개변수를 대신해서 resolve라는 개념으로 실행 위치 보장!
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(3)
            resolve()
        }, 1000)
    })
} 

const d = () => {
    // 하나의 클래스를 new라는 키워드와 함께 함수처럼 호출하면 생성자 함수라고 함
    // Promise 클래스를 사용하는 것은 콜백이라는 매개변수를 대신해서 resolve라는 개념으로 실행 위치 보장!
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(4)
            resolve()
        }, 1000)
    })
} 

// 이렇게 써도 동작하지만, 앞의 콜백 지옥과 다를게 없음
// a().then(() => {
//     b().then(() => {
//         c().then(() => {
//             d()
//         })
//     })
// })


// promise를 사용해서 비동기 패턴 관리하는 방법!
// 화살표함수는 중괄호와 return 생략 가능! 
a().then(() => {
    return b()
}).then(() => {
    return c()
}).then(() => {
    return d()
})


// 따라서 다음과 같이 작성 가능!
a()
    .then(() => b())
    .then(() => c())
    .then(() => d())


// 화살표 함수 없이 아래처럼도 가능!
a()
    .then(b)
    .then(c)
    .then(d)