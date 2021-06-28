// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import styled from "styled-components";
// redux hook을 불러옵니다.
import {useDispatch, useSelector} from 'react-redux';
import { Route, Link, Switch } from "react-router-dom";
import AddWord from "./AddWord";
import { withRouter } from "react-router";

const Dictionary = (props) => {
    const my_words = useSelector(state => state.words.list);
    console.log(my_words);

    return (
        <div>
        {
            my_words.map((list,index)=>{
                return(
                    <WordBox
                        key ={index}
                        onClick={()=>{
                            props.history.push("/detail/"+index);
                        }}
                        >
                        <Title>단어</Title>
                        <div>{list.word}</div>
                        <Title>설명</Title>
                        <div>{list.desc}</div>
                        <Title>예시</Title>
                        <div>{list.ex}</div>
                    </WordBox>
                );
            })
        }
         <Route  path="/addword" component={AddWord}/>
        <button onClick={()=>{
              props.history.push("/addword");
            }}>단어 추가하기</button>
            {/* <Link to="/addword">단어추가하기</Link> */}
        </div>
    );
}


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

export default withRouter(Dictionary);