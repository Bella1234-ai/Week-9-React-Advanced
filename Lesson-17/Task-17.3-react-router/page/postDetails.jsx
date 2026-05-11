import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../../task-17.4-loading-error/LoadingSpinner';
import ErrorMessage from '../../task-17.4-loading-error/ErrorMessage';
import styles from './PostDetail.module.css';

function PostDetail() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchPost() {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${postId}`
                );
                
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                
                const data = await response.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchPost();
    }, [postId]);
    
    if (loading) return <LoadingSpinner text="Loading post..." />;
    if (error) return <ErrorMessage message={error} onRetry={() => navigate('/posts')} />;
    if (!post) return <p>Post not found</p>;
    
    return (
        <article className={styles.article}>
            <Link to="/posts" className={styles.backLink}>
                ← Back to Posts
            </Link>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.id}>Post ID: {post.id}</p>
            <div className={styles.content}>
                {post.body}
            </div>
        </article>
    );
}

export default PostDetail;