import React from 'react'
import Cki from './Cki'
import {mouseTrap} from 'react-mousetrap'
import * as Fun from '../constants/Fun'

class App extends React.Component {

    componentDidMount () {
        Fun.initShortcut()
        this.props.bindShortcut(['right','tab'], Fun.next)
        this.props.bindShortcut('left', Fun.previous)
        Fun.resizeWin()
    }

    componentWillMount() {
        window.addEventListener('resize', Fun.resizeWin)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', Fun.resizeWin)
    }

    render (){
        return <Cki />
    }
}

//export default App
export default mouseTrap(App);
