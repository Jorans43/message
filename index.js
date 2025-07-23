"use client";
import React from "react";

function MainComponent() {
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      text: "Welcome to Let's Chat!",
      sender: "system",
      time: "10:00 AM",
    },
    {
      id: 2,
      text: "Hey there! How are you?",
      sender: "friend",
      time: "10:01 AM",
    },
  ]);
  const [newMessage, setNewMessage] = React.useState("");
  const [currentUser] = React.useState("me");

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: currentUser,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f0f2f5",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#4267B2",
          color: "white",
          padding: "15px 20px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        Let's Chat
      </div>

      {/* Messages Container */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: "flex",
              justifyContent:
                message.sender === currentUser ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "12px 16px",
                borderRadius: "18px",
                backgroundColor:
                  message.sender === currentUser
                    ? "#4267B2"
                    : message.sender === "system"
                    ? "#e4e6ea"
                    : "#ffffff",
                color:
                  message.sender === currentUser
                    ? "white"
                    : message.sender === "system"
                    ? "#65676b"
                    : "#050505",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                wordWrap: "break-word",
              }}
            >
              <div style={{ fontSize: "14px", lineHeight: "1.4" }}>
                {message.text}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  opacity: 0.7,
                  marginTop: "4px",
                  textAlign: "right",
                }}
              >
                {message.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div
        style={{
          padding: "15px 20px",
          backgroundColor: "white",
          borderTop: "1px solid #e4e6ea",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: "12px 16px",
            border: "1px solid #ccd0d5",
            borderRadius: "20px",
            outline: "none",
            fontSize: "14px",
            backgroundColor: "#f0f2f5",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            backgroundColor: "#4267B2",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}

export default MainComponent;
