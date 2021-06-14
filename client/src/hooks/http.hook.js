import {useState, useCallback} from 'react'

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);
        try {
            const response = await fetch(url, {
                method, body, headers
            })
            const data = response.json();

            if (!resonse.ok) {
                throw new Error(data.message || 'Something went wrong')
            }

            setLoading(false);

            return data
        } catch(e) {
            setLoading(false);
            setError(e.message);
            throw e
        }
    }, [])

    const clearError = () => setError(null);

    return {loading, request, error, clearError}
}

export default useHttp