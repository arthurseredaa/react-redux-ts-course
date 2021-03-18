import { TodoReducer } from './todoReducer';
import { userReducer } from './userReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({user: userReducer, todo: TodoReducer});

export type RootState = ReturnType<typeof rootReducer>
