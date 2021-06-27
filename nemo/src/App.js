import React from "react";
import Nemo from "./Nemo";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
    this.div = React.createRef();
  }

  hoverEvent = (e)=>{
    e.target.style.background = "#eee";
  }
  // DOM이 다 만들어지고 나서 이벤트리스너 등록
  componentDidMount() {
    this.div.current.addEventListener("mouseover", this.hoverEvent);
  }

  // DOM이 없어지면 구독 해제
  componentWillUnmount(){
    this.div.current.removeEventListener("mouseover", this.hoverEvent);
  }

  render() {
  

    return (
      <div className="App" ref={this.div}>
        <Nemo/>
      </div>
    );
  }
}

export default App;