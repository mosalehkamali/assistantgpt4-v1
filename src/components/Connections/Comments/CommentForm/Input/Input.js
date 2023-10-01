import React from 'react'
import "./Input.css";


export default function Input(props) {
  return (
    <div className='input'>
      <input className='personinfo' type="text" placeholder={props.value} required></input>
      
    </div>
  )
}
