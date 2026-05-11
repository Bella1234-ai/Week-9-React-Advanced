import styles from './Button.module.css';

function Button({ 
    children, 
    variant = 'primary', 
    size = 'medium',
    loading = false,
    disabled = false,
    fullWidth = false,
    onClick,
    type = 'button',
    className = ''
}) {
    const baseClasses = styles.button;
    
    const sizeClasses = {
        small: styles.small,
        medium: styles.medium,
        large: styles.large
    };
    
    const variantClasses = {
        primary: styles.primary,
        secondary: styles.secondary,
        outline: styles.outline,
        danger: styles.danger,
        ghost: styles.ghost
    };
    
    const combinedClasses = `
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? styles.fullWidth : ''}
        ${disabled || loading ? styles.disabled : ''}
        ${className}
    `.trim();
    
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={combinedClasses}
        >
            {loading ? (
                <span className={styles.loadingContent}>
                    <svg className={styles.spinner} viewBox="0 0 24 24">
                        <circle 
                            className={styles.spinnerCircle}
                            cx="12" 
                            cy="12" 
                            r="10" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="3"
                            strokeDasharray="60"
                            strokeDashoffset="30"
                        />
                    </svg>
                    Loading...
                </span>
            ) : children}
        </button>
    );
}

export default Button;