import {createStore} from 'redux'
import rootReducer from './reducers'
import {addTodo, toggleTodo, setFilter, setTodo} from './actions'

const store = createStore(rootReducer)
// 初始化state
console.log(store.getState())

// 订阅state的变化
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addTodo('Learn and actions'))
store.dispatch(toggleTodo(0))
store.dispatch(setFilter('active'))
store.dispatch(setTodo('Learn'))

// 取消订阅
unsubscribe()