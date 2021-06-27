import React from "react";
 
const AddWord = (props) => {
 
    return (
        <div>
          <h1>단어추가하기</h1>
          <div>
              <p>단어</p>
              <input type="text"/>
          </div>
          <div>
              <p>설명</p>
              <input type="text"/>
          </div>
          <div>
              <p>예시</p>
              <input type="text"/>
          </div>
          <button onClick={() => {props.history.goBack();}}>뒤로가기</button>
        </div>
      );
};
 
export default AddWord;
