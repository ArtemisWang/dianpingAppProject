import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rooReducer from './reducers'

ReactDOM.render(<App />, document.getElementById('root'));

