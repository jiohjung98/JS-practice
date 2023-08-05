// Resolve, Reject 그리고 에러 핸들링

// const delayAdd = (index, cb, errorCb) => {
//     setTimeout(() => {
//         if (index > 10) {
//             errorCb(`${index}는 10보다 클 수 없어요!`)
//             return
//         }
//         console.log(index)
//         cb(index + 1)
//     }, 1000)
// }

// 위의 내용을 promise로 작성해보기
// -> 콜백, 에러 콜백에 해당하는 매개변수(cb, errorCb)는 필요 없음! 
// resolve 매개변수 - 정상적인 동작일 때 실행될 코드 작성
// reject 매개변수 - 정상적이지 않은 동작일 때 실행되는 코드 작성
const delayAdd = index => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (index > 10) {
            reject(`${index}는 10보다 클 수 없어요!`)
            return
        }
        console.log(index)
        resolve(index + 1)
    }, 1000)
    })
}

delayAdd(9)
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(() => console.log("Done!!!"))


// async, await -> try&catch 사용
const wrap = async () => {
    try {
        const res = await delayAdd(12)
        console.log(res)  
    } catch(err) {
        console.error(err)
    } finally {
        console.log("Done!")
    }
}
wrap()