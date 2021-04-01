import Link from 'next/link';
import Image from 'next/image'
import styles from '../../styles/Header.module.css'
import { useState, useEffect } from 'react';

export default function Logo() {
    let style = {
        backgroundColor: 'transparent'
    }

    const [hover, setHover] = useState(false);

    function colourShuffle() {
        setHover(true);
    }

    function colourReset() {
        setHover(false);
    }



    hover ? style = {backgroundColor: '#4284F4'} : style = {backgroundColor: 'transparent'}

    return (
        <Link href="/">
            <a onMouseEnter={colourShuffle} onMouseLeave={colourReset} className={hover ? `${styles.logo} ${styles.logoActive}` : styles.logo} style={style}>
                <Image className={hover ? styles.imageActive : null} src="/logoDark.png" alt="logo" layout="fill" priority={true}/>
            </a>
        </Link>
    )
}