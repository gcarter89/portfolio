import Layout from '../components/Layout'
import Link from 'next/link'

export default function Work() {
    return (
        <Layout>
            <h1>selected projects</h1>
            <h3><Link href="/portfolio">portfolio</Link></h3>
        </Layout>
    )
}