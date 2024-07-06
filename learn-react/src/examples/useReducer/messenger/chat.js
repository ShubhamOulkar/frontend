import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  const [msg, setMessage] = useState(message);
  const sendMessage = () => {
    const emailMsg = `
    To: ${contact.email}
    Sub: ${msg}
    `;
    setMessage("");
    alert(emailMsg);
  };
  return (
    <section className="chat">
      <textarea
        value={msg}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          // TODO: dispatch edited_message
          // (Read the input value from e.target.value)
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
          setMessage(e.target.value);
        }}
      />
      <br />
      <button onClick={sendMessage}>Send to {contact.email}</button>
    </section>
  );
}
