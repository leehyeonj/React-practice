import {firestore} from "../../firebase";

const word_db = firestore.collection("myDictionary");

const GET_WORD = "words/GET_WORD";
const ADD_WORD = "words/ADD_WORD";
const DELETE_WORD = "words/DELETE_WORD";
const LOADED = "words/LOADED";

const initialState = {
    list : [ ],
    is_loaded: false,
    
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

export const isLoaded = (loaded) => {
    return {type: LOADED, loaded}
  }

// 파이어베이스 미들웨어
export const loadDic = ()=>{
    return function(dispatch){
        word_db.get().then((docs)=>{
            let words_data = [];

            docs.forEach((doc)=>{
                if(doc.exists){
                    words_data = [...words_data, {id: doc.id, ...doc.data()}]
                }
            })
            dispatch(getWord(words_data));
        });
    };
};

export const addDic = (words) =>{
    return function (dispatch){
        let words_data = {word:words.word, desc:words.desc, ex:words.ex, password:words.password , color:words.color};

        dispatch(isLoaded(false));
        word_db.add(words_data).then(docRef =>{
            words_data = {...words_data, id: docRef.id};
            dispatch(addWord(words_data));
            dispatch(isLoaded(true));
        })
    }
}

export const deleteDic = (words) =>{
    return function(dispatch, getState){
        const words_data = getState().words.list[words];
        dispatch(isLoaded(false));
        if(!words_data.id){
            return;
        }
        word_db.doc(words_data.id).delete().then((docRef) =>{
            dispatch(deleteWord(words));
            dispatch(isLoaded(true));
        }).catch(error=>{
            console.log(error);
        });
    }
}


// reducer
export default function reducer(state = initialState, action = {}){
    switch(action.type){
        case "words/GET_WORD":{
            if(action.words.length>0){
                return {list: action.words, is_loaded:true};
            }  
            return state;
        }

        case "words/ADD_WORD":{
            const new_word_list = [ action.words,...state.list];
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
        case "words/LOADED": {

            return {...state, is_loaded: action.loaded};
          }
        default: 
            return state;
    }
}