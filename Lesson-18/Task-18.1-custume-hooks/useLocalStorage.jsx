import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    // Get initial value from localStorage or use provided default
    const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });
    
    // Update localStorage when value changes
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, value]);
    
    // Return value and setter, plus a remove function
    const remove = () => {
        try {
            localStorage.removeItem(key);
            setValue(initialValue);
        } catch (error) {
            console.warn(`Error removing localStorage key "${key}":`, error);
        }
    };
    
    return [value, setValue, remove];
}

export default useLocalStorage;