import Head from 'next/head'
import React from 'react'

const Home: React.FC = () => (
  <div>
    <Head>
      <title>HomePage</title>
    </Head>
    <main>
      <img
        src={require('../assets/images/example.png').default}
        alt="Teste de imagem"
      />
      <h1>Hello Word</h1>
    </main>
  </div>
)

export default Home
