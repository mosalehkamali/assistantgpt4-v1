import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";

export default function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  function emailHandeler(event) {
    setEmailInput(event.target.value);
  }
  function passwordHandeler(event) {
    setPasswordInput(event.target.value);
  }

  const loginInfo = {
    email: emailInput,
    password: passwordInput,
  };

  const navigate = useNavigate();

  function sendData(data) {
    if (emailInput && passwordInput) {
      fetch("http://assistantgpt4.com/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.tokens.access) {
            localStorage.removeItem("A-gpt4Token");
            localStorage.setItem(
              "A-gpt4Token",
              JSON.stringify({
                token: data.tokens.access,
                username: data.user.username,
              })
            );

            Swal.fire({
              position: "center",
              icon: "success",
              title: "با موفقیت وارد شدید",
              showConfirmButton: false,
              timer: 1800,
            });
            setTimeout(() => {
              navigate(-1);
            }, 2000);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire("ورود ناموفق", " رمز یا نام کاربری اشتباه است", "error");
        });

      setEmailInput("");
      setPasswordInput("");
    }
  }
  return (
    <div className="Login">
      <h2 className="mainStartrerTitle">ورود</h2>
      <div className="loginCntaner">
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
          ورود
        </button>
      </div>
    </div>
  );
}
