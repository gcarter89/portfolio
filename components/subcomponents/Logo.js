import Link from 'next/link';
import Image from 'next/image'
import styles from '../../styles/Header.module.css'

export default function Logo() {
    console.log('re-rendered')
    return (
        <Link href="/">
            <a className={styles.logo}>
                <Image src="/logoDark.png" alt="logo" layout="fill" priority={true} />
            </a>
        </Link>
    )
}