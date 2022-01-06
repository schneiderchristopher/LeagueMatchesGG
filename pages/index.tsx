import type { NextPage } from 'next'
import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import { SelectComponent } from '../components/SelectComponent';

const options = [
  { value: 'katarina', label: 'Katarina'},
  { value: 'lux', label: 'Lux'},
  { value: 'veigar', label: 'Veigar'}
]

const Home: NextPage = () => {
  const [championOne, setchampionOne] = useState<string | undefined>('Nenhum')
  const [championTwo, setchampionTwo2] = useState<string | undefined>('Nenhum')
  return (
    <div className='bg-[url("../public/qiyana.jpg")] bg-cover flex justify-center h-screen items-center flex-col'>
      <div className='bg-black/50'>
      <h1 className='text-pink-400 outline outline-pink-500 px-5 py-4 text-4xl rounded-sm drop-shadow-xl font-light'>LeagueMatches.gg</h1>
      </div>
      <div className='flex flex-row m-4 mt-5 w-[100%] justify-center items-center'>
      <Autocomplete
        disablePortal
        options={options}
        renderInput={(params) => 
          <SelectComponent {...params} />
        }
      />
      <button className='bg-gradient-to-r from-soft to-primary p-2 rounded px-8 drop-shadow-xl ring-2 ring-background/50 hover:drop-shadow-2x hover:ring-white/20 text-white'>VS</button>
      <Autocomplete
        disablePortal
        options={options}
        renderInput={(params) => 
          <SelectComponent {...params} />
        }
      />
      </div>
      
    </div>
  )
}

export default Home
