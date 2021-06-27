// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import styled from "styled-components";


const Dictionary = (props) => {
    const my_words = props.words;

    return (
        // <WordBox>
        //     <Title>단어</Title>
        //    {
        //     my_words.map((l,idx)=>{
        //        return <div key={idx}>{l.word}</div>
        //    })}
        //    <Title>설명</Title>
        //    {
        //     my_words.map((l,idx)=>{
        //        return <div key={idx}>{l.desc}</div>
        //    })}
        //     <Title>예시</Title>
        //    {
        //     my_words.map((l,idx)=>{
        //        return <div key={idx}>{l.ex}</div>
        //    })}
        // </WordBox>
        <div>
        {
            my_words.map((l,idx)=>{
                return(
                    <WordBox>
                        <Title>단어</Title>
                        <div key={idx}>{l.word}</div>
                        <Title>설명</Title>
                        <div key={idx}>{l.desc}</div>
                        <Title>예시</Title>
                        <div key={idx}>{l.ex}</div>
                    </WordBox>
                );
            })
        }
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