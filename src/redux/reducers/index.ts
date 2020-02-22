import {combineReducers} from "redux";
import {countReducer} from './counter';

export const rootReducer = combineReducers({
  counter: countReducer
});

export type RootState = ReturnType<typeof rootReducer>

