import logo from './logo.svg';
import './App.css';
import React from "react";

import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";

class App extends React.Component{
  constructor(props){
    super(props);
// state에 필요한 데이터를 넣어줘요!
    this.state = {
      name: "꼬미와 친구들",
      page: "quiz",
      scoreMsg: "이 정도면 아주 친한 친구 사이! 앞으로도 더 친하게 지내요! :)",
      list: [
        { question: "꼬미는 2살이다.", answer: "X" },
        { question: "꼬미는 남자다.", answer: "O" },
        { question: "꼬미는 딸기를 좋아한다.", answer: "O" },
        { question: "꼬미는 눈물이 많다.", answer: "O" },
        { question: "꼬미는 혼자 있을 때 잔다.", answer: "O" },
        { question: "꼬미는 수박을 좋아한다.", answer: "O" },
        { question: "꼬미는 엄마를 제일 좋아한다.", answer: "O" },
        { question: "꼬미는 3KG이다.", answer: "X" },
        { question: "꼬미는 귀엽다.", answer: "O" },
        { question: "꼬미는 풀을 좋아한다.", answer: "O" },
        { question: "꼬미는 청소기를 무서워한다.", answer: "O" },
      ],
      ranking: [
        { rank: 1, name: "이현주", message: "꼬미♥" },
        { rank: 1, name: "이현주", message: "꼬미♥" },
        { rank: 1, name: "이현주", message: "꼬미♥" },
        { rank: 1, name: "이현주", message: "꼬미♥" },
        { rank: 1, name: "이현주", message: "꼬미♥" },
        { rank: 1, name: "이현주", message: "꼬미♥" },
        { rank: 1, name: "이현주", message: "꼬미♥" },
      ],
    };
  }

  render () {
    return (
      <div className="App">
        {/* 조건부 랜더링을 합니다 / state의 page를 바꿔가면서 확인해봐요! */}
        {this.state.page === "quiz" && (<Quiz list={this.state.list} />)}
        {this.state.page === "start" && (<Start name={this.state.name} />)}
        {this.state.page === "score" && (<Score name={this.state.name} scoreMsg={this.state.scoreMsg}/>)}
      </div>
    );
  }
}

export default App;