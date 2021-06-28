import {createStore, combineReducers} from "redux";
import words from "./modules/words";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

// 한 프로젝트에 스토어는 한개 / 스토어에 리듀서 한개
// 리듀서가 여러개이면 combineReducers에 뭉쳐줘야한다.
const rootReducer = combineReducers({words});

const store = createStore(rootReducer);

export default store;