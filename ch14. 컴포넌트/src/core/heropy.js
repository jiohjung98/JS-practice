// 컴포넌트 
export class Component {
    // Component라는 클래스는 호출될 때 객체데이터를 인수로 받는데, 객체데이터를 payload()라는 매개변수로 받아서
    // payload()안에서 tagName, state, props라는 내용으로 꺼내서 쓸 수 있음
    // this. 으로 내용을 할당해주고
    // render() 부분에서 사용
    constructor(payload = {}) {
        // tagName 기본값 div로 설정(아무것도 입력안되면 기본값은 div로)
        const {
            tagName = 'div',
            state = {},
            props = {}
        } = payload
        this.el = document.createElement(tagName)
        this.state = state
        this.props = props
        this.render()
    }
    render() {
        // ...
    }
}


// Router 기능
export function createRouter(routes) {
    return function () {
        window.addEventListener('popstate', () => {
            routeRender(routes)
        })
        routeRender(routes)
    }
}