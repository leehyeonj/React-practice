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
                        <Words>
                            <Line>
                                <Title>단어</Title>
                                <Word_word>{list.word}</Word_word>
                            </Line>
                            <Line>
                                 <Title>설명</Title>
                                <span>{list.desc}</span>
                            </Line>
                            <Line>
                                 <Title>예시</Title>
                                 <Word_ex>{list.ex}</Word_ex>
                            </Line>
                        </Words>
                    </WordBox>
                );
            })
        }
         <Route  path="/addword" component={AddWord}/>
        
        </div>
    );
}


const WordBox = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 100%;
    background-color: rgb(245, 243, 237);
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

const Line = styled.div`
    margin-bottom: 13px;
`;

const Words = styled.div`
    font-family: 'DungGeunMo';
    width: 90%;
    height: 100%;
    margin: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
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
    display: block;
    color: #819FF7;
    // color:slateblue;
`;


export default withRouter(Dictionary);