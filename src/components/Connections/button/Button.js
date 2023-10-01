import React from 'react'
import "./Button.css";

export default function Button(props) {
  return (
    <div>
      <a title='Description' className={props.className}>{props.innerBtn}</a>
    </div>
  )
}
