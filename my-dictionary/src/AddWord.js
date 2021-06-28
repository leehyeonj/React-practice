import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addWord} from "./redux/modules/words";

const AddWord = (props) => {
    const dispatch = useDispatch();
    const my_words = useSelector(state => state.words.list);
    const input_word = React.useRef(null);
    const input_desc = React.useRef(null);
    const input_ex = React.useRef(null);

    return (
        <div>
          <h1>단어추가하기</h1>
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
        </div>
      );
};
 
export default AddWord;
