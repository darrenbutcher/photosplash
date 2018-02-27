import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './styles/global'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
