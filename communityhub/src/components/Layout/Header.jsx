import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../shared/Button';

function Header({ searchTerm, setSearchTerm }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/posts', label: 'Posts' },
        { path: '/create', label: 'Create Post' },
        { path: '/about', label: 'About' },
    ];

    const isPostsPage = location.pathname === '/posts';

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/">
                        <h1>CommunityHub</h1>
                    </Link>
                </div>

                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="header-actions">
                    {isPostsPage && (
                        <input
                            type="text"
                            placeholder="Search posts..."
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    )}

                    {isLoggedIn ? (
                        <div className="user-menu">
                            <span>Welcome, User!</span>
                            <Button size="small" onClick={() => setIsLoggedIn(false)}>Logout</Button>
                        </div>
                    ) : (
                        <Button size="small" onClick={() => setIsLoggedIn(true)}>Login</Button>
                    )}

                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
