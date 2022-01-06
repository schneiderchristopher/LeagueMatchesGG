import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-background flex justify-center h-screen items-center'>
      <h1 className='text-white text-4xl'>LeagueMatches.gg</h1>
    </div>
  )
}

export default Home
