import React, { useState, useEffect } from "react";
import copy from "clipboard-copy";
import "./ChatExtra.css";
import ExtraNav from "./ExtraNav/ExtraNav";
import Swal from "sweetalert2";

function ChatExtra() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [memory, setMemory] = useState("");

  const [chatData, setChatData] = useState([]);
  const token = JSON.parse(localStorage.getItem("A-gpt4Token"));
  const [key, setKey] = useState(0);

  // previous chats

  useEffect(() => {
    fetch("https://assistantgpt4.com/post/posts_for/", {
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
        let newChatData = [...chatData];

        data.forEach((prevChat) => {
          newChatData.push({
            message: prevChat.content,
            response: prevChat.response_gpt,
          });
        });

        newChatData = newChatData.reverse();
        setChatData(newChatData);
        window.scrollTo(0, document.body.scrollHeight);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  function memoryBtn(e) {
    setMemory(e.target.parentElement.nextSibling.textContent);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Saved to memory attachment successfully",
    });
  }

  function handleCopyClick(e) {
    copy(e.target.parentElement.nextSibling.textContent);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Copied successfully",
    });
  }
  
  function sendMessage() {
    setChatData([
      ...chatData,
      { message: input, response: '' },
    ]);
    window.scrollTo(0, document.body.scrollHeight);
    fetch("http://assistantgpt4.com/post/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: input,
        author: token.username,
        memory: `{1_message:${memory}}`,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      setChatData([
        ...chatData,
        { message: data.content, response: data.response_gpt },
      ]);
      window.scrollTo(0, document.body.scrollHeight);
      })
      .then(
        setTimeout(() => {
          setKey((prevKey) => prevKey + 1);
        }, 5000)
      )
      .catch((error) => {
        console.error("Error:", error);
      });
    if (input) {
      setMessages([...messages, { text: input }]);
      setInput("");
    }
  }

  function clearChat() {
    setChatData([]);
  }

  return (
    <div className="Chat3Pro">
      {<ExtraNav clearChat={clearChat} key={key}></ExtraNav>}
      <div className="backColor">
        <h2 className="ChatBotTitle">Chat Extra</h2>
        <div className="chatBox">
          <div className="messages">
            {chatData.map((chat) => {
              return (
                <div className="chatPart">
                  <div className="chatmessage">
                    <div className="clientMessage">
                      <svg
                        id="chatsvg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      {chat.message}
                    </div>
                  </div>
                  <div className="responses">
                    <div className="serverResponse">
                      <div className="resHeader">
                        <svg
                          id="chatsvg"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                          />
                        </svg>

                        <button
                          className="copyBtn"
                          onClick={(e) => handleCopyClick(e)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-files"
                          >
                            <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
                            <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
                            <path d="M15 2v5h5" />
                          </svg>
                          <div className="copyBtnText">
                          !Copy
                          </div>
                        </button>
                        <button
                          className="copyBtn"
                          onClick={(e) => memoryBtn(e)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-copy-plus"
                          >
                            <line x1="15" x2="15" y1="12" y2="18" />
                            <line x1="12" x2="18" y1="15" y2="15" />
                            <rect
                              width="14"
                              height="14"
                              x="8"
                              y="8"
                              rx="2"
                              ry="2"
                            />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                          </svg>
                          <div className="copyBtnText">
                          !Attachment
                          </div>
                        </button>
                      </div>

                      <div className="response">{chat.response}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bottomGap"></div>
        <div className="message">
          <input
            className="messageInput"
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                sendMessage();
              }
            }}
            value={input}
            type="text"
            placeholder="Send a message"
          />
          <button onClick={sendMessage} className="sendMessageBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatExtra;
