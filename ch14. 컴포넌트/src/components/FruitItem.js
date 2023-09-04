import { Component} from '../core/heropy.js'

export default class FruitItem extends Component {
    constructor(payload) {
        // super() 부분은 상속받은 Component가 실행되는 부분
        // payload 라는 매개변수에서 super()함수로 payload.props를 다시 Props에 할당
        super({
            tagName: 'li',
            props: payload.props
        })
    }
    render() {
        this.el.innerHTML = /* html */`
        <span>${this.props.name}</span>
        <span>${this.props.price}</span>
        `

        this.el.addEventListener('click', () => {
            console.log(this.props.name, this.props.price)
        })
    }
}