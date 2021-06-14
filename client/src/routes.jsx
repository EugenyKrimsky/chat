import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatPage from './pages/ChatPage.jsx';
import AuthPage from './pages/AuthPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

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
            <Route path="/login" render={() => <AuthPage />}/>
            <Route path="/registration" render={() => <RegisterPage />}/>
            <Redirect to="/login" />
        </Switch>
    )

}

export default useRoutes;