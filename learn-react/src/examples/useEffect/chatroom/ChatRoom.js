import { createChatRoom } from "./chat";
import { useState, useEffect } from "react";

export default function ChatApp() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  function setRoom(e) {
    setRoomId(e.target.value);
  }

  return (
    <>
      <p>This server is running in development</p>
      <p>
        1. when chat room component is created in DOM then react run useEffect
        to connect chat server. See console create -> disconnect -> create
        sequence. This sequence is in development mode only.
      </p>
      <p>
        2. WHen chat roomId or url change then cleanup function run before
        running useEffect.
      </p>
      <p>
        3. On closing chat room i.e after removing component from DOM useEffect
        RUN CLEANUP function. See console disconnect runs.
      </p>

      <label htmlFor="roomid">Choose Room Id:</label>
      <select value={roomId} id="roomid" onChange={setRoom}>
        <option value="general">General</option>
        <option value="JS">JS</option>
        <option value="CSS">CSS</option>
      </select>
      <button onClick={handleShow}>{show ? "close chat" : "open chat"}</button>

      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}

function ChatRoom({ roomId }) {
  const [url, setUrl] = useState("https://localhost:3000");

  useEffect(() => {
    const setupConnection = createChatRoom(url, roomId);

    setupConnection.connect();

    return () => {
      setupConnection.disconnect();
    };
  }, [roomId, url]);

  function setServerUrl(e) {
    setUrl(e.target.value);
  }

  return (
    <>
      <label htmlFor="url">Server URL: </label>
      <input id="url" type="text" value={url} onChange={setServerUrl} />
      <h1>Welcome to {roomId} chat group</h1>
    </>
  );
}
