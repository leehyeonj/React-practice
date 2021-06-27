import React from "react";
 
const AddWord = (props) => {
 
    return (
        <div>
          <h1>상세페이지입니다.</h1>
          <button onClick={() => {props.history.goBack();}}>뒤로가기</button>
        </div>
      );
};
 
export default AddWord;
