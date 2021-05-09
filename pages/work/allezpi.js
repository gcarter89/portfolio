import styles from '../../styles/Work.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'

export default function AllezPI() {
    const style = {
        fontWeight: 400
    }
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
        <Head>
            <title>allezPI | gareth carter</title>
            <meta name="Description" content="Page describing a particular web development project"/>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/favicon.png" />
        </Head>
            <h1 className={styles.heading}>AllezPI.</h1>
                <Image
                    src="/AllezPI.png"
                    alt="Header image with AllezPI logo"
                    layout="responsive"
                    height="57%"
                    width="100%"
                    priority={true}
                />
            <h2 className={styles.subheading}>Technologies used</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>Node</li>
                <li className={styles.listItem}>PostgreSQL</li>
                <li className={styles.listItem}>NextJS</li>
                <li className={styles.listItem}>AWS</li>
                <li className={styles.listItem}>Prisma</li>
            </ul>
            <h2 className={styles.subheading}>Summary</h2>
            <p>AllezPI combines three of my passions: web development, road cycling and trivia. AllezPI is an easy-to-use API organised around REST: it utilises aggregated data relating to the Tour de France. In its current form, the dataset is composed of the following:</p>
            <ul>
                <li><p>Every edition of the Tour de France since the inaugural race in 1903 with reference to riders who have won a classification competition.</p></li>
                <li><p>Every rider who has won a classification competition, and the year(s) in which they were won by that specific rider.</p></li>
            </ul>
            <p>In terms of future development, I will be introducing data on individual stages for each edition of the Tour de France in the next iteration.</p>
            <p><a href="https://github.com/gcarter89/allezPI" target="_blank" rel="noreferrer" className={styles.link}>View Repository & Documentation »</a></p>
            <Link href="../api/tours">
                <a target="_blank" className={styles.link}>Check it out »</a>
            </Link>
            <h2 className={styles.subheading}>Features</h2>
            <p>This iteration of AllezPI is split into two specific RESTful endpoints (riders and tours). These URLs provide comprehensive access to the dataset. The information is returned to the client in a JSON format.</p> 
            <p>Currently, no API key is necessary to access these endpoints, and no pagination is required—although this may change as the API becomes more complex and resource intensive.</p>
            <h2 className={styles.subheading}>Technical</h2>
            <p>Given my recent work with JavaScript frameworks, I wanted to implement my API using a JavaScript library-based ORM: therefore, I decided to use Prisma which works well with Node and NextJS.</p>
            <p>With my experience using Ruby-on-Rails and its ORM, ActiveRecord—I found it easy to implement a schema and a set of queries for my relational postgreSQL database. Moreover, in order to get more experience with industry standard web services, I also decided to use AWS to host my postgreSQL database.</p>
    </motion.div>
    )
}