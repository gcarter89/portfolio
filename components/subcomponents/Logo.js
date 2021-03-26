import Link from 'next/link';
import Image from 'next/image'
import styles from '../../styles/Header.module.css'

export default function Logo() {
    return (
        <Link href="/">
            <a className={styles.logo}>
                <Image src="/logoDark.png" alt="logo" layout="fill" priority='true' />
            </a>
        </Link>
    )
}