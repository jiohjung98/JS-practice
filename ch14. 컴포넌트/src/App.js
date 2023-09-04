// export default class App {
//     constructor() {
//         this.el = document.createElement('div');
//         this.el.textContent = 'Hello World!';
//     }
// }

import { Component } from './core/heropy.js';
import FruitItem from './components/FruitItem.js';

export default class App extends Component {
    // constructor()와 super()가 비어있으면 제거해도 괜찮음
    constructor() {
        // super() - 컴포넌트라는 app에서 상속하고 있는 그 클래스의 컨스트럭터 부분을 실행하는 부분
        // super() 안의 객체 데이터는 heropy.js에 component의 payload로 받을 수 있음
        super({
            state: {
                fruits: [
                    {name: 'apple', price: 1000},
                    {name: 'banana', price: 2000},
                    {name: 'cherry', price: 3000}
                ]
            }
        })
    }
    render() {
        this.el.classList.add('search')
        this.el.innerHTML = /* html */ `
        <input />
        <button>Click!</button>
        `

        const inputEl = this.el.querySelector('input')
        inputEl.addEventListener('input', () => {
            this.state.inputText = inputEl.value     
        })

        const buttonEl = this.el.querySelector('button')
        buttonEl.addEventListener('click', () => {
                    console.log(this.state.inputText)
        })
        console.log(this.state.fruits)

        // innerHTML 사용
        // this.el.innerHTML = /* html */ `
        // <h1>Fruits</h1>
        // <ul>
        //     <!-- 데이터 기반으로 작성 -->
        //     ${this.state.fruits.filter(fruit =>
        //         fruit.price < 3000)
        //         .map(fruit => `<li>${fruit.name}</li>`)
        //         .join('')}
        // </ul>
        // `

        this.el.innerHTML = /* html */ `
        <h1>Fruits</h1>
        <ul>
        </ul>
        `
        const ulEl = this.el.querySelector('ul')
        ulEl.append(...this.state.fruits
            .filter(fruit => fruit.price < 3000)
            .map(fruit => new FruitItem({
                props: {
                    name: fruit.name,
                    price: fruit.price
                }
            }).el)
        )
    }
}