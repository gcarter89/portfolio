import styles from '../styles/Layout.module.css';
import Header from './Header';

export default function Layout(props) {
    return (
        <>
            <Header />
            <main className={styles.content}>
                {props.children}
            </main>
        </>
    )
}