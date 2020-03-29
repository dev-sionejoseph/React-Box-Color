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

    // added this variable just to simplify syntax
    let num = this.state.clickCounter;

    this.setState({
      clickCounter: num < 5 ? num+=1 : num = 0,  //this statement checks if counter is less than 5. if so, it increments
      color: this.colorArray[num]  //use variable num as an iterator through color array.
    })

    console.log("click counter ===> ", num)
  }

  render() {
    return (
      <div className="App">
        <h1> Box color change.</h1>
        <div className="colorBox"
        style={{backgroundColor: this.state.color}}
        onClick={this.onChange}
        >
        <p>Click Here</p>
        </div>
      </div>
    )
  }
}
