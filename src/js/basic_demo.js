import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
{
    ReactDOM.render(<App/>, document.getElementById('app'));
}

//1.0 表达式
ReactDOM.render(<h1>1、{1+2}</h1>,document.querySelector('#demo1'));

//1.1
{
ReactDOM.render(<div>2、<h1>欢迎</h1><h2>光临</h2><p>这是一个范例2</p></div>,document.querySelector('#demo2'));
}

//1.2
{
ReactDOM.render(<div>3、范例5</div>,document.querySelector('#demo3'));
}

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
    var WebSite = React.createClass({
        render: function() {
            return (
                <div>
                    <Name name={this.props.name} key={this.props.name} />
                    <Link site={this.props.site} key={this.props.site} />
                </div>
            );
        }
    });

    var Name = React.createClass({
        render: function() {
            return (
                <h1>{this.props.name}</h1>
            );
        }
    });

    var Link = React.createClass({
        render: function() {
            return (
                <a href={this.props.site} key={this.props.site}>
                    {this.props.site}
                </a>
            );
        }
    });

    ReactDOM.render(
        <WebSite name="123"  site=" http://www.baidu.com" />,
        document.getElementById('demo9')
    );

}


//1.9 react satate
/*
* getInitialState:设置初始状态
* setState({key:value})   引起重新渲染
* */

{

    var LinkButton=React.createClass({
        getInitialState(){
            return{
                liked:false
            }
        },
        handleClick(ev){
            this.setState({liked:!this.state.liked});
        },
        render(){
            var text=this.state.liked?'like':'noLike';
            return(
                <a onClick={this.handleClick} href="javascript:;">
                    你<b>{text}</b>我,toggle
                </a>
            )
        }
    })
    ReactDOM.render(<LinkButton />,document.querySelector('#demo10'));
}

{
//2.0 默认props
    var People = React.createClass({
        propTypes:{
          name:React.PropTypes.string.isRequired
        },
        //初始化属性
        getDefaultProps(){
            return {
                name: '默认'
            }
        },
        //初始化数据
        getInitialState(){
            return {
                money: 120
            }
        },
        // ............中间有很多其它方法用来给dom提供事件，修改state, 一定要通过this.setState修改初始数据
        //用数据渲染页面
        render(){
            return <div><h3>2.0、</h3>{this.props.name + ' have ' + this.state.money + '元'}</div>
        }
    })
    ReactDOM.render(<People name="wjl"/>,document.querySelector('#demo11'));
}



































