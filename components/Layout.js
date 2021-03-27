import styles from '../styles/Layout.module.css';
import Header from './Header';

export default function Layout({children}) {
    return (
        <>
            <Header />
            <main className={styles.content}>
                {children}
            </main>
        </>
    )
}