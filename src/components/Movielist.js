import React from 'react'
import Moviecard from './Moviecard'

function Movielist({list,HandleDel,handleEdit}) {
  return (
    <div  className='movie-list '>
        {list.map(movie=><Moviecard movie={movie} HandleDel={HandleDel} handleEdit={handleEdit}/>)}
      
    </div>
  )
}

export default Movielist
