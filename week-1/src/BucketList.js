// 리액트 패키지를 불러온다.
import React from 'react'; 

// 함수형 컴포넌트는 이렇게 쓸 수도 있고
// function Bucketlist(props){
//     return (
//         <div>버킷 리스트</div>
//     );
// }

// 이렇게 쓸 수도 있다.. =>가 들어간 함수를 화살표 함수라고 한다.
// ()안에 props는 부모 컴포넌트부터 받아온 데이터다.
// 얘의 부모가 누구냐?
const BucketList = (props) => {

    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트)를 반환한다.
    return (
        <div>
            버킷 리스트
        </div>
    );
}

// 우리가 만든 함수형 컴포넌트를 export 해준다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있다.
export default BucketList;