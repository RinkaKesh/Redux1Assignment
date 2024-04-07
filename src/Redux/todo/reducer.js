import {ADD} from "./actionType"

const defaultTodo = [{ id: Date.now(), title: "html", status: false },
{ id: 1 + Date.now(), title: "css", status: false }]

export const todoReducer = (prevState=defaultTodo, action) => {
    switch (action.type) {
        case ADD: return [...prevState, action.payload]
        default: return prevState
    }
}