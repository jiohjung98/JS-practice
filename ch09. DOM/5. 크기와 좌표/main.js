// window.innerWidth / window.innerHeight

// 현재 화면(Viewport) 크기를 얻음

console.log(window.innerWidth)
console.log(window.innerHeight)


// window.scrollX / window.scrollY

// 페이지의 좌상단 기준, 현재 화면의 수평, 수직 스크롤 위치를 얻음

console.log(window.scrollX, window.scrollY)


// window.scrollTo() / E.scrollTo()

// 지정된 좌표로 대상(화면, 스크롤 요소)을 스크롤
// 대상.scrollTo(x좌표, y좌표)
// 대상.scrollTo({top: Y, left: X, behavior: 'smooth'})

// setTimeout(() => {
//     window.scrollTo({
//         left: 0,
//         top: 500,
//         behavior: 'smooth'
//     })
// }, 1000);

const parentEl = document.querySelector('.parent')

setTimeout(() => {
    parentEl.scrollTo({
        left: 0,
        top: 500,
        behavior: 'smooth'
    })
}, 1000);


// E.clientWidth / E.clientHeight

// 테두리 선을 제외한 요소의 크기를 얻음

const parentEl2 = document.querySelector('.parent')
const childEl = document.querySelector('.child')

console.log(parentEl2.clientWidth, parentEl2.clientHeight)
console.log(childEl.clientWidth, childEl.clientHeight)


// E.offsetWidth / E.offsetHeight

// 테두리 선을 포함한 요소의 크기를 얻음

console.log(parentEl2.offsetWidth, parentEl2.offsetHeight)
console.log(childEl.offsetWidth, childEl.offsetHeight)


// E.scrollLeft / E.scrollTop

// 스크롤 요소의 좌상단 기준,
// 현재 스크롤 요소의 수평, 수직 스크롤 위치를 얻음

window.parentEl3 = document.querySelector('.parent')

console.log(parentEl3.scrollLeft, parentEl3.scrollTop)


// E.offsetLeft / E.offsetTop

// 페이지의 좌상단 기준, 요소의 위치를 얻음

const parentEl4 = document.querySelector('.parent')
const childEl2 = document.querySelector('.child')

console.log(parentEl4.offsetLeft, parentEl4.offsetTop)
console.log(childEl2.offsetLeft, childEl2.offsetTop)


// E.getBoundingClientRect()

// 테두리 선을 포함한 요소의 크기와 화면에서의 상대위치 정보를 얻음

const parentEl5 = document.querySelector('.parent')
const childEl3 = document.querySelector('.child')

console.log(parentEl5.getBoundingClientRect())
console.log(childEl3.getBoundingClientRect())