import {legacy_createStore} from "redux"
import { todoReducer } from "./todo/reducer"
import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    todo:todoReducer
})


export const store=legacy_createStore(rootReducer)