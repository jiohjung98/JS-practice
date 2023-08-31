// 메모리 누수
// 더 이상 필요하지 않은 데이터가 해제되지 못하고 메모리가 계속 차지되는 현상

// - 불필요한 전역 변수 사용
// - 분리된 노드 참조
// - 해제하지 않은 타이머
// - 잘못된 클로저 사용

// 다음과 같이 window 객체를 사용하면 전역변수로 사용하게 됨
window.hello = "hello world"
window.heropy = {name: "heropy", age: 85}


// 예제 - 분리된 노드 참조로 인한 메모리 누수

const btn = document.querySelector("button")
const parent = document.querySelector(".parent")

btn.addEventListener("click", () => {
    console.log(parent)
    parent.remove()
})


// 해결
const btn2 = document.querySelector("button")

// 처음 클릭하면 console.log 잘 찍히고 두 번째부턴 Null
btn2.addEventListener("click", () => {
    const parent2 = document.querySelector(".parent")
    console.log(parent2)
    parent2 && parent2.remove()   // 참이면 parent, 거짓이면 parent.remove()
})



// 예제 - 해제하지 않은 타이머 해결

let a = 0
const intervalId = setInterval(() => {
    a += 1
}, 100)

setTimeout(() => {
    console.log(a)
    clearInterval(intervalId)
}, 1000)


// 예제 - 잘못된 클로저 

const getFn = () => {
    let a = 0
    return name => {
        // 메모리 누수가 일어나는 부분
        // a += 1
        // console.log(a)
        return `Hello ${name}~`
    }
}

const fn = getFn()
console.log(fn("Kim"))
console.log(fn("Neo"))