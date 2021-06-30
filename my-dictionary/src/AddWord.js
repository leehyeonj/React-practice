import React, { useState }  from "react";
import { useDispatch} from "react-redux";
import {addDic} from "./redux/modules/words";
import styled from "styled-components";
import './style.css';
const AddWord = (props) => {
    const dispatch = useDispatch();
    // const my_words = useSelector(state => state.words.list);
    const input_word = React.useRef(null);
    const input_desc = React.useRef(null);
    const input_ex = React.useRef(null);
    const input_password = React.useRef(null);
    let boxcolor = 'rgb(245, 243, 237)';

    return (
        <Container>
          {/* <Title>
              <h1>단어추가하기</h1>
          </Title> */}
          <Body>
            <div>
                <Input_title>단어</Input_title>
                <Input_word ref={input_word} type="text"/>
            </div>
            <div>
                <Input_title>설명</Input_title>
                <Input_desc ref={input_desc} type="text"/>
            </div>
            <div>
                <Input_title>예시</Input_title>
                <Input_desc ref={input_ex} type="text"/>
            </div>
            <div>
                <Input_title>비번</Input_title>
                <Input_word ref={input_password} type="password"/>
            </div>
      
            <ColorSet>
              <div onClick ={()=>{boxcolor='#FBE081'}} ></div>

              <div onClick ={()=>{ boxcolor='#F6E1E1' }} ></div>

              <div onClick ={()=>{ boxcolor='#D5E5F6'}} ></div>
            </ColorSet>
          </Body>
         <Btn>
              <Button onClick={() => {
                  let my_add_word = {
                    word: input_word.current.value,
                    desc: input_desc.current.value,
                    ex: input_ex.current.value,
                    password : input_password.current.value,
                    color: boxcolor,
                  };
                  dispatch(addDic(my_add_word));
                  props.history.goBack();
              }
                
              }>추가하기</Button>
              <Button onClick={()=>{
                props.history.goBack();
              }}>뒤로가기</Button>
        </Btn>
        </Container>
      );
};
 
const Container = styled.div`
  margin: 0 auto;
  text-align:center;
  font-family: 'DungGeunMo';
`;

const Title = styled.div`
  padding-top:10px;
`;

const Body = styled.div`
  text-align: left;
  display:block;
  padding: 50px 20px 20px 20px;
  padding-left: 40px;
`;

const Input_title = styled.p`
  font-size: 0.7rem;
  text-decoration: underline;
`;
const Input_word = styled.input`
  width: 200px;
  height: 20px;
  font-family: 'DungGeunMo';
`;
const Input_desc = styled.input`
  width: 200px;
  height: 40px;
  font-family: 'DungGeunMo';
`;
const Btn = styled.div`
    display:flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-left: 40px;
`;

const Button= styled.button`
    height: 40px;
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

const ColorSet = styled.div`
    height: 30px;
    margin-top: 10px;
    display:flex;
    & : first-child{
      height:20px;
      width: 20px;
      border-radius: 15px;
      background-color: #FBE081;
      box-shadow: 0 1px 5px rgb(198, 197, 197);
      margin-right: 5px;
    }
    & : nth-child(2){
      height: 20px;
      width: 20px;
      border-radius: 15px;
      background-color: #F6E1E1;
      box-shadow: 0 1px 5px rgb(198, 197, 197);
      margin-right: 5px;
    }
    & : nth-child(3){
      height:20px;
      width: 20px;
      border-radius: 15px;
      background-color: #D5E5F6;
      box-shadow: 0 1px 5px rgb(198, 197, 197);
      margin-right: 5px;
    }
    // & div:hover{
    //   height: 30px;
    //   width: 30px;
    //   border-radius: 15px;
    // }
`;

export default AddWord;
