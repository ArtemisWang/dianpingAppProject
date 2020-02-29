import { SET_TODO} from "../actions/actionTypes"

const text=(state='',action)=>{
    switch(action.type){
        case SET_TODO:
            return action.text
        default:
            return state
    }
}