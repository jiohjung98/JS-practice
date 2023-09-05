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
function routeRender(routes) {

    if (!location.hash) {
        history.replaceState(null, '', '/#/')
    }
    const routerView = document.querySelector('router-view')

    // location.hash => 주소의 hash값을 얻을 수 있음
    // http://localhost:1234/#/about?heropy
    // #/about?name=heropy
    // -> ?기준으로 앞쪽: 해쉬, 뒤쪽: 쿼리스트링
    // -> 물음표를 기준으로 해쉬값을 알아야 함
    const [hash, queryString = ''] = location.hash.split('?')

    // a=123&b=456
    // ['a=123', 'b=456']
    // {a: '123', b: '456'}
    queryString
    .split('&').
    reduce((acc, cur) => {
        const [key, value] = cur.split('=')
        acc[key]=value
        return acc
    }, {})

    history.replaceState(null, '')

    const currentRoute = routes.find(route => 
        // 정규표현식 사용
        new RegExp(`${route.path}/?$`).test(hash)
    )
    routerView.innerHTML = ''
    routerView.append(new currentRoute.component().el)

    window.scrollTo(0,0)
}


export function createRouter(routes) {
    return function () {
        window.addEventListener('popstate', () => {
            routeRender(routes)
        })
        routeRender(routes)
    }
}


// store //
export class Store {
    constructor(state) {
        this.state = {}
        this.observers = {}
        // 객체데이터 반복 - For in
        for (const key in state) {
            Object.defineProperty(this.state, key, {
                get: () => state[key],   // state['message']
                set: (val) => {
                    state[key] = val
                    this.observers[key].forEach(observer => observer(val))
                }
            })
        }

    }
    subscribe(key, cb) {
        Array.isArray(this.observers[key]) 
        ? this.observers[key].push(cb) 
        : this.observers[key] = [cb]
    }
}