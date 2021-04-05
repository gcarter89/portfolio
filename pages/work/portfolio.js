import styles from '../../styles/Work.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
    return (
        <>
        <Head>
            <title>portfolio | gareth carter</title>
            <meta name="Description" content="Page describing a particular web development project"/>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/logoLight.png" />
        </Head>
            <h1 className={styles.heading}>Portfolio.</h1>
                <Image
                    src="/portfolio.png"
                    alt="Mock ups of portfolio website for laptop and mobile"
                    layout="responsive"
                    height="57%"
                    width="100%"
                    priority={true} 
                />
            <h2 className={styles.subheading}>Technologies used</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>React</li>
                <li className={styles.listItem}>NextJS</li>
                <li className={styles.listItem}>JavaScript</li>
            </ul>
            <h2 className={styles.subheading}>Description</h2>
            <p>This website <em>had</em> to be included as an example of my work. The underlying design philosophy for this website is "simple done well".</p>
            <p>On a technical level, I wanted my website to do three things: First and foremost, I want the website to be accessible to all: that means making my HTML meaningful, well-structured, and well-signposted. Secondly, I wanted the website to load quickly and without intruding on the user's experience (in this case, getting information about me). Finally, I want my website to be easily findable on the web: this means, utilising good SEO standards for each page.</p>
            <p>React was chosen due to its ability to create a performant and easily manageable component-based UI. Supplementing React, this website utilises the NextJS framework. Given the advantages of built-in routing, siloed styling, Server Side Rendering (with its SEO benefits) the framework seems like a good foundation for my website.</p>
            <p>I used <a href="https://developers.google.com/web/tools/lighthouse">Google's Lighthouse</a> tool to quantify and assess the performance and quality of my personal website.</p>
            <p>In terms of design, I went for a straightforward, contrastive colour scheme (an off-white, with black and blue) that grabs attention where it wants without being intrusive. Ontop of the colour scheme, I opted for a font that evokes familiarity: Gill Sans is a typographical homage to the London Underground's <a href="https://en.wikipedia.org/wiki/Johnston_(typeface)">Johnston</a> typeface.</p>
    </>
    )
}