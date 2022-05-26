import React, { useEffect } from 'react'

const Timer = (props) => {
  // const [timeid,setId]=useState(null)

  useEffect(()=>{
    if(props.start!==props.end){

    
    let id = setInterval(()=>{
      props.setStart((prev)=>prev+1)
    },1000)
    
    return ()=>{
     
      clearInterval(id)
    
    }
    }
   
  },[props])
  return (
    <div>
        <h1>Timer from 20 to 40</h1>
      <h1>{props.start}</h1>
    </div>
  )
}

export default Timer
