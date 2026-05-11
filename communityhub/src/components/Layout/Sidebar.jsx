import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../shared/Card';

function Sidebar() {
    const popularPosts = [
        { id: 1, title: 'Getting Started with React', views: 1245 },
        { id: 2, title: '10 Tips for Better Code', views: 987 },
        { id: 3, title: 'Understanding JavaScript Closures', views: 876 },
    ];

    const tags = ['React', 'JavaScript', 'WebDev', 'Tutorial', 'Tips', 'Coding', 'Design', 'Performance'];

    return (
        <aside className="sidebar">
            <Card title="About CommunityHub">
                <p>
                    CommunityHub is a vibrant online community where developers, designers,
                    and tech enthusiasts come together to share knowledge, discuss ideas,
                    and build meaningful connections.
                </p>
                <p>
                    Join our community today and start engaging with like-minded individuals!
                </p>
            </Card>

            <Card title="Popular Posts">
                <ul className="popular-posts-list">
                    {popularPosts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            <span className="views">{post.views} views</span>
                        </li>
                    ))}
                </ul>
            </Card>

            <Card title="Tags">
                <div className="tags-cloud">
                    {tags.map((tag) => (
                        <span key={tag} className="tag">
                            #{tag}
                        </span>
                    ))}
                </div>
            </Card>
        </aside>
    );
}

export default Sidebar;
