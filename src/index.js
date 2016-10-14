import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import * as context from './constants/AppContext'

let rootElement = document.getElementById('root')

context.app = ReactDOM.render(<App />, rootElement)

let state = {}
context.app.setState(state)