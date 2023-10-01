import React from 'react'
import "./Commentform.css"
import Input from './Input/Input'


export default function Commentform() {
  return (
    <div className='comment-form'>
      <h4 className='commentCounter'>ثبت نظر</h4>
      <form >
        <div className="comment-inputs">
          <Input value="نام" />
          <Input value="ایمیل" />
          <Input value="وبسایت" />
        </div>
        <div className="input-text" >
          <textarea className='personinfo' cols="30" rows="3" placeholder="پیام" required></textarea>
        </div>
        <div className="input-text">
          <button className="btn" name="submit" type="submit">ارسال</button>
        </div>
      </form>
    </div>
  )
}
