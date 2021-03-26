import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.name}>gareth carter</h1>
      <h2 className={styles.title}>web developer</h2>
      <p className={styles.text}>creating engaging and accessible applications that live on the internet</p>
        <div className={styles.cta}>
          <Link href="/about"><p className={styles.ctaAnchor}>interested?</p></Link>
        </div>
    </Layout>
  )
}
