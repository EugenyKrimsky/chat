import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import useAuth from './hooks/auth.hook';
import useRoutes from './routes';

const App = () => {
    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = Boolean(token);
    const routes = useRoutes(true); // передавать isAuthenticated, когда будет готова регистрация
    const a = new Intl()

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Router>
                {routes}
            </Router>
        </AuthContext.Provider>
    )
}

export default App