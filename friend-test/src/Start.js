import React from 'react'; 
import img from "./scc_img.jpg";

const Start = (props) => {
   
    console.log(props);
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
      <div>
          <div className="outter">
                <img src={img}/> 
                <h1>나는 <span>{props.name}</span>에 대해 얼마나 알고 있을까?</h1>
                <input className="textbox" type="text" placeholder ="내이름"/>
                <button className="btn">시작하기</button>
          </div>
      </div>
    );
}


export default Start;