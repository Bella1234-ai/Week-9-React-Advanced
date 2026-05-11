import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        let isMounted = true;
        
        async function fetchUser() {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch user');
                }
                
                const data = await response.json();
                
                if (isMounted) {
                    setUser(data);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setLoading(false);
                }
            }
        }
        
        fetchUser();
        
        return () => {
            isMounted = false;
        };
    }, [userId]);
    
    if (loading) return <p className="loading">Loading user...</p>;
    if (error) return <p className="error">Error: {error}</p>;
    if (!user) return <p>No user found</p>;
    
    return (
        <div className="user-profile">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Company:</strong> {user.company?.name}</p>
        </div>
    );
}

export default UserProfile;