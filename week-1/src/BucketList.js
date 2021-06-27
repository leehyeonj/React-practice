// 리액트 패키지를 불러온다.
import React from 'react'; 

// App.js에서 받아온 props
const BucketList = (props) => {

    const my_lists = props.list;

    console.log(props);
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트)를 반환한다.
    return (
        <div>
            {
                my_lists.map((list, index)=>{
                    return(<div key ={index}>{list}</div>);
                })
             }
        </div>
    );
}

// 우리가 만든 함수형 컴포넌트를 export 해준다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있다.
export default BucketList;