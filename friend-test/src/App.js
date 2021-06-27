import React from "react";
import logo from './logo.svg';
import './style.css';
import Start from "./Start";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: "꼬미"
    };
  }

  render () {
    return (
    <div className="App">
      <Start name={this.state.name}/>
    </div>
    )
  }
}

export default App;
