import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo,fetchTodos } from '../actions'
import {getVidibleTodos} from '../selectors'
 

const mapStateToProps=(state)=>({
    todos:getVidibleTodos(state.todos.data,state.filter)
})

const mapDispatchToProps=(dispatch)=>({
    toggleTodo: id=>dispatch(toggleTodo(id)),
    fetchTodos: ()=>dispatch(fetchTodos())
})

// 连接react组件--TodoList和Redux
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)