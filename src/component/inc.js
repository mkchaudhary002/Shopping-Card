import React from 'react';
// import ReactDOM from 'react-dom'


class Inc extends React.Component{
    constructor(props){
        super(props);
        this.state={counter:0}
    }
    increment(){
        
    }
    render(){
        return(
            <a href='http:google.com' onClick={this.increment}>value {this.state.counter}</a>
        )
    }
}
export default Inc;
// ReactDOM.render(
//     <Inc/>,document.getElementById('root')
// )
