import { useState, useEffect } from 'react';
import PostCard from './PostCard';
import LoadingSpinner from '../task-17.4-loading-error/LoadingSpinner';
import ErrorMessage from '../task-17.4-loading-error/ErrorMessage';
import styles from './PostList.module.css';

function PostList({ limit = 10, onPostSelect }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchPosts = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
            );
            
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            
            const data = await response.json();
            setPosts(data);
            
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchPosts();
    }, [limit]);
    
    if (loading) return <LoadingSpinner text="Loading posts..." />;
    if (error) return <ErrorMessage message={error} onRetry={fetchPosts} />;
    
    return (
        <div className={styles.container}>
            {posts.map(post => (
                <PostCard 
                    key={post.id} 
                    post={post} 
                    onClick={() => onPostSelect?.(post.id)}
                />
            ))}
        </div>
    );
}

export default PostList;