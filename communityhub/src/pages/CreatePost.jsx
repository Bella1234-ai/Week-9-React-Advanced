import React from 'react';
import CreatePostForm from '../components/Post/CreatePostForm';

function CreatePost({ addPost }) {
    return (
        <div className="create-post-page">
            <div className="page-header">
                <h1>Create a New Post</h1>
                <p>Share your thoughts, ideas, and stories with the community.</p>
            </div>
            <CreatePostForm addPost={addPost} />
        </div>
    );
}

export default CreatePost;
