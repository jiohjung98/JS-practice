// E.dataset

// 요소의 각 'data-' 속성값을 얻거나 지정

const el = document.querySelector('.child')
const str = 'hello world'
const obj = {a:1, b:2}

el.dataset.helloWorld = str
el.dataset.object = JSON.stringify(obj)

console.log(el.dataset.helloWorld)
console.log(el.dataset.object)
console.log(JSON.parse(el.dataset.object))  // JS데이터로 분석해서 반환


// E.tagName

// 요소의 태그 이름을 대문자로 반환

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const el2 = document.createElement('span')

console.log(parentEl.tagName)
console.log(childEl.tagName)
console.log(el2.tagName)
console.log(document.body.tagName)



// E.id

// 요소의 아이디 속성 값을 얻거나 지정

const el3 = document.querySelector('.child')
console.log(el3.id)

el3.id = 'child1'
console.log(el3.id)
console.log(el3)



// E.className

// 요소의 class 속성 값을 얻거나 지정

const el4 = document.querySelector('.child')
console.log(el4)

el4.className += 'child1 active'
console.log(el4.className)
console.log(el4)


// E.classList

// 요소의 class 속성 값을 제어

// .add(): 새로운 값 추가
// .remove(): 기존 값 제거
// .toggle(): 값을 토글
// .contains(): 값을 확인

const el5 = document.querySelector('.child')

el5.classList.add('ac')
console.log(el5.classList.contains('ac'))       

el5.classList.remove('ac')
console.log(el5.classList.contains('ac'))

el5.addEventListener('click', () => {
    el5.classList.toggle('active')
    console.log(el5.classList.contains('active'))
})


// E.style

// 요소의 style 속성(인라인 스타일)의 css 속성 값을 얻거나 지정

const el6 = document.querySelector('.child')

// 개별 지정!
el6.style.width = '100px'
el6.style.fontSize = '20px'
el6.style.backgroundColor = 'green'
el6.style.position = 'absolute'

// 한 번에 지정!
Object.assign(el6.style, {
    width : '100px',
    fontSize : '20px',
    backgroundColor: 'green',
    position: 'absolute'
})

console.log(el6.style)
console.log(el6.style.width)
console.log(el6.style.fontSize)
console.log(el6.style.backgroundColor)
console.log(el6.style.position)


// window.getComputedStyle()

// 요소에 적용된 스타일 객체를 반환

const el7 = document.querySelector('.child')
const styles = window.getComputedStyle(el7)

console.log(styles.width)
console.log(styles.fontSize)
console.log(styles.backgroundColor)
console.log(styles.position)
console.log(styles)


// E.getAttribute() / E.setAttribute()

// 요소에서 특정 속성 값을 얻거나 지정
// 속성: HTML - Attribute / CSS, JS - Property 라 부름!

const el8 = document.querySelector('.child')

el8.setAttribute('title', "hello world!")
console.log(el8.getAttribute('title'))


// E.hasAttribute() / E.removeAttribute()

// 요소에서 특정 속성을 확인하거나 제거

const el9 = document.querySelector('.child')

console.log(el9.hasAttribute('class'))

el9.removeAttribute('class')
console.log(el9.hasAttribute('class'))

console.log(el9)
