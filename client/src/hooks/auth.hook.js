import {useState, useCallback, useEffect} from 'react';

const storageName = 'userData';

const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userLogin, setUserLogin] = useState(null);

    const login = useCallback((jwtToken, id, ulogin) => {
        setToken(jwtToken);
        setUserId(id);
        setUserLogin(ulogin);
        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken, userLogin: ulogin
        }))
    }, []);
    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setUserLogin(null);
        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.token) {
            login(data.token, data.userId, data.login);
        }
    }, [login])

    return {login, logout, token, userId, userLogin} 
}

export default useAuth