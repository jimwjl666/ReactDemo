import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
/*
* 代码说明
*react生命周期   Mounting (已插入)\  Updating（正在重新渲染） \Unmounting （移除真实DOM）
*
*在componentDidMount 方法中进行 ajax等异步操作
*
*
* */
var UserGist=React.createClass({
    getInitialState(){
        return{
            username:'',
            lastGistUrl:''
        }
    },
    componentDidMount(){
        this.request=$.get(this.props.apiUrl,function(re){
            var lastGist=re[0];
            //console.log(this);//此时的this 是ajax对象
            this.setState({username:lastGist.owner.login,lastGistUrl:lastGist.owner.gists_url});
        }.bind(this))
    },
    componentWillUnmount(){
        this.request.abord();
    },
    render(){
        return(
            <div>
                {this.state.username}用户最新的Gist共享地址：
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
            </div>
        )
    }
})
ReactDOM.render(<UserGist apiUrl="https://api.github.com/users/octocat/gists"/>,document.getElementById('demo1'));

