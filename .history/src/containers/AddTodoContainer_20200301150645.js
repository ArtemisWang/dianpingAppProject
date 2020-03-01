import {connect} from 'react-redux'
import AddTodo from '../components/AddTodo'
import { setTodo, addTodo } from '../actions'
import {getText} from '../selectors'

const mapStateToProps=state=>({
    text:state.text
})

const mapDispatchToProps=dispatch=>({
    addTodo: text=>dispatch(addTodo(text)),
    setTodo: text=>dispatch(setTodo(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)