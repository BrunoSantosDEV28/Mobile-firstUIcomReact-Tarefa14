import React from "react";
import styles from "./ForumPost.module.css";

const ForumPost = ({
  title,
  subtitle,
  description,
  author,
  date,
  likes,
  replies,
}) => {
  return (
    <div className={styles.forumPost}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
      <p className={styles.details}>
        Autor: {author} | Data: {date} | Curtidas: {likes} | Respostas:{" "}
        {replies}
      </p>
    </div>
  );
};

export default ForumPost;
