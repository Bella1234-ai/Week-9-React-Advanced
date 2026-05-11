import styles from './ErrorMessage.module.css';

function ErrorMessage({ message, onRetry }) {
    return (
        <div className={styles.container}>
            <span className={styles.icon} role="img" aria-label="error">⚠️</span>
            <p className={styles.message}>{message}</p>
            {onRetry && (
                <button onClick={onRetry} className={styles.retryBtn}>
                    Try Again
                </button>
            )}
        </div>
    );
}

export default ErrorMessage;