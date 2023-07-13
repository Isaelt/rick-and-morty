import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'
import img01 from './assets/img01.svg'
import Pagination from './components/Pagination'


function App() {

  const [location, setLocation] =useState()
  const [idLocation, setIdLocation] = useState(getRandomNumber(126))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setisLoading] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const totalResidents = (location?.residents.length)

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    setisLoading(true)
    axios.get(url)
    .then(resp => { 
      setLocation(resp.data)
      setHasError(false)
    })
    .catch(err => {
      console.error(err)
      setHasError(true)
    
    })
    .finally(() => {
      setisLoading(false)
    })

  }, [idLocation])

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  
 
  return (
    <div>
      <div className='img-container'></div>
     <FormLocation
     setIdLocation={setIdLocation}
     setCurrentPage={setCurrentPage}
     />

     {
      isLoading
        ? (<div className='loader'><div className="lds-facebook"><div></div><div></div><div></div></div></div>)
        : (
          hasError
      ?(<div className='error'>❌ Hey, You must provide one number from 1 to 126!</div>)
      :(<>
        <LocationInfo
        location={location}
        />
        <div className='resident-container'>
          {
           location?.residents?.map(url => (
             <ResidentCard
               key={url}
               url={url}
             />
           )).slice(firstPostIndex, lastPostIndex)
          }
        </div>
        <Pagination
        totalPosts={totalResidents}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        />
        </>
      )
        )
      
     }

    </div>
  )
}

export default App
