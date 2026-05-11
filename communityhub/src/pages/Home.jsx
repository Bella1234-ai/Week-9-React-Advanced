import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import PostCard from '../components/Post/PostCard';
import Button from '../components/shared/Button';

function Home({ onLike }) {
    const { data: posts, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );

    const recentPosts = posts
        ? posts.map((p) => ({
              ...p,
              author: 'User ' + p.userId,
              date: new Date().toLocaleDateString(),
              likes: 0,
          }))
        : [];

    return (
        <div className="home-page">
            <section className="hero">
                <h1>Welcome to CommunityHub</h1>
                <p>
                    A place where developers, designers, and tech enthusiasts connect, share,
                    and grow together.
                </p>
                <div className="hero-actions">
                    <Link to="/posts">
                        <Button variant="primary" size="large">Browse Posts</Button>
                    </Link>
                    <Link to="/create">
                        <Button variant="secondary" size="large">Create Post</Button>
                    </Link>
                </div>
            </section>

            <section className="recent-posts">
                <div className="section-header">
                    <h2>Recent Posts</h2>
                    <Link to="/posts">View all &rarr;</Link>
                </div>

                {loading && <div className="loading">Loading recent posts...</div>}
                {error && <div className="error">Error: {error}</div>}

                {!loading && !error && (
                    <div className="post-grid">
                        {recentPosts.map((post) => (
                            <PostCard key={post.id} post={post} onLike={onLike} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default Home;
