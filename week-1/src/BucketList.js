import React from 'react'; 
import styled from "styled-components";
 
 
const BucketList = (props) => {
    // 부모의 state에 있는 list 를 가져온다.
    const my_lists = props.list;
 
    console.log(props);
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <ListStyle>
            {
                my_lists.map((list, index) => {
                    // 콘솔을 확인해봅시다 :)
                    console.log(list);
                    return (<ItemStyle key={index}>{list}</ItemStyle>);
                })
            }
        </ListStyle>
    );
}
 
 
const ListStyle = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
`;
 
const ItemStyle = styled.div`
        padding: 16px;
        margin: 8px;
        background-color: aliceblue;
`;
// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;