import { Container, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '@/components/ui/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default Home
