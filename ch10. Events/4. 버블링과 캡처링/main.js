// 이벤트 전파(버블) 방지
// 이벤트 캡쳐링

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const anchorEl = document.querySelector('a')

window.addEventListener('click', event => {
    console.log("window")
})

document.body.addEventListener('click', event => {
    console.log('body')
}, { capture: true})    // 캡쳐링-  capture: 먼저 동작하게 해줌

parentEl.addEventListener('click', event => {
    console.log('parent!')
    event.stopPropagation() // 버블링 정지! - 이 위쪽으로는 올라가지 않음 
})

childEl.addEventListener('click', event => {
    console.log('child!')
})

anchorEl.addEventListener('click', event => {
    console.log('anchor!')
})



const parentEl2 = document.querySelector('.parent')

const handler = () => {
    console.log('parentee')
}

parentEl2.addEventListener('click', handler, {
    capture: true
})
parentEl2.removeEventListener('click', handler,{
    capture: true
} )