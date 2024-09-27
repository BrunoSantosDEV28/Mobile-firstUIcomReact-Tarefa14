import React, { useState } from "react";
import styles from "./ReplyForm.module.css";

const ReplyForm = ({ onSubmit, username }) => {
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(response);
    setResponse("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.replyForm}>
      <textarea
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        placeholder="Digite sua resposta..."
        required
      />
      <button type="submit">Enviar</button>
      <p>Usuário: {username}</p>
    </form>
  );
};

export default ReplyForm;
