// export default class App {
//     constructor() {
//         this.el = document.createElement('div');
//         this.el.textContent = 'Hello World!';
//     }
// }

import { Component } from './core/heropy';

export default class App extends Component {
    constructor() {
        // super() - 컴포넌트라는 app에서 상속하고 있는 그 클래스의 컨스트럭터 부분을 실행하는 부분
        super({
            tagName: 'h1'
        })
    }
    render() {
        this.el.textContent = 'Hello World!';
    }
}