export const getText=(state)=>state.text

export const getFilter=(state)=>state.filter

export const getVidibleTodos=(todos, filter)=>{
    switch(filter){
        case 'all':
            return todos
        case 'completed':
            return todos.filter(todo=>{return todo.completed})
        case 'active':
            return todos.filter(todo=>{return !todo.completed})
        default:
            return new Error(`Unknown filter: ${filter}`)
    }
}