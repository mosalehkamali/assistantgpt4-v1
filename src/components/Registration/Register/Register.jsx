import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Register() {
  const [usernameInput, setusernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  function usernameHandeler(event) {
    setusernameInput(event.target.value);
  }
  function emailHandeler(event) {
    setEmailInput(event.target.value);
  }
  function passwordHandeler(event) {
    setPasswordInput(event.target.value);
  }

  const loginInfo = {
    username: usernameInput,
    email: emailInput,
    password: passwordInput,
  };

  function sendData(data) {
    if(usernameInput && emailInput && passwordInput){
      fetch("http://assistantgpt4.com/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "User Created Successfully") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "حساب شما با موفقیت ساخته شد",
              showConfirmButton: false,
              timer: 1800,
            });
            setTimeout(() => {
              window.location = "/Registration";
            }, 2000);
          } else if (data.errors[0] === "Email has already been used") {
            Swal.fire("!این حساب قبلا وجود داشته", "", "error");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });


    
    setusernameInput("");
    setEmailInput("");
    setPasswordInput("");
      }
  }

  return (
    <div className="Login">
      <h2 className="mainStartrerTitle">ثبت نام</h2>

      <div className="loginCntaner">
        <div className="InputContaner">
          <input
            className="loginInput"
            onChange={usernameHandeler}
            type="text"
            value={usernameInput}
            dir="rtl"
            placeholder="نام کاربری"
            />
        </div>
        <div className="InputContaner">
          <input
            className="loginInput"
            onChange={emailHandeler}
            type="text"
            value={emailInput}
            dir="rtl"
            placeholder="ایمیل"
            />
        </div>
        <div className="InputContaner">
          <input
            className="loginInput"
            onChange={passwordHandeler}
            type="text"
            value={passwordInput}
            dir="rtl"
            placeholder="کلمه عبور"
          />
        </div>
        <button className="registerBtn" onClick={() => sendData(loginInfo)}>
          ثبت نام
        </button>
      </div>
    </div>
  );
}
