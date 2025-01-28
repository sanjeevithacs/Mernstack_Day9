import React from 'react'
import { useSelector} from 'react-redux'

function ViewPost() {
    const selector = useSelector((state)=>state.post)
    console.log(selector)
  return (
    <div>{selector.map((i,k)=>{
        return(
            <div key={k}>
                <p>{i.author}</p>
                <p>{i.data}</p>
            </div>
        )
    })}</div>
  )
}

export default ViewPost