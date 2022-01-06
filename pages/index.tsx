import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Select from 'react-select'

const options = [
  { value: 'katarina', label: 'Katarina'},
  { value: 'lux', label: 'Lux'},
  { value: 'veigar', label: 'Veigar'}
]

const Home: NextPage = () => {
  return (
    <div className='bg-background flex justify-center h-screen items-center'>
      <h1 className='text-white text-4xl'>LeagueMatches.gg</h1>
      <Select options={options}/>
    </div>
  )
}

export default Home
