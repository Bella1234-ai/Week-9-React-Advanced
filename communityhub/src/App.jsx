import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Sidebar from './components/Layout/Sidebar';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import About from './pages/About';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [localPosts, setLocalPosts] = useLocalStorage('communityhub_posts', []);
    const [likedPosts, setLikedPosts] = useLocalStorage('communityhub_likes', {});

    const addPost = useCallback((post) => {
        setLocalPosts((prev) => [
            {
                id: Date.now(),
                ...post,
            },
            ...prev,
        ]);
    }, [setLocalPosts]);

    const handleLike = useCallback((postId) => {
        setLikedPosts((prev) => {
            const current = prev[postId] || 0;
            return { ...prev, [postId]: current + 1 };
        });

        setLocalPosts((prev) =>
            prev.map((p) =>
                p.id === postId ? { ...p, likes: (p.likes || 0) + 1 } : p
            )
        );
    }, [setLikedPosts, setLocalPosts]);

    const mergedPosts = localPosts.map((p) => ({
        ...p,
        likes: (p.likes || 0) + (likedPosts[p.id] || 0),
    }));

    return (
        <div className="app">
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="app-body">
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home onLike={handleLike} />} />
                        <Route
                            path="/posts"
                            element={
                                <Posts
                                    onLike={handleLike}
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                />
                            }
                        />
                        <Route
                            path="/posts/:id"
                            element={<PostDetail onLike={handleLike} posts={mergedPosts} />}
                        />
                        <Route path="/create" element={<CreatePost addPost={addPost} />} />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="*"
                            element={
                                <div className="not-found">
                                    <h2>404 — Page Not Found</h2>
                                    <p>The page you are looking for does not exist.</p>
                                </div>
                            }
                        />
                    </Routes>
                </main>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}

export default App;