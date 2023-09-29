import React, { useState, useEffect } from "react";
import "./ExtraNav.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ExtraNav({ clearChat }) {
  const navigate = useNavigate();
  const [requests, setRequests] = useState("");
  const [timerStyle, setTimerStyle] = useState({ display: "none" });
  const [datatime, setDatatime] = useState();
  const [secondsRemaining, setSecondsRemaining] = useState();

  const token = JSON.parse(localStorage.getItem("A-gpt4Token"));
  useEffect(() => {
    fetch("http://assistantgpt4.com/post/time/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        // Handle the data returned by the API
        if (data.time) {
          Swal.fire(
            '!شارژ رایگان حساب شما تمام شده',
            'لطفا تا شارژ مجدد صبر کنید',
            'error'
          )
          setTimerStyle({ display: "flex" });
          setRequests("0");

          let timer = data.time
           timer = timer.split(":");
          timer = timer.map((str) => parseInt(str, 10));
          let dataHours = timer[0] * 60 * 60;
          let dataMin = timer[1] * 60;
          let dataSec = timer[2];
          const initialTimeInSeconds = dataHours + dataMin + dataSec; // 8 hours in seconds
          setSecondsRemaining(initialTimeInSeconds);
        } else if (data.request_number) {
          setRequests(data.request_number);
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      });
  }, []);


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000); // Update every 1000ms (1 second)

    return () => {
      clearInterval(intervalId); // Cleanup the interval when the component unmounts
    };
  }, [secondsRemaining]); // Re-run the effect whenever secondsRemaining changes

  // Convert secondsRemaining to hours, minutes, and seconds
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  function showHours() {
    if (hours < 10) {
      return "0" + hours;
    } else if (hours >= 10) {
      return hours;
    }
  }

  function showMinutes() {
    if (minutes < 10) {
      return "0" + minutes;
    } else if (minutes >= 10) {
      return minutes;
    }
  }

  function showSeconds() {
    if (seconds < 10) {
      return "0" + seconds;
    } else if (seconds >= 10) {
      return seconds;
    }
  }

  return (
    <div className="ExtraNav">
      <div className="extraNavContent">
        <div className="extraNavBtns">
          <button
            className="EnavBtn Ebackbtn"
            onClick={() => {
              navigate(-1);
            }}
          >
            {" "}
            <svg
              style={{ border: "2px #fff solid" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </button>
          <button className="EnavBtn" onClick={clearChat}>
            Clear Chat
          </button>
        </div>
        <div className="requests">
          <p className="reqText">Remaining requests :</p>
          <p className="reqNumber">{requests}</p>
        </div>
        <div className="Chat-name">Extra GPT</div>
      </div>
      <div className="timerContent" style={timerStyle}>
        <span className="timeCounter">
          {showHours()} : {showMinutes()} : {showSeconds()}
        </span>
        <span className="timer-text">
          .زمان باقی مانده برای شارژ مجدد حساب شما
        </span>
      </div>
    </div>
  );
}

export default ExtraNav;
