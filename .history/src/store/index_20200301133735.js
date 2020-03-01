import {createStore, applyMiddleware} from 'redux'
import rooReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'

const store=createStore(rooReducer,applyMiddleware(thunkMiddleware))

export default store