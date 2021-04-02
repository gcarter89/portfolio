import Layout from '../components/Layout'
import styles from '../styles/Work.module.css'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';


export default function Work() {
    return (
        <>
            <Head>
                <title>work | gareth carter</title>
                <meta name="Description" content="Page listing web development projects for portfolio website"/>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/logoLight.png" />
            </Head>
                <h1 className={styles.heading}>Selected projects.</h1>
                <h2><Link href="/portfolio">Portfolio</Link></h2>
                    <Image
                        src="/portfolio.png"
                        alt="Mock ups of portfolio website"
                        layout="responsive"
                        height="58%"
                        width="100%"
                        priority={'true'} 
                    />
                <h3 className={styles.subheading}>Technologies used</h3>
                <p>blah blah blah lorem ipsum blah blah blah blah blah</p>
                <h3 className={styles.subheading}>Summary</h3>
                <p>blah blah blah lorem upsum blah blah blah something that's around 1 or two paragraphs</p>
        </>
    )
}