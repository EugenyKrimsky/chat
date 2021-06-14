import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatPage from './pages/ChatPage.jsx';
import AuthPage from './pages/AuthPage.jsx'

const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/" render={() => <ChatPage />}/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/AuthPage" render={() => <AuthPage />}/>
            <Redirect to="/AuthPage" />
        </Switch>
    )

}

export default useRoutes;