import Head from 'next/head'
import { Hero } from '@/components/Hero'
import { Layout } from '@/components/UI/Layout'
import { Programs } from '@/components/Programs'
import { Conscience } from '@/components/Conscience'
import { Clients } from '@/components/Clients'
import { About } from '@/components/About'

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
      <About />
    </Layout>
  )
}

export default Home
