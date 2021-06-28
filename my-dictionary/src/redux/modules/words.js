const GET_WORD = "words/GET_WORD";
const ADD_WORD = "words/ADD_WORD";
const DELETE_WORD = "words/DELETE_WORD";


const initialState = {
    list : [
        {word: "ㅎ1ㅎ1", desc: "히히를 변형한 단어", ex:"저 친구가 초콜릿을 줬어."},
        {word: "데이식스", desc: "i just", ex:"예아!"},
      ],
}

// Action creator
export const getWord = (words)=>{
    return {type: GET_WORD, words};
}
export const addWord = (words)=>{
    return {type: ADD_WORD, words};
}

export const deleteWord = (words)=>{
    return {type: DELETE_WORD, words};
}

// reducer
export default function reducer(state = initialState, action = {}){
    switch(action.type){
        case "words/GET_WORD":{
            return state;
        }

        case "words/ADD_WORD":{
            const new_word_list = [...state.list, action.words];
            return {list: new_word_list};
        }
        case "words/DELETE_WORD":{
            // 원래 인덱스랑 바뀐 인덱스가 같으면 안바꾸고 다르면 바꾼다.
            const word_list = state.list.filter((l, idx)=>{
                if(idx != action.words){
                    return l;
                }
            });
            return {list: word_list};
        }
        default: 
            return state;
    }
}