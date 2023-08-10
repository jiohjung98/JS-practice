// Keyboard events

// keydown: 키를 넣을 때
// keyup: 키를 뗄 때

const inputEl = document.querySelector('input')

inputEl.addEventListener('keydown', event => {
    if (event.key === "Enter" && !event.isComposing) {
        console.log(event.isComposing)
        console.log(event.target.value)
    }
    // console.log(event.key)
})

// inputEl.addEventListener('keyup', event => {
//     console.log("key 뗌")
// })