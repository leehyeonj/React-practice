// Action만들기
const LOAD   = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';
const UPDATE = 'bucket/UPDATE';
// 초기값
const initialState = {
    list: [
    { text: "영화관 가기", completed: false },
    { text: "매일 책읽기", completed: false },
    { text: "수영 배우기", completed: false },
],
};

// Action 생성함수
// 액션을 반환해준다.
// 이 액션함수들을 컴포넌트에서 불러올 수 있게 export를 붙여준다.
// 여기서는 bucket을 안줘도 됨
export const loadBucket = (bucket)=>{
    return {type:LOAD, bucket};
}

// 무슨 데이터 추가할지 데이터도 들어가야한다.
// 여기서는 input 박스에서 텍스트를 가지고 와서 그 데이터를 추가한다.
// bucket이 그 텍스트이다.
export const createBucket= (bucket)=>{
    return {type: CREATE, bucket}
}

export const deleteBucket= (bucket)=>{
    return {type: DELETE, bucket}
}

export const updateBucket= (bucket)=>{
    return {type: UPDATE, bucket}
}

// Reducer
// 이 파일에서는 기본적으로 이 리듀서를 export해준다.
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
     case "bucket/LOAD":{
        //  여기서는 기본값을 로드해오면 됨
         return state;
     }
     case "bucket/CREATE":{
        const new_bucket_list = [...state.list, {text: action.bucket, completed: false }];
        return {list: new_bucket_list};
    }
    case "bucket/DELETE":{
        // 원래 인덱스랑 바뀐 인덱스가 같으면 안바꾸고 다르면 바꾼다.
        const bucket_list = state.list.filter((l, idx)=>{
            if(idx != action.bucket){
                return l;
            }
        });
        return {list: bucket_list};
    }

    case "bucket/UPDATE":{
        const bucket_list = state.list.map((l, idx)=>{
            if(idx === action.bucket){
                return {...l, completed:true};
            }else{
                return l;
            }
        });
        return {list: bucket_list};
    }
    default:
        return state;
  }
}

