import React from 'react'
import styles from "./navbar.module.css"
import { Mensdrop } from './mensdrop'
import { Womensdrop } from './womensdrop'
import { Kidsdrop } from './kidsdrop'
import { DropdownContext } from '../Contexts/Dropdown'
import { useNavigate } from 'react-router-dom'
export const Navbar = () => {
    const {mendrop,womendrop,kiddrop,handlekidsdrop,handlemendrop,handlewomendrop}=React.useContext(DropdownContext)
    const navigate=useNavigate()
    let gotohome=()=>{
        navigate("")
    }
  
  return (
      <div className={styles.maincontainer}>
            <div className={styles.catcontainer}>
                <div style={{cursor:"pointer"}}>Clothing For Men <span onClick={handlemendrop}>{mendrop ? <i class="fa-solid fa-caret-up"></i>:<i class="fa-solid fa-caret-down"></i>}</span>
                {mendrop && <Mensdrop/>}</div>
                <div style={{cursor:"pointer"}}>Clothing For Women<span onClick={handlewomendrop}>{womendrop ? <i class="fa-solid fa-caret-up"></i>:<i class="fa-solid fa-caret-down"></i>}</span>
                {womendrop && <Womensdrop/>}</div>
                <div style={{cursor:"pointer"}}>Clothing For Kids<span onClick={handlekidsdrop}>{kiddrop ? <i class="fa-solid fa-caret-up"></i>:<i class="fa-solid fa-caret-down"></i>}</span>
                {kiddrop && <Kidsdrop/>}</div>
            </div>
            <div className={styles.lscontainer}>
                <button onClick={gotohome}>Home</button>
                <button style={{cursor:"pointer"}}>Signup</button>
                <button style={{cursor:"pointer"}}>Login</button>
                <div><i  style={{height:"30px"}}class="fa-solid fa-cart-shopping"></i><span>0</span></div>
            </div>
      </div>
    
  )
}
