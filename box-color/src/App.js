import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'] 

    this.state = {
      color: this.colorArray[0],
      clickCounter: 0
    }
    
    this.onChange = this.onChange.bind(this);
  }

  
  onChange = (e) => {

    
    let num = this.state.clickCounter;

    this.setState({
      clickCounter: this.state.clickCounter < 5 ? this.state.clickCounter+=1 : this.state.clickCounter = 0,
      color: this.colorArray
    })

    console.log("click counter ===> ", this.state.clickCounter)
  }

  render() {
    return (
      <div className="App">
        <h1> Box color change .</h1>
        <div              className="colorBox"
        style={{backgroundColor: this.colorArray[this.state.clickCounter]}}
        onClick={this.onChange}
        >
        <p>Click Here</p>
        </div>
      </div>
    )
  }
}
