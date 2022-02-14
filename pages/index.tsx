import Head from 'next/head'
import { Feed } from '../components/Feed'
import { Header } from '../components/Header'
import { Modal } from '../components/Modal'

export default function Home() {
  return (
    <div className="tailwind-scrollbar-hide h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />

      <Modal />
    </div>
  )
}
