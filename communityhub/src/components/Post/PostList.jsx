import React from 'react';
import PostCard from './PostCard';

function PostList({ posts, onLike }) {
    if (!posts || posts.length === 0) {
        return (
            <div className="no-posts">
                <p>No posts found. Be the first to create a post!</p>
            </div>
        );
    }

    return (
        <div className="post-list">
            <h2>Community Posts ({posts.length})</h2>
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    onLike={onLike}
                />
            ))}
        </div>
    );
}

export default PostList;
