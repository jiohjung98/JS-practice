// 컴포넌트 
export class Component {
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