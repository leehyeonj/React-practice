// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";
// 내가 만든 액션 생성 함수를 불러옵니다.
import {deleteWord} from "./redux/modules/words";

const Detail = (props) => {
    const dispatch = useDispatch();
    
    
  // 스토어에서 상태값 가져오기
  const word_list = useSelector((state) => state.words.list);
  // url 파라미터에서 인덱스 가져오기
  let words_index = parseInt(props.match.params.index);

  
  return (
      
    <div>
        <WordBox>
            <Title>단어</Title>
            <div >{word_list[words_index].word}</div>
            <Title>설명</Title>
            <div >{word_list[words_index].desc}</div>
            <Title>예시</Title>
            <div >{word_list[words_index].ex}</div>
            </WordBox>
            <button onClick={() => {
                dispatch(deleteWord(words_index));
                props.history.push("/");
            }}>삭제하기</button>
             <button onClick={()=>{
                props.history.goBack();
              }}>뒤로가기</button>
         </div>
    
   
  );
};

const WordBox = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 200px;
    background-color: #eee4f5;
`;

const Title = styled.p`
    font-size: 0.7rem;
    text-decoration: underline;

`;

export default Detail;