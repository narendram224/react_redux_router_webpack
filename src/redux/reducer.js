
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './Reducers/user.reducer'
export default (history) => combineReducers({
    router: connectRouter(history),
    users: userReducer
});