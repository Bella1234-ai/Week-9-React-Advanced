import React from 'react';
import Card from '../components/shared/Card';

function About() {
    return (
        <div className="about-page">
            <div className="page-header">
                <h1>About CommunityHub</h1>
                <p>Learn more about our mission and vision.</p>
            </div>

            <Card title="Our Mission">
                <p>
                    CommunityHub was built to bring together passionate individuals from all
                    corners of the tech world. Whether you are a seasoned developer, a curious
                    designer, or someone just starting their journey, this is your space to
                    learn, share, and connect.
                </p>
            </Card>

            <Card title="What We Offer">
                <ul className="feature-list">
                    <li><strong>Engaging Discussions</strong> — Share ideas and get feedback from peers.</li>
                    <li><strong>Knowledge Base</strong> — Access a growing library of posts and tutorials.</li>
                    <li><strong>Community Support</strong> — Ask questions and help others along the way.</li>
                    <li><strong>Networking</strong> — Connect with like-minded professionals.</li>
                </ul>
            </Card>

            <Card title="Technologies">
                <p>
                    This project is built with modern web technologies including React, React Router,
                    and the JSONPlaceholder API for demo data.
                </p>
            </Card>
        </div>
    );
}

export default About;
