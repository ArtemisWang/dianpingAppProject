import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'

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
    todos:getVidibleTodos(state.todos.data,state.filter)
})

const mapDispatchToProps=(dispatch)=>({
    toggleTodo: id=>dispatch(toggleTodo(id))
})

// 连接react组件--TodoList和Redux
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)