import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';


export default function Home() {

  return (
    <>
      <Head>
        <title>home | gareth carter</title>
        <meta name="Description" content="Home page for portfolio website" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.name}>gareth carter</h1>
        <h2 className={styles.title}>junior web developer</h2>
        <p className={styles.text}>creating engaging applications that live on the internet</p>
          <div className={styles.cta}>
            <Link href="/about"><a className={styles.ctaLink}>interested?</a></Link>
          </div>
      </div>
    </>
  )
}
