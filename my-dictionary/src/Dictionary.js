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
                            <div>
                                <Title>단어</Title>
                                <Word_word>{list.word}</Word_word>
                            </div>
                            <div>
                                 <Title>설명</Title>
                                <span>{list.desc}</span>
                            </div>
                            <div>
                                 <Title>예시</Title>
                                 <Word_ex>{list.ex}</Word_ex>
                            </div>
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
    height: 200px;
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


const Words = styled.div`
    font-family: 'DungGeunMo';
    width: 90%;
    height: 80%;
    margin: 20px;
    padding-top: 5px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    
`;
const Word_word = styled.span`
    font-size: 1.5rem;
    display: block;
`;

const Word_ex = styled.span`
    font-size: 1.1rem;
    display: block;
    color: darkgray;
`;


export default withRouter(Dictionary);