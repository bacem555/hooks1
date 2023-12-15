import React from 'react'

function Starrating({rating,handlerating}) {
    const tab=[]
    const Rate=(rating)=>{
        for(let i=1;i<=5;i++){
            if (i<=rating){
                tab.push(<span onClick={()=>handlerating(i)}>&#11088;</span>)

            }
            else{
                tab.push(<span onClick={()=>handlerating(i)}>&#9733;</span>)
            }
        }
        return tab
    }
  return (
    <div>
      {Rate(rating)}
    </div>
  )
}

export default Starrating
