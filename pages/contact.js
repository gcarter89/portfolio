import Layout from '../components/Layout'
import styles from '../styles/Contact.module.css';
import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title>contact | gareth carter</title>
                <meta name="Description" content="Contact page for portfolio website"/>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/logoLight.png" />
            </Head>
            <h1 className={styles.heading}>Say hi.</h1>
            {/* <div className={styles.imageContainer}>
                <Image
                    src="/profilePicture.jpg"
                    alt="Profile picture"
                    layout="fill"
                    priority={true} 
                />
            </div> */}
            <p>Have you got a question? Or perhaps you're interested in collaborating with me on a project? Feel free to <a className={styles.link} href="mailto:hi@garethcarter.dev?subject=Hi!">get in touch</a>.</p>
            <p>I can also be found on <a className={styles.link} href="https://github.com/gcarter89" target="_blank" rel="noreferrer">Github</a> and <a className={styles.link} href="https://linkedin.com/in/gcarter89/" target="_blank" rel="noreferrer">LinkedIn</a>.</p>
        </>
    )

}