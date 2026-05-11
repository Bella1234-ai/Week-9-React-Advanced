import styles from './LoadingSpinner.module.css';

function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
    return (
        <div className={`${styles.container} ${styles[size]}`}>
            <div className={styles.spinner}></div>
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
}

export default LoadingSpinner;