import { ADD_TODO, TOGGLE_TODO, SET_TODO, SET_FILTER } from "../actions/actionTypes"

const todoApp=(state,action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        id:action.id,
                        text:action.text,
                        completed:false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos:state.todos.map(
                    todo=>{
                        todo.id===action.id?{
                            ...todo,completed:!todo.completed
                        }:todo
                    }
                )
            }
        case SET_TODO:
            return {
                ...state,
                text:action.text
            }
        case SET_FILTER:
            return {
                ...state,
                filter:action.filter
            }
        default:
            return state
    }
}

export default todoApp