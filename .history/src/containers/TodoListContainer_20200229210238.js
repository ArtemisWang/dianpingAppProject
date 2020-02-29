import {connect} from 'redux'
import TodoList from '../components/TodoList'

// 连接react组件--TodoList和Redux
export default connect()(TodoList)