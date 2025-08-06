import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Luuz Church</title>
      </Head>
      <Header />
      <main className="p-4">Bem-vindo à Luuz Church</main>
      <Footer />
    </div>
  )
}