import React from 'react'
import { useParams } from 'react-router-dom'
export const Productdetail = () => {
  const {a,desc}=useParams()
  console.log(a,desc)
  React.useEffect(()=>{
    fetch(`http://localhost:8000/${a}?productproduct=${desc}`)
    .then((resp)=>(resp.json()))
    .then((resp)=>{
      console.log(resp)
    })
  },[a,desc])
  return (
    <div>Productdetail</div>
  )
}
