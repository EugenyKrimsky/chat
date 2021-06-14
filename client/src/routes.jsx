import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatPage from './pages/ChatPage.jsx';
import AuthPage from './pages/AuthPage.jsx'

const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <ChatPage />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/AuthPage" exact>
                <AuthPage />
            </Route>
        </Switch>
    )

}

export default useRoutes;