import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import AuthContext from '../context/AuthContext.jsx';
import useAuth from './hooks/auth.hook';
import useRoutes from './routes';

const App = () => {
    const {token, login, logout, userId} = useAuth();
    // const isAuthenticated = Boolean(token);
    const routes = useRoutes(true); // передавать isAuthenticated, когда будет готова регистрация

    return (
        // <AuthContext.Provider value={{
        //     token, login, logout, userId, isAuthenticated
        // }}>
            <BrowserRouter>
                {routes}
            </BrowserRouter>
        // </AuthContext.Provider>
    )
}

export default App