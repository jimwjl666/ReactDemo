import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import LoginHandler from './components/login.js';

const ACTIVE = { color: 'red' }
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>我的路由</h1>
                <ul>
                    <li><Link to="/" activeStyle={ACTIVE}>首页</Link></li>
                    <li><Link to="/users" activeStyle={ACTIVE}>用户页</Link></li>
                    <li><Link to="/about" activeStyle={ACTIVE}>关于我们</Link></li>
                    <li><Link to="/message/3" activeStyle={ACTIVE}>传参</Link></li>
                </ul>
                {/*类似于一个展位符*/}
                {this.props.children}
            </div>
        )
    }
}
//首页模板及操作
class Index extends React.Component {
    render() {
        return (
            <div>
                <h2>Index!</h2>
                {this.props.children||'欢迎来到首页'}
            </div>
        )
    }
}

//用户页面
class Users extends React.Component {
    render() {
        return (
            <div>
                <h2>Users</h2>
            </div>
        )
    }
}
//关于我们页面
class About extends React.Component {
    render(){

        return(<h3>About</h3>);
    }    
}
//
class Message extends React.Component{
    render(){
        return(<h3>{this.props.params.id}</h3>);
    }
}
render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
         {/* 当 url 为/时渲染 Index 组件 */}
            <IndexRoute component={Index}/>
            <Route path="users" component={Users}></Route>
            <Route path="about" component={About}></Route>
            <Route path="message/:id" component={Message}></Route>
        </Route>
    </Router>
), document.getElementById('app'))



