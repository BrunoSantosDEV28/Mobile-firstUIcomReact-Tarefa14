import React from "react";
import styles from "./Reply.module.css";

const Reply = ({ response, author, date, likes }) => {
  return (
    <div className={styles.reply}>
      <p>{response}</p>
      <p className={styles.details}>
        Autor: {author} | Data: {date} | Curtidas: {likes}
      </p>
    </div>
  );
};

export default Reply;
