import Layout from '../components/Layout'
import styles from '../styles/Contact.module.css';
import Head from 'next/head';
import { motion } from 'framer-motion';


export default function Contact() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Head>
                <title>contact | gareth carter</title>
                <meta name="Description" content="Contact page for portfolio website"/>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <h1 className={styles.heading}>Say hi.</h1>
            <p>Have you got a question? Or perhaps you're interested in collaborating with me on a project? Feel free to <a className={styles.link} href="mailto:hi@garethcarter.dev?subject=Hi!">get in touch</a>.</p>
            <p>I can also be found on <a className={styles.link} href="https://github.com/gcarter89" target="_blank" rel="noreferrer">Github</a> and <a className={styles.link} href="https://linkedin.com/in/gcarter89/" target="_blank" rel="noreferrer">LinkedIn</a>.</p>
        </motion.div>
    )

}