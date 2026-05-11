import styles from './PostCard.module.css';

function PostCard({ post, onClick }) {
    return (
        <article 
            className={styles.card}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
        >
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.body}>{post.body.slice(0, 150)}...</p>
            <span className={styles.id}>Post #{post.id}</span>
        </article>
    );
}

export default PostCard;