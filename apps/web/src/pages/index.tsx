import { Container, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <Container>
        <Heading>Todo App</Heading>
      </Container>
    </>
  )
}

export default Home
