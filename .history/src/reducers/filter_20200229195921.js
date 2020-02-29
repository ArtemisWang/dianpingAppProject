import { ADD_TODO, TOGGLE_TODO, SET_TODO, SET_FILTER } from "../actions/actionTypes"

const filter=(state='all',action)=>{
    switch(action.type){
        case SET_FILTER:
            return action.filter
        default:
            return state
    }
}