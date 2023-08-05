// 콜백 패턴
// 콜백: 함수의 인수로 전달되는 또 다른 함수


// 비동기 패턴 - 숫자 1과 2, 3 순서 맞추기 
const a = (callback) => {
    setTimeout(() => {
        console.log(1)
        callback()
    }, 1000)
} 

const b = (callback) => {
    setTimeout(() => {
        console.log(2)
        callback()
    }, 1000)
}

const c = () => console.log(3)
 
// 콜백 지옥: 계속해서 내부로 파고 들어가는 형태
// 작성, 해석 힘든 단점
a(() => {
    b(() => {
        c()
    })
})

