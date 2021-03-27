import Layout from '../components/Layout'
import styles from '../styles/Contact.module.css';
import Head from 'next/head';
import Image from 'next/image';


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
            {/* <Layout> */}
                <h1 className={styles.heading}>Say hi.</h1>
                <div className={styles.imageContainer}>
                    <Image
                        src="/profilePicture.jpg"
                        alt="Picture of me"
                        layout="fill"
                        priority={true} />
                </div>
            {/* </Layout> */}
        </>
    )

}