import React,{useState} from 'react';
import styled from 'styled-components';

function App() {
  const [blue, setBlue] = useState(false);
  const [red, setRed] = useState(false);
  const [yellow, setYellow] = useState(false);



  return (
    <Div>
        <BlueCircle
            color='blue'
            size={blue}
            onClick={() => {
                setBlue(!blue);
                red && setRed(!red);
                yellow && setYellow(!yellow);
            }}
        ></BlueCircle>
        <RedCircle
            color='red'
            size={red}
            onClick={() => {
                setRed(!red);
                blue && setBlue(!blue);
                yellow && setYellow(!yellow);
            }}
        ></RedCircle>
        <YellowCircle
            color='yellow'
            size={yellow}
            onClick={() => {
                setYellow(!yellow);
                blue && setBlue(!blue);
                red && setRed(!red);
            }}
        ></YellowCircle>
    </Div>
);
};
    



const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    gap: 30px;
`;

const BlueCircle = styled.div`
    width: ${(props) => (props.size ? '200px' : '100px')};
    height: ${(props) => (props.size ? '200px' : '100px')};
    transition: all 400ms;
    background-color: ${(props) => props.color};
    border-radius: 50%;
`;

const RedCircle = styled.div`
    width: ${(props) => (props.size ? '200px' : '100px')};
    height: ${(props) => (props.size ? '200px' : '100px')};
    transition: all 400ms;
    background-color: ${(props) => props.color};
    border-radius: 50%;
`;

const YellowCircle = styled.div`
    width: ${(props) => (props.size ? '200px' : '100px')};
    height: ${(props) => (props.size ? '200px' : '100px')};
    transition: all 400ms;
    background-color: ${(props) => props.color};
    border-radius: 50%;
`;
export default App;