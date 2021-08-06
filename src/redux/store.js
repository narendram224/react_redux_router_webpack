import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from"redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from './reducer';

export const history = createBrowserHistory({
    basename:'/'
})
const store = createStore(
    reducer(history),
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history),thunk)
    )

);

export default store;