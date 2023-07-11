import React from 'react'
import './styles/LocationInfo.css'

const LocationInfo = ({location}) => {

  return (
    <article className='location-info'>
      <h2 className='location-name'>{location?.name}</h2>
      <ul className='location-list'>
        <li className='location-item'><span className='location-label'>Type: </span><span className='location-value'>{location?.type}</span></li>
        <li className='location-item'><span className='location-label'>Dimension: </span><span className='location-value'>{location?.dimension}</span></li>
        <li className='location-item'><span className='location-label'>Population: </span><span className='location-value'>{location?.residents.length}</span></li>
      </ul>
    </article>
  )
}

export default LocationInfo
