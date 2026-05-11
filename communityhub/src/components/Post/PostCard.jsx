import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../shared/Card';
import Button from '../shared/Button';

function PostCard({ post, onLike }) {
    const authorName = post.author || 'Anonymous';
    const dateStr = post.date || new Date().toLocaleDateString();
    const likes = post.likes || 0;

    return (
        <Card className="post-card">
            <div className="post-header">
                <h3 className="post-title">
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </h3>
            </div>

            <div className="post-meta">
                <span className="post-author">By {authorName}</span>
                <span className="post-date">{dateStr}</span>
            </div>

            <p className="post-content">
                {post.body ? post.body.substring(0, 120) + (post.body.length > 120 ? '...' : '') : post.content}
            </p>

            <div className="post-footer">
                <Button
                    variant="secondary"
                    size="small"
                    onClick={() => onLike(post.id)}
                >
                    <span role="img" aria-label="like">&#9829;</span> {likes} Likes
                </Button>
                <Link to={`/posts/${post.id}`} className="read-more">Read more &rarr;</Link>
            </div>
        </Card>
    );
}

export default PostCard;
