import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        let isMounted = true;
        
        async function fetchData() {
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch(url, options);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const json = await response.json();
                
                if (isMounted) {
                    setData(json);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }
        
        fetchData();
        
        return () => {
            isMounted = false;
        };
    }, [url]);
    
    const refetch = () => {
        setLoading(true);
        // Trigger re-fetch by updating a dependency could be done with a counter
    };
    
    return { data, loading, error, refetch };
}

export default useFetch;