import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url, { ...options, signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message || 'Something went wrong');
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
