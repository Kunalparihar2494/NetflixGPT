import React from 'react'
import { MOVIE_IMAGE_CDN } from '../utils/images'

const MovieCard = ({poster_path}) => {
  if(!poster_path) return null;
  return (
    <div className='w-48 pr-4'>
      <img className='' alt='Movie Card' src= {MOVIE_IMAGE_CDN+poster_path} />
    </div>
  )
}

export default MovieCard