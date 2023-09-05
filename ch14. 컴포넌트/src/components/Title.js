import { Component } from "../core/heropy.js"
import messageStore from '../store/message.js'

export default class Title extends Component {
    constructor() {
        super({
            tagName: 'h1'
        })
        messageStore.subscribe('message', () => {
            this.render()
        })
    }
    render() {
    this.el.textContent = `Title: ${messageStore.state.message}`
    }
}