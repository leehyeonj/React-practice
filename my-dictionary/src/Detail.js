// 리액트 패키지를 불러옵니다.
import React ,{ Component } from "react";
import styled from "styled-components";
// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";
// 내가 만든 액션 생성 함수를 불러옵니다.
import {deleteDic} from "./redux/modules/words";


const Detail = (props) => {
    const dispatch = useDispatch();
    
    
  // 스토어에서 상태값 가져오기
  const word_list = useSelector((state) => state.words.list);
  // url 파라미터에서 인덱스 가져오기
  let words_index = parseInt(props.match.params.index);


  return (
      
    <div>

            <WordBox
                color={word_list[words_index].color}>
                <Words>
                    <div>
                        <Title>단어</Title>
                        <Word_word>{word_list[words_index].word}</Word_word>
                    </div>
                    <div>
                        <Title>설명</Title>
                        <span>{word_list[words_index].desc}</span>
                    </div>
                    <div>
                    <Title>예시</Title>
                    <Word_ex>{word_list[words_index].ex}</Word_ex>
                    </div>
                </Words>
            </WordBox>
            
            <Btn>
                <Button onClick={()=>{  
                    dispatch(deleteDic(words_index));
                    props.history.goBack();}
                }>삭제하기</Button>
                
                <Button onClick={()=>{
                    props.history.goBack();
                }}>뒤로가기</Button>
              </Btn>
         </div>
    
   
  );
};

const WordBox = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 100%;
    background-color: ${(props)=> props.color};
    border-radius: 20px;
    box-shadow: 0 1px 5px rgb(198, 197, 197);
   
`;

const Title = styled.span`
    font-size: 0.7rem;
    text-decoration: underline;
    display: block;
    margin-top:2px;
    margin-bottom: 5px;
`;


const Words = styled.div`
    font-family: 'DungGeunMo';
    width: 90%;
    height: 100%;
    margin: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    
`;
const Word_word = styled.span`
    font-size: 1.5rem;
    display: block;
`;

const Word_ex = styled.span`
    font-size: 1.1rem;
    display: block;
    color: #819FF7;
    // color:slateblue;
`;

const Btn = styled.div`
    display:flex;
    flex-direction: column;
    margin: 20px;
    margin-left: 40px;
`;

const Button= styled.button`
    height: 50px;
    width: 200px;
    margin: 5px;
    border-radius: 20px;
    background-color: #819FF7;
    font-size: 1.1rem;
    font-family: 'DungGeunMo';
    color: white;
    &:hover{
        background-color: #5858FA;
    }
`;


export default Detail;