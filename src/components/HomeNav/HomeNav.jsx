import React, { useState, useEffect } from "react";
import HomeNavBtn from "./HomeNavBtn/HomeNavBtn";
import { Link } from "react-router-dom";
import "./HomeNav.css";

function HomeNav() {
  const token = JSON.parse(localStorage.getItem("A-gpt4Token"));
  let profileBtnText = "حساب کاربری";

  if (token !== null) {
    profileBtnText = token.username;
  }

  const [navPos, setNavpos] = useState({});

  const [prevScroll, setPrevScroll] = useState(window.pageYOffset);

  window.addEventListener("scroll", scrollNav);

  function scrollNav() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > prevScroll) {
      setNavpos({
        "margin-top": "-13rem",
      });
      setPrevScroll(window.pageYOffset);
    } else if (currentScroll < prevScroll) {
      setNavpos({
        "margin-top": "0",
        background: "linear-gradient(75deg,#090979 10%,  #01CFFC 150%)",
      });
      setPrevScroll(window.pageYOffset);
    }
    if (window.scrollY === 0) {
      setNavpos({ "background-color": "transparent" });
    }
  }

  return (
    <div className="HomeNav" style={navPos}>
      <div className="NavContent">
        <div className="Navlogo-name">
          <img
            src="./img/assistantGPT.png"
            alt="assistantGPT"
            className="assistantGPT"
          />
        </div>
        <div className="NavbarBtns">
          <HomeNavBtn content="درباره ما" path="/"></HomeNavBtn>
          <HomeNavBtn content="مقاله ها" path="/"></HomeNavBtn>
          <HomeNavBtn content="چت مدل ها" path="/Products"></HomeNavBtn>
          <Link to={"./Registration"} className="profileBtn">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>
            {profileBtnText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
