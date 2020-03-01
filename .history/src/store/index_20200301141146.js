import {createStore, applyMiddleware,compose} from 'redux'
import rooReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

const store=createStore(rooReducer,composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store