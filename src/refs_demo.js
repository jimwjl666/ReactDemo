import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
   constructor(){
        super();
   }
    handerClick(){
        this.refs.test.focus();
        this.refs.test.value='123';
    }

    render(){
        return(
            <div>
                <input type="text" ref="test"/>
                <input type="button" value="点击我给文本框赋值" onClick={this.handerClick.bind(this)}/>
            </div>
        )
    }
}
ReactDOM.render(<MyComponent/>,document.querySelector('#refs'));