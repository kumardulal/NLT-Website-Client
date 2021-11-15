import React, { useState } from "react";
import ApiMessage from "./api/ApiMessage";
import Colors from "./collections/Color";
import { AiFillMessage } from "react-icons/ai";

function ContactForm() {
  const [messagedata, setMessageData] = useState({
    sendername: "sendername",
    senderidentity: "sender ",
    messagesubject: "subject",
    message: "demo",
  });

  //handlers
  const handleSenderName = (e) => {
    const { value } = e.target;
    setMessageData((prevState) => ({
      ...prevState,
      sendername: value,
    }));
  };
  const handleSenderIdentity = (e) => {
    const { value } = e.target;
    setMessageData((prevState) => ({
      ...prevState,
      senderidentity: value,
    }));
  };
  const handleMessageSubject = (e) => {
    const { value } = e.target;
    setMessageData((prevState) => ({
      ...prevState,
      messagesubject: value,
    }));
  };

  const handleMessage = (e) => {
    const { value } = e.target;
    setMessageData((prevState) => ({
      ...prevState,
      message: value,
    }));
  };
  const handleSubmit = () => {
    ApiMessage(messagedata);
  };

  return (
    <div style={styles.contactdformMain}>
      <div
        style={{
          display: "flex",
          width: "90%",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundColor: Colors.five,
            height: "62px",
            borderTopRightRadius: "20px",
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              margin: "5px",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Drop Us Message
          </div>
          <AiFillMessage fontSize="40px" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            style={styles.inputs}
            placeholder="Full Name"
            type="text"
            onChange={handleSenderName}
          />
          <input
            style={styles.inputs}
            placeholder="Email/PhoneNumber"
            type="email"
            onChange={handleSenderIdentity}
          />
          <input
            style={styles.inputs}
            placeholder="Subject"
            type="text"
            onChange={handleMessageSubject}
          />
          <textarea
            style={styles.inputs}
            placeholder="Message"
            type="text"
            onChange={handleMessage}
          />
        </div>
        {/* Divider line */}
        <div
          style={{
            height: "2px",
            backgroundColor: Colors.one,
            marginTop: "10px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        />
        <div style={{ margin: "20px" }}>
          <button style={styles.submitbtn} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
const styles = {
  contactdformMain: {
    display: "flex",
    flexDirection: "column",
    width: "96%",
    height: "510px",
    backgroundColor: Colors.seven,
    minWidth: "280px",
    maxWidth: "470px",
    borderRadius: "15PX",
    margin: "6px ",
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    height: "50px",
    color: Colors.try3,
    textAlign: "center",
    margin: "3px",
  },
  submitbtn: {
    height: "55px",
    color: Colors.text1,
    backgroundColor: Colors.four,
    fontSize: "20px",
    textAlign: "center",
    width: "100%",
  },
};

export default ContactForm;
