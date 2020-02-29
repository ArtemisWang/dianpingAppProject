import {createStore} from 'redux'
import rooReducer from '../reducers'

const store=createStore(rooReducer)

export default store