import React from 'react'
import Starrating from './Starrating'
import Editmovie from './Editmovie'

function Moviecard({movie,HandleDel,handleEdit}) {
  return (
    <div className='movie-card'>
        <h3>{movie.name}</h3>
        <img src={movie.image} alt={movie.name}/>
        <Starrating rating={movie.rating}/>
        <p>{movie.date}</p>
        
            <button className='btn' onClick={()=>HandleDel(movie.id)} >delete</button>
            <Editmovie movie={movie} handleEdit={handleEdit} />
            

            
        
      
    </div>
  )
}

export default Moviecard
