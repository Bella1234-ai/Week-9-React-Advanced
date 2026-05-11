import { Outlet, NavLink } from 'react-router-dom';
import styles from './Layout.module.css';

function Layout() {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `${styles.navLink} ${isActive ? styles.active : ''}`
                        }
                    >
                        🏠 Home
                    </NavLink>
                    <NavLink 
                        to="/posts"
                        className={({ isActive }) => 
                            `${styles.navLink} ${isActive ? styles.active : ''}`
                        }
                    >
                        📝 Posts
                    </NavLink>
                    <NavLink 
                        to="/about"
                        className={({ isActive }) => 
                            `${styles.navLink} ${isActive ? styles.active : ''}`
                        }
                    >
                        ℹ️ About
                    </NavLink>
                </nav>
            </header>
            
            <main className={styles.main}>
                <Outlet />
            </main>
            
            <footer className={styles.footer}>
                <p>&copy; 2026 CommunityHub. Built with React ❤️</p>
            </footer>
        </div>
    );
}

export default Layout;