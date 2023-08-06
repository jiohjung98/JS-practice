// document.createElement()

// 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환

const divEl = document.createElement('div')
console.log(divEl)

const inputEl = document.createElement('input')
console.log(inputEl)


// E.prepend() / E.append()

// 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입

const parentEl =document.querySelector('.parent')

const el = document.createElement('div')
el.textContent = 'Hello~'

parentEl.prepend(new Comment("주석"))
parentEl.append(el, "hi") 
parentEl.append("Text")



// E.remove()

// 요소를 제거

const el2 = document.querySelector('.child')
el2.remove()



// E.insertAdjacentElement()

// 대상 요소의 지정한 위치에 새로운 요소 삽입
// 대상 요소.insertAdjacentElement(위치, 새로운 요소)

// beforbegin
// <div class='target'>
//     afterbegin
//     textContent
//     beforeend
// </div>
// afterend

const childEl = document.querySelector('.child')
const newEl = document.createElement('span')
newEl.textContent = "hello!!!!"

childEl.insertAdjacentElement('beforebegin', newEl)


// N.insertBefore()

// 부모노드의 자식인 참조 노드의 이전 형제로 노드 삽입
// 부모노드.insertBefore(노드, 참조 노드)

const parentEl2 = document.querySelector('.parent')
const childEl2 = document.querySelector('.child')
const newEl2 = document.createElement('span')

newEl2.textContent = "HEEEELLLOO"

// parentEl2 요소 내부에서 childEl2요소 이전에 새로운 요소 삽입할거고 그 요소는 newEl2
parentEl2.insertBefore(newEl2, childEl2)   


// N.contains()

// 주어진 노드가 노드의 자신을 포함한 후손인지 확인
// 노드.contains(주어진 노드)

const parentEl3 = document.querySelector('.parent')
const childEl3 = document.querySelector('.child')

console.log(parentEl3.contains(childEl3))           // true
console.log(document.body.contains(parentEl3))      // true
console.log(document.body.contains(childEl3))       // true
console.log(document.body.contains(document.body))  // true
console.log(parentEl.contains(document.body))       // false


// N.textContent

// 노드의 모든 텍스트를 얻거나 변경

const el3 = document.querySelector('.child')
console.log(el3.textContent)

el3.textContent = '8'
console.log(el3.textContent)    // 8


// E.innerHTML

// 요소의 모든 HTML 내용을 하나의 문자로 얻거나,
// 새로운 HTML 반환

const el4 = document.querySelector('.parent')
console.log(el4.innerHTML)

el4.innerHTML = '<span style="color: red;">Hi!</span>'

// 백틱(`)을 사용하면 더 간편함(템플릿 리터럴 방식)
el4.innerHTML = /* html */`
<div style="border: 4px solid">
    <span style="color: red;">Hi!</span>
    <span style="color: red;">Hi!</span>
</div>`