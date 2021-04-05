import Link from 'next/link';
import styles from '../../styles/Header.module.css'
import { useRouter } from 'next/router';

export default function Nav() {
    const router = useRouter();
    const style = {
        borderBottom: "2px solid"
    }
    
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navListItem} style={router.pathname == "/about" ? style : null}>
                    <Link href="/about">
                        <a>about</a>
                    </Link>
                </li>
                <li className={styles.navListItem} style={router.pathname.includes("/work") ? style : null}>
                    <Link href="/work">
                        <a>work</a>
                    </Link>
                </li>
                <li className={styles.navListItem} style={router.pathname == "/contact" ? style : null}>
                    <Link href="/contact">
                        <a>contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}