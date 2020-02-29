import {connect} from 'redux'
import TodoList from '../components/TodoList'

const getVidibleTodos=(todos, filter)=>{
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

const mapStateToProps=(state)=>({
    todos:state.todos
})

const mapDispatchToProps=()=>{
    
}

// 连接react组件--TodoList和Redux
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)