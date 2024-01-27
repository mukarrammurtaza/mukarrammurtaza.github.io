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
    <div className="section gtSection">
      <aside className="csAside gtAside">
        <p>Tell about yourself and the project</p>
        <h2>Get in touch</h2>
      </aside>
      <form className="gtForm" onSubmit={submissionHandler}>
        <div className="gtInputsContainer">
          <div className="input-container">
            <input
              type="email"
              required
              onChange={usernameHandler}
              value={username}
            />
            <label className="label-n">Your Business Email</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              required
              onChange={messageHandler}
              value={messageText}
            />
            <label className="label-n">Your Idea</label>
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
