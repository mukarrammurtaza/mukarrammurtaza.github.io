import React from "react";

const GetInTouchSection = () => {
  const [username, setUsername] = React.useState("");
  const [messageText, setMessageText] = React.useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const messageHandler = (e) => {
    setMessageText(e.target.value);
  };

  const submissionHandler = (e) => {
    e.preventDefault();
    setUsername("");
    setMessageText("");
  };

  return (
    <div className="section gtSection" >
      <aside className="csAside gtAside">
        <p>Tell about yourself and the project</p>
        <h2>Get in touch</h2>
      </aside>
      <form className="gtForm" onSubmit={submissionHandler}>
        <div className="gtInputsContainer">
          <div className="input-container">
            <input
              type="email"
              id="email-input"
              required
              onChange={usernameHandler}
              value={username}
              aria-label="Your Business Email"
            />
            <label className="label-n" htmlFor='email-input'>Your Business Email</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              id="message-input"
              required
              onChange={messageHandler}
              value={messageText}
              aria-label="Your Idea"
            />
            <label className="label-n" htmlFor='message-input'>Your Idea</label>
          </div>
        </div>
          <button type="submit" className="sendButton clickable">
            <p>Send</p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--white)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </button>
      </form>
    </div>
  );
};

export default GetInTouchSection;
