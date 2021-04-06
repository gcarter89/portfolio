import Nav from './subcomponents/Nav';
import Logo from './subcomponents/Logo';
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <Nav />
            <Logo />
        </header>
    )
}