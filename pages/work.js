import Layout from '../components/Layout'
import styles from '../styles/Work.module.css'
import Head from 'next/head'
import Link from 'next/link'


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
            <Layout>
                <h1 className={styles.heading}>Selected projects.</h1>
                <h3><Link href="/portfolio">portfolio</Link></h3>
            </Layout>
        </>
    )
}