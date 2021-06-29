import React from "react";
import { withRouter } from "react-router";
import { Route, Link, Switch } from "react-router-dom";

import Dictionary from "./Dictionary";
import AddWord from "./AddWord";
import Detail from "./Detail";
import styled from "styled-components";
import plusbtn from "./button.png"
import {connect} from "react-redux";
import { loadDic} from "./redux/modules/words";

import {firestore} from "./firebase";
import './App.css';
import './style.css';


// 리덕스에 있는 상태값을 props형태로 app에 넣어줌
const mapStateToProps = (state)=>{
  return {words_list : state.words.list};

}

// 액션 생성을 감시하는 것 액션 반환 .
const mapDispatchToProps = (dispatch)=>{
  return{
    load: ()=>{
      dispatch(loadDic());
    },

    
  };
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    // // ref는 이렇게 선언합니다! 
    // this.text = React.createRef();
  }

  componentDidMount(){
    this.props.load();
  }
 
  
  render() {
    
    return (
      <Div className="App">
        <Container>
          <Title>My dictionary</Title>
          
          {/* 처음부터 딕셔너리에 words를 넘겨줘야 dictionary에서 쓸 수 있음 */}
          <div className="wordsBox">
              <Switch>
              <Route
                path="/"
                exact
                render={(props) => 
                <Dictionary 
                words_list={this.props.words_list} 
                history={this.props.history}/>}
              />
              <Route  path="/addword" component={AddWord}/>
              {/* <Link to="/addword">단어추가하기</Link> */}
              <Route path="/detail/:index" component={Detail}/>
              </Switch>
          </div>
          <PlusBtn>
            <img className = "plusBtn" src = {plusbtn}
                onClick={()=>{
                  this.props.history.push("/addword");
                }}/>
          </PlusBtn>
         
        </Container>
              
      
      </Div>
    );
  }
}

const Div = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color :#FBE081;
  padding: 10px;

`;

const Container = styled.div`
  max-width: 350px;
  height: 80vh;
  background-color: #fff;
  margin:50px auto;
  border-radius: 20px;
  border: 1px solid #ddd;
  box-shadow: 80px 50px 100px  #F8D665;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
  font-family: 'DungGeunMo';
  font-size: 2.3rem;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const PlusBtn = styled.div`
  text-align : center;
  
`;
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));