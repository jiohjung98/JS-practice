// document.getElementById()

// HTML id 속성값으로 검색한 요소 반환
// 여러 요소가 검색되면 가장 먼저 찾은 요소만 반환!
// 검색 결과가 없으면 null 반환

const el = document.getElementById('child2')    // # 붙이면 안됨
console.log(el)     // <div id='child2' class="child">2</div>


// document.querySelector()

// CSS 선택자로 검색한 요소를 하나 반환
// 여러 요소가 검색되면 가장 먼저 찾은 요소만 반환!
// 검색 결과가 없으면 null 반환

const el2 = document.querySelector('.child:first-child')
console.log(el2)    // <div class="child">1</div>


// document.querySelectorAll()

// CSS 선택자로 검색한 모든 요소를 NodeList로 반환
// NodeList 객체는 .forEach()를 사용할 수 있음

const nodeList = document.querySelectorAll('.child')
console.log(nodeList)
nodeList.forEach(el => console.log(el.textContent))

// 배열데이터에서 쓰는 메소드를 쓰고싶으면 Array.from()을 통해 유사배열을 실제배열로 변환하자!
console.log(Array.from(nodeList))


// N.parentElement

// 노드의 부모 요소를 반환

const el3 = document.querySelector('.child')
console.log(el3.parentElement)


// E.closest()

// 자신을 포함한!!! 조상 요소 중 CSS 선택자와 일치하는
// 가장 가까운 요소를 반환
// 요소를 찾지 못하면 null 반환

const el4 = document.querySelector('.child')
console.log(el4.closest('div'))
console.log(el4.closest('body'))
console.log(el4.closest('.hello'))   // null


// N.previousSibling / N.nextSibling

// 노드의 이전 형제 혹은 다음 형제 노드 반환

const el5 = document.querySelector('.child')
console.log(el5.previousSibling)
console.log(el5.nextSibling)



// E.previousElementSibling / E.nextElementSibling

// 요소의 이전 형제 혹은 다음 형제 요소 반환

const el6 = document.querySelector('.child')
console.log(el6.previousElementSibling)
console.log(el6.nextElementSibling)


// E.children

// 요소의 모든 자식 요소 반환

const el7 = document.querySelector('.parent')
console.log(el7.children)

console.log(Array.from(el7.children))


// E.firstElementChild / E.lastElementChild

// 요소의 첫 번째 자식 혹은 마지막 자식 요소 반환

const el8 = document.querySelector('.parent')
console.log(el8.firstElementChild)
console.log(el8.lastElementChild)
