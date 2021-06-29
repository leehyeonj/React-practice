import React from "react";
import { useDispatch} from "react-redux";
import {addDic} from "./redux/modules/words";
import styled from "styled-components";

const AddWord = (props) => {
    const dispatch = useDispatch();
    // const my_words = useSelector(state => state.words.list);
    const input_word = React.useRef(null);
    const input_desc = React.useRef(null);
    const input_ex = React.useRef(null);

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
          </Body>
         <Btn>
              <Button onClick={() => {
                  let my_add_word = {
                    word: input_word.current.value,
                    desc: input_desc.current.value,
                    ex: input_ex.current.value,
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
export default AddWord;
