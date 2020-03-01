export const getText=(state)=>state.text

export const getFilter=(state)=>state.filter

export const getVidibleTodos=(state)=>{
    const {todos:{data},filter}=state
    // console.log('getVidibleTodos')
    switch(filter){
        case 'all':
            return data
        case 'completed':
            return data.filter(todo=>{return todo.completed})
        case 'active':
            return data.filter(todo=>{return !todo.completed})
        default:
            return new Error(`Unknown filter: ${filter}`)
    }
}