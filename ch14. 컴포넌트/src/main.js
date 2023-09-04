import App from './App.js'
import router from './routes/index.js'

const root= document.querySelector('#root')

// App
root.append(new App().el)

router()