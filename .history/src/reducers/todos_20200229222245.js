import { ADD_TODO, TOGGLE_TODO} from "../actions/actionTypes"

const todos=(state=[
    {id:1,text:'起床',completed:true},
    {id:2,text:'洗脸',completed:false},
    {id:3,text:'做饭',completed:false},
],action)=>{
    switch(action.type){
        case ADD_TODO:
            return [
                    ...state,
                    {
                        id:action.id,
                        text:action.text,
                        completed:false
                    }
                ]
        case TOGGLE_TODO:
            return state.map(
                    todo=>{
                        return (todo.id===action.id?{
                            ...todo,completed:!todo.completed
                        }:todo)
                    }
                )
        default:
            return state
    }
        
}

export default todos