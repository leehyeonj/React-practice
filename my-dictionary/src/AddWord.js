import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addWord} from "./redux/modules/words";
import styled from "styled-components";

const AddWord = (props) => {
    const dispatch = useDispatch();
    const my_words = useSelector(state => state.words.list);
    const input_word = React.useRef(null);
    const input_desc = React.useRef(null);
    const input_ex = React.useRef(null);

    return (
        <Container>
          <div>
              <p>단어추가하기</p>
          </div>
          <Body>
            <div>
                <p>단어</p>
                <input ref={input_word} type="text"/>
            </div>
            <div>
                <p>설명</p>
                <input ref={input_desc} type="text"/>
            </div>
            <div>
                <p>예시</p>
                <input ref={input_ex} type="text"/>
            </div>
          </Body>
         <div>
              <button onClick={() => {
                  let my_add_word = {
                    word: input_word.current.value,
                    desc: input_desc.current.value,
                    ex: input_ex.current.value,
                  };
                  dispatch(addWord(my_add_word));
                  props.history.goBack();
              }
                
              }>추가하기</button>
              <button onClick={()=>{
                props.history.goBack();
              }}>뒤로가기</button>
          </div>
        </Container>
      );
};
 
const Container = styled.div`
  margin: 0 auto;
  text-align:center;
`;

const Body = styled.div`
  text-align:center;
  display:block;
  padding: 20px;
`;

const Btn = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default AddWord;
