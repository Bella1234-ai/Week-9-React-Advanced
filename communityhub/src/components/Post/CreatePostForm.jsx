import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../shared/Card';
import Input from '../shared/Input';
import Button from '../shared/Button';

function CreatePostForm({ addPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = 'Title is required';
        if (!content.trim()) newErrors.content = 'Content is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        addPost({
            title: title.trim(),
            body: content.trim(),
            content: content.trim(),
            author: 'Current User',
            date: new Date().toLocaleDateString(),
            likes: 0,
        });
        setTitle('');
        setContent('');
        setErrors({});
        navigate('/posts');
    };

    return (
        <Card title="Create New Post" className="create-post">
            <form onSubmit={handleSubmit} noValidate>
                <Input
                    type="text"
                    placeholder="Post Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    label="Title"
                    required
                />
                {errors.title && <span className="error-text">{errors.title}</span>}

                <div className="textarea-wrapper">
                    <label className="input-label">Content</label>
                    <textarea
                        className="textarea-input"
                        placeholder="Write your post content here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="6"
                        required
                    />
                </div>
                {errors.content && <span className="error-text">{errors.content}</span>}

                <div className="form-actions">
                    <Button type="submit" variant="primary">
                        Publish Post
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() => {
                            setTitle('');
                            setContent('');
                            setErrors({});
                        }}
                    >
                        Clear
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default CreatePostForm;
