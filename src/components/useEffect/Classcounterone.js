import React, { Component } from 'react'

export default class Classcounterone extends Component {
    state={
        count:0
    }
    handleClick = () => {
        this.setState({count:this.state.count+1})
    }
    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
        document.title = `clicked ${this.state.count} times`
    }
    render() {
        const {count} = this.state;
        return (
            <div>
              <button onClick={this.handleClick}>Click me! you clciked {count}times</button>  
            </div>
        )
    }
}
