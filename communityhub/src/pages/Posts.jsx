import React, { useState, useMemo } from 'react';
import useFetch from '../hooks/useFetch';
import PostList from '../components/Post/PostList';

function Posts({ onLike, searchTerm, setSearchTerm }) {
    const { data: posts, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    );

    const enrichedPosts = posts
        ? posts.map((p) => ({
              ...p,
              author: 'User ' + p.userId,
              date: new Date().toLocaleDateString(),
              likes: 0,
          }))
        : [];

    const filteredPosts = useMemo(() => {
        if (!searchTerm.trim()) return enrichedPosts;
        const term = searchTerm.toLowerCase();
        return enrichedPosts.filter(
            (post) =>
                post.title.toLowerCase().includes(term) ||
                (post.body && post.body.toLowerCase().includes(term))
        );
    }, [enrichedPosts, searchTerm]);

    return (
        <div className="posts-page">
            <div className="posts-header">
                <h1>All Posts</h1>
                <p>Browse and discover content from our community.</p>
            </div>

            {loading && <div className="loading">Loading posts...</div>}
            {error && (
                <div className="error">
                    Error loading posts: {error}
                    <button onClick={() => window.location.reload()}>Retry</button>
                </div>
            )}

            {!loading && !error && (
                <PostList posts={filteredPosts} onLike={onLike} />
            )}
        </div>
    );
}

export default Posts;
