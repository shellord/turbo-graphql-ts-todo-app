import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading, Container } from '@chakra-ui/react'

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
