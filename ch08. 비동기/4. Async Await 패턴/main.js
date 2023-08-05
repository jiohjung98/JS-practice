// Async / Await

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

const b = () => console.log(2)

// a().then(() => b())

// await - 뒤쪽의 비동기 함수를 기다림(promise 인스턴스가 반환이 되어야 사용할 수 있음)
// async 키워드 붙여줘야 사용할 수 있는데, 붙여주기만 하면 비동기 패턴 제어 가능하므로 then() 보다 효율적으로 사용할 수 있음!!!
const wrap = async() => {
    await a()
    b()
}
wrap()