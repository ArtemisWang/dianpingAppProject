import {createStore} from 'redux'
import rootReducer from './reducers'
import {addTodo, toggleTodo, setFilter, setTodo} from './actions'

const store = createStore(rootReducer)