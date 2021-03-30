// import Layout from '../components/Layout'
import styles from '../styles/About.module.css'
import Head from 'next/head';
import Image from 'next/image';

export default function About() {
    return (
        <>
            <Head>
                <title>about | gareth carter</title>
                <meta name="Description" content="About page for portfolio website" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/logoLight.png" />
            </Head>
                <h1 className={styles.heading}>Hello.</h1>
                <p>My name is Gareth Carter, and I’m a web developer based in London.</p>
                <p>My career began in the archives and heritage sector, where I digitised and catalogued books and historic documents. Still, programming was never far from my mind: I studied the history of computing and philosophical logic at university, and loved the way it scratched my itch for creative problem-solving.</p>
                <p>Initially, I taught myself to code in order to streamline my digitisation and cataloguing work. Later, I attended Le Wagon’s intensive web development bootcamp—as well as self-directed learning with Python and React—where I acquired the skills to match my curiosity and ambition.</p>
                <p>Now equipped with a robust skillset, I relish the opportunity to explore new technologies that improve how we engage with each other online. Combining creativity and curiosity, my aim is to build web applications that are beautiful, accessible, and performant.</p>
        </>
    )
}