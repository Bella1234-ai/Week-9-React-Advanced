import styles from './Avatar.module.css';

function Avatar({ 
    src, 
    alt, 
    name, 
    size = 'medium',
    status = null // 'online', 'offline', 'busy'
}) {
    const sizeClasses = {
        small: styles.small,
        medium: styles.medium,
        large: styles.large,
        xlarge: styles.xlarge
    };
    
    const statusColors = {
        online: '#28a745',
        offline: '#6c757d',
        busy: '#dc3545'
    };
    
    const getInitials = (name) => {
        if (!name) return '?';
        return name
            .split(' ')
            .map(part => part[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();
    };
    
    return (
        <div className={`${styles.avatar} ${sizeClasses[size]}`}>
            {src ? (
                <img 
                    src={src} 
                    alt={alt || name} 
                    className={styles.image}
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
            ) : null}
            <div className={`${styles.fallback} ${src ? styles.hidden : ''}`}>
                {getInitials(name)}
            </div>
            {status && (
                <span 
                    className={styles.status} 
                    style={{ backgroundColor: statusColors[status] }}
                    aria-label={`Status: ${status}`}
                />
            )}
        </div>
    );
}

export default Avatar;