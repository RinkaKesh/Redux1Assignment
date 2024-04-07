
import {ADD} from "./actionType"

export const add=(newTodo)=>{
    return{
        type:ADD,payload:newTodo
    }

}