import React, { useState } from 'react';
import "./Connection.css";
import Button from "./button/Button";
import Explain from "./Explain/Explain";
import Sticker from "./Sticker/Sticker";
import Comments from "./Comments/Comments";


export default  function Connection() {

    const [content, setContent] = useState(<Comments />);
    const [ExplainclassName, setExplainClassName] = useState("notactive");
    const [StickerclassName, setStickerClassName] = useState("notactive");
    const [CommentsclassName, setCommentsClassName] = useState("active");
    function clickExplain() {
      setContent(<Explain />);
      setExplainClassName("active");
      setStickerClassName("notactive");
      setCommentsClassName("notactive");
    }
    function clickSticker() {
      setContent(<Sticker />);
      setExplainClassName("notactive");
      setStickerClassName("active");
      setCommentsClassName("notactive");
    }
    function clickComments() {
      setContent(<Comments />);
      setExplainClassName("notactive");
      setStickerClassName("notactive");
      setCommentsClassName("active");
    }


  return (
    <div className='connections'>
        <div className="boxButton">
        <ul className="ulButtons">
          <li  onClick={clickComments}><Button className={CommentsclassName} innerBtn="نظرات" /></li>
          <li  onClick={clickExplain}><Button  className={ExplainclassName} innerBtn="توضیحات" /></li>
          <li  onClick={clickSticker}><Button  className={StickerclassName} innerBtn="سوالات پرتکرار" /></li>
        </ul>
      </div>
      <div className="container">
        {content}
      </div>
    </div>
  )
}

