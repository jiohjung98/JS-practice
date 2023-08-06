// 이벤트 객체

// 이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있음

const parentEl = document.querySelector('.parent')

parentEl.addEventListener('click', event => {
    console.log(event.target, event.currentTarget)
})

parentEl.addEventListener('click', event => {
    console.log(event)
})

// wheel - 마우스 휠 쓰면 나타나는 이벤트
parentEl.addEventListener('wheel', event => {
    console.log(event)
})

const inputEl = document.querySelector('.input')

inputEl.addEventListener('keydown', event => {
    console.log(event.key)
})