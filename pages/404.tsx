import Link from 'next/link'
import Layout from '../components/Layout'

const My404 = () => (
  <Layout title="404 | Next.js + TypeScript Example">
    <h1>404</h1>
    <p>This is nothing</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 300,
  }
}

export default My404
