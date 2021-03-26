import Link from 'next/link';
import styles from '../../styles/Header.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navListItem}>
                    <Link href="/work">
                        <a>work</a>
                    </Link>
                </li>
                <li className={styles.navListItem}>
                    <Link href="/about">
                        <a>about</a>
                    </Link>
                </li>
                <li className={styles.navListItem}>
                    <Link href="/contact">
                        <a>contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}