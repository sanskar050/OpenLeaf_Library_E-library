import React from 'react'
import { useParams } from 'react-router-dom'
import Book from './Book'

const Searched_Page = () => {
  const params = useParams()
  return (
    <div className='searchPageBook'>
      <Book/>
        <div className="searchPageBookOverview">

        </div>
    </div>
  )
}

export default Searched_Page