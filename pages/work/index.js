import styles from '../../styles/Work.module.css'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function Work() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Head>
                <title>work | gareth carter</title>
                <meta name="Description" content="Page listing web development projects for portfolio website"/>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.png" />
            </Head>
                <h1 className={styles.heading}>Selected projects.</h1>
                <h2 className={styles.projectLink}>
                    <Link href="work/portfolio">
                        Portfolio
                    </Link>
                </h2>
        </motion.div>
    )
}