import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import players from './reducers/players_reducer'
import playerFormData from './reducers/playerFormData';
import errors from './reducers/errors_reducer';

const reducers = combineReducers({players, playerFormData, errors})
const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);