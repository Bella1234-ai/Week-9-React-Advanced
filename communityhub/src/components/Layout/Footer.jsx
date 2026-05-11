import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>CommunityHub</h3>
                    <p>Building communities together</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/create">Create Post</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} CommunityHub. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
