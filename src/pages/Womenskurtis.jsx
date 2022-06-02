import React from 'react'
import styles from "./womenskurtis.module.css"
export const Womenskurtis = () => {
  let [kurtis,setKurtis]=React.useState([])
  React.useEffect(()=>{
      fetch(`http://localhost:8000/womenkurtis`)
      .then((resp)=>(resp.json()))
      .then((resp)=>{
        setKurtis(resp)
      })
  },[])
  return (
    <div className={styles.maincontainer}>
        { kurtis.map((el)=>(
          <div className={styles.eachdiv}>
              <div style={{height:"50%"}}><img alt="prods" style={{width:"90%",height:"100%"}}  src={el.imgresponsivesrc}/></div>
              <div><h3>{el.productbrand}</h3></div>
              <div><h4>{el.productproduct}</h4></div>
              <div><s>{el.productstrike}</s></div>
              <div><h4>{el.productdiscountedPrice}</h4></div>
              <div>{el.productdiscountPercentage}</div>
          </div>
          
        ))

        }
    </div>
  )
}
