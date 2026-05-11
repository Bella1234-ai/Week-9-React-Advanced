import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    // Runs after every render
    useEffect(() => {
        console.log('Effect ran! Count is:', count);
    });
    
    // Runs only on mount (empty dependency array)
    useEffect(() => {
        console.log('Component mounted!');
        return () => console.log('Component unmounted!');
    }, []);
    
    // Runs when count changes
    useEffect(() => {
        console.log('Count changed to:', count);
        document.title = `Count: ${count}`;
    }, [count]);
    
    // Cleanup function with interval
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Tick');
        }, 1000);
        
        return () => {
            clearInterval(interval);
            console.log('Cleaned up interval!');
        };
    }, []);
    
    return (
        <div className="counter-container">
            <p className="count-display">Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>
                Reset
            </button>
        </div>
    );
}

export default Counter;