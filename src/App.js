import React from 'react'
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router";
import UserPage from "./pages/UserPage";
import store, { history } from './redux/store';
const App = () => {
    return (
        <Provider store={store} >
        <ConnectedRouter history={history}>
            <Switch>

              <Route exact path="/" component={UserPage} />  
            </Switch>
        </ConnectedRouter>
    </Provider>
    )
}

export default App
