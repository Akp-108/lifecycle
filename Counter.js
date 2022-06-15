import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
      console.log("this is the componentdidmount")
      // This render only once when the componert get mounded 
      console.log("________________________")
    }
    componentDidUpdate(){
      console.log("this is the componentdidupdate")
      console.log("________________________")
     
      /// we can also perform sideEffect in side this
      // it render  always  when the the  state changed and component get updated
    }
    componentDidUnmount(){
      // console.log("this is the componentDidunmount ")
      // it render when we remove or Unmount the componet 
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count : this.state.count+1})}>Incement</button>
        <button onClick={()=>this.setState({count : this.state.count-1})}>Decrement</button>
      </div>
    )
  }
}
