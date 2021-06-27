import React from "react";
import logo from "./logo.svg";
import Dictionary from "./Dictionary";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words :["히히"],
      desc: ["히히를 변형한 단어"],
      ex: ["저 친구가 초콜릿을 줬어"]
    };
    // // ref는 이렇게 선언합니다! 
    // this.text = React.createRef();
  }

  componentDidMount(){
    
  }
 
  
  render() {
    
    return (
      <div className="App">
        <Container>
          <Title>My dictionary</Title>
          <Line />
           <Dictionary words={this.state.words}
                desc = {this.state.desc}
                ex={this.state.ex} />
        </Container>

      
      </div>
    );
  }
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;