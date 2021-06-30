// import React, { Component } from 'react';
// import Modal from './Modal';

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       modalOpen: false,
//     };

   
//   }

//     openModal = () => {
//         this.setState({ modalOpen: true })
//     }
//     closeModal = () => {
//         this.setState({ modalOpen: false })
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <button onClick={ this.openModal }> 모달팝업</button>
//                 <Modal open={ this.state.modalOpen } close={ this.closeModal } title="Create a chat room">
//                     진짜? <main> { this.props.children } </main>
                    
//                     <input
//                     name="email"
//                     className="loginId"
//                     type="text"
//                     placeholder="아이디"
//                     onChange={this.loginHandler}
//                   />
//                 </Modal>
//             </React.Fragment>
//         )
//     }
// }
// export default App

import React, { useState } from 'react';
import styled from 'styled-components';
​
function App() {
	const [blue, setBlue] = useState(false);
	const [red, setRed] = useState(false);
	const [yellow, setYellow] = useState(false);
​
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
}
​
const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 500px;
	gap: 30px;
`;
​
const BlueCircle = styled.div`
	width: ${(props) => (props.size ? '200px' : '100px')};
	height: ${(props) => (props.size ? '200px' : '100px')};
	transition: all 400ms;
	background-color: ${(props) => props.color};
	border-radius: 50%;
`;
​
const RedCircle = styled.div`
	width: ${(props) => (props.size ? '200px' : '100px')};
	height: ${(props) => (props.size ? '200px' : '100px')};
	transition: all 400ms;
	background-color: ${(props) => props.color};
	border-radius: 50%;
`;
​
const YellowCircle = styled.div`
	width: ${(props) => (props.size ? '200px' : '100px')};
	height: ${(props) => (props.size ? '200px' : '100px')};
	transition: all 400ms;
	background-color: ${(props) => props.color};
	border-radius: 50%;
`;
​
export default App;