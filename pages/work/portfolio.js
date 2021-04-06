import styles from '../../styles/Work.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
    const style = {
        fontWeight: 400
    }
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
            <h2 className={styles.subheading}>Summary</h2>
            <p>My portfolio website <em>had</em> to be included as an example of my work because it exemplifies my approach to web development: <span style={style}>simple done well</span>. I wanted to convey this clearly in the technical and design decisions taken to create the application.</p>
            <a href="https://github.com/gcarter89/portfolio" target="_blank" rel="noreferrer" className={styles.link}>View Repository »</a>
            <h2 className={styles.subheading}>Technical</h2>
            <p>I chose React to build the frontend of this application because it simplifies the process of building interactive, data-driven UI with its component-based approach. Being able to implement logic for discrete UI components across my application without directly manipulating the DOM made for a better developer experience.</p>
            <p>As I look to the future, I believe React will furnish me with the flexibility to further develop this application. In future iterations, I will be looking to incorporate a more data-driven frontend—gradually implementing APIs and CMS. Currently, I think React will make it easier for me—from a developer experience perspective—to imbricate the frontend with data.</p>
            <h2 className={styles.subheading}>Design</h2>
            <p>On the design front, I decided to prioritise function over form.</p>
            <p>The colour scheme forms the foundation for the website—composed of off-white, black and blue. Off-white was used to accentuate space on the page, whereas black and blue were employed to differentiate text and image according to function or emphasis.</p>
            <p>Building on the colour scheme, I opted for a clean font that evokes familiarity: Gill Sans is a typographical homage to the Johnston typeface—which is associated with London Underground’s signage. Aside from being a call-back to the city where I live, I wanted the font to be simply, clean and geometric—in accord with the overarching theme of the website.</p>
    </>
    )
}