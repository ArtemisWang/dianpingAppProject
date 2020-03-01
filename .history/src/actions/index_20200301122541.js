import {SET_FILTER,SET_TODO,TOGGLE_TODO,ADD_TODO,FETCH_TODOS_FAILURE,FETCH_TODOS_REQUEST,FETCH_TODOS_SUCCESS} from './actionTypes'
var nextTodoId=4

export const fetchTodosRequest=()=>({
    type:FETCH_TODOS_REQUEST
})

export const fetchTodosSuccess=()=>({
    type:FETCH_TODOS_SUCCESS
})

export const fetchTodosFailure=()=>({
    type:FETCH_TODOS_FAILURE
})

export const fetchTodos=()=>{
    return (dispatch)
}

export const addTodo=(text)=>({
    type:ADD_TODO,
    id:nextTodoId++,
    text
})

export const toggleTodo=(id)=>({
    type:TOGGLE_TODO,
    id
})


export const setFilter=(filter)=>({
    type:SET_FILTER,
    filter
})

export const setTodo=(text)=>({
    type:SET_TODO,
    text
})