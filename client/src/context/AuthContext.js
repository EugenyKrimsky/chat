import { createContext } from 'react';

function noop() {};

const AuthContext = createContext({
    token: null,
    userId: null,
    userLogin: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})

export default AuthContext