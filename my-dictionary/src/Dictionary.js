// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import styled from "styled-components";


const Dictionary = (props) => {
   
    const my_words = props.words;
    const my_desc = props.desc;
    const my_ex = props.ex;


    console.log(props);
   
    return (
        <div>
            <WordBox>
                <Title>단어</Title>
                <p>{my_words}</p>
                <Title>설명</Title>
                <p>{my_desc}</p>
                <Title>예시</Title>
                <p>{my_ex}</p>
            </WordBox>
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

export default Dictionary;