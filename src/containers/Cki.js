import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainBody from './MainBody'

let menuItems = [];
menuItems.push({key : 1, name : '值机', divider : false});
menuItems.push({key : 2, name : '统计', divider : false});
menuItems.push({key : 3, name : '用户', divider : false});
menuItems.push({key : 4, name : '日志', divider : false});
menuItems.push({key : 5, divider : true});
menuItems.push({key : 6, name : '退出', divider : false});


class Cki extends React.Component {

    componentDidMount () {

    }

    render() {
        return (
            <div className="container-root">
                <Header menuItems={ menuItems } />
                <MainBody />
                <Footer />
            </div>
        )
    }
}
export default Cki