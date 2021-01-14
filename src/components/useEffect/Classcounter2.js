import React, { Component } from 'react'

export default class Classcounter2 extends Component {
    state ={
        count:0,
        name:''
    }
    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
        console.log("updating title")
        document.title = `clicked ${this.state.count} times`
        }
    }
    handleChnage = (e) => {
        this.setState({name:e.target.value})
    }
    handleClick = (e) => {
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name}
                onChange = {this.handleChnage}
                />
                <button onClick={this.handleClick}>Click{this.state.count}</button>
            </div>
        )
    }
}
