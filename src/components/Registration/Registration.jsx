import { useState } from 'react';
import './Registration.css';
import Login from './Login/Login';
import Register from './Register/Register';


export default function Registration() {
  const [toggle, setToggle] = useState(true);
  const [content, setContent] = useState(<Login/>);
  const [toggleText, setToggleText] =useState("ساخت حساب جدید");
   
  function changeContent(){
    if(toggle){
      setToggle(!toggle)
      setContent(<Register/>)
      setToggleText("ورود به حساب قبلی")
    }else{
      setToggle(!toggle)
      setContent(<Login/>)
      setToggleText("ساخت حساب جدید")
    }
  }
  return (
    <div className='Registration'>
      <div className="registerBGColor">

      {content}
      <div className="buyingBtn" style={{"cursor":"pointer", "width":"5rem" ,"fontSize":"0.6rem" ,"textAlign":"center"}} onClick={changeContent}>
       {toggleText}
      </div>
       </div>
    </div>
  )
}
