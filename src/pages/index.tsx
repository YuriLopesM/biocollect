import Head from 'next/head'
import { Hero } from '@/components/Hero'
import { Layout } from '@/components/UI/Layout'
import { Programs } from '@/components/Programs'
import { Conscience } from '@/components/Conscience'
import { Clients } from '@/components/Clients'

function Home() {
  return (
    <Layout>
      <Head>
        <title>BioCollect | Coleta Sustentável</title>
      </Head>
      
      <Hero />
      <Programs />
      <Conscience />
      <Clients />
    </Layout>
  )
}

export default Home
