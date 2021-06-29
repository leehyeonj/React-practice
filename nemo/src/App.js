import React from 'react';
import './App.css';
import styled, {keyframes} from "styled-components";

function App() {
  
  return (
    <div className="App">
     <Box></Box>
    </div>
  );
}
const boxFade = keyframes`
  0% {
    opacity: 1;
    top: 20px;

  }
  50% {
    opacity: 0;
    top: 400px;
  }
  100% {
    opacity: 1;
    top: 20px;
  }
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: green;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxFade} 2s 1s infinite linear alternate;
`;



export default App;