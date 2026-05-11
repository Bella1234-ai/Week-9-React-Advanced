import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';

function PostDetail({ onLike, posts }) {
    const { id } = useParams();

    const localPost = posts ? posts.find((p) => String(p.id) === String(id)) : null;

    const { data: apiPost, loading, error } = useFetch(
        localPost ? null : `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    const post = localPost || (apiPost ? {
        ...apiPost,
        author: 'User ' + apiPost.userId,
        date: new Date().toLocaleDateString(),
        likes: 0,
    } : null);

    if (loading) {
        return <div className="loading">Loading post...</div>;
    }

    if (error && !post) {
        return (
            <div className="error">
                Error loading post: {error}
                <Link to="/posts">
                    <Button variant="secondary">Back to Posts</Button>
                </Link>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="not-found">
                <h2>Post not found</h2>
                <Link to="/posts">
                    <Button variant="secondary">Back to Posts</Button>
                </Link>
            </div>
        );
    }

    const likes = post.likes || 0;

    return (
        <div className="post-detail-page">
            <Card className="post-detail">
                <div className="post-detail-header">
                    <h1>{post.title}</h1>
                    <div className="post-meta">
                        <span className="post-author">By {post.author}</span>
                        <span className="post-date">{post.date}</span>
                    </div>
                </div>

                <div className="post-detail-body">
                    <p>{post.body || post.content}</p>
                </div>

                <div className="post-detail-footer">
                    <Button
                        variant="secondary"
                        onClick={() => onLike(post.id)}
                    >
                        <span role="img" aria-label="like">&#9829;</span> {likes} Likes
                    </Button>
                    <Link to="/posts">
                        <Button variant="ghost">&larr; Back to Posts</Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}

export default PostDetail;
