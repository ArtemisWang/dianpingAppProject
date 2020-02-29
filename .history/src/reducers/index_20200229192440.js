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
        case SET_TODO:
        case SET_FILTER:
    }
    return state
}