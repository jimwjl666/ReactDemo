import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>,document.getElementById('app'));

//1.0 表达式
ReactDOM.render(<h1>1、{1+2}</h1>,document.querySelector('#demo1'));

//1.1
ReactDOM.render(<div>2、<h1>欢迎</h1><h2>光临</h2><p>这是一个范例2</p></div>,document.querySelector('#demo2'));

//1.2
ReactDOM.render(<div>3、范例5</div>,document.querySelector('#demo3'));

//1.3 样式
var style={
    fontSize:100,
    color:'red'
}
ReactDOM.render(<h1 style={style}>4、样式
    {/*我是注释*/}
</h1>,document.querySelector('#demo4'));

//1.4 数组
{
    var arr=[
        <h1>我是数组第一个元素</h1>,
        <h2>这是个数组第二个元素</h2>
    ]

    ReactDOM.render(<div>5、{arr}</div>,document.querySelector('#demo5'));
}
//1.5
{
    var myDivEle=<div className="foo">6、我是一个虚拟dom</div>;
    //自己的dom小写，组件大写
    ReactDOM.render(myDivEle,document.querySelector('#demo6'));
}
//1.6
{
    var Hello=React.createClass({
        render:function(){
            return <h1>7、hello</h1>
        }
    });
    ReactDOM.render(<Hello/>,document.querySelector('#demo7'));
}

//1.7 单个组件带属性
{
    var HelloMessage=React.createClass({
        render:function(){
            return <h1>Hello&nbsp;{this.props.name}</h1>
        }
    })
    ReactDOM.render(<HelloMessage name="wjl"/>,document.querySelector('#demo8'));
}


//1.8 复合组件
{
    //网站标题组件
    var Name=React.createClass({
        render:function(){
            return(<h1 >123</h1>)
        }
    })
    //网站链接组件
    var Link=React.createClass({
        render:function(){
            return <a href={this.props.site} >{this.props.site}</a>
        }
    })
    //综合组件
    var Site=React.createClass({
        render(){
            return <div><Name name={this.props.name}  /><Link site={this.props.site} /></div>
        }
    })

    ReactDOM.render(<Site name="商城"  site='12332' />,document.querySelector('#demo9'))

}
































