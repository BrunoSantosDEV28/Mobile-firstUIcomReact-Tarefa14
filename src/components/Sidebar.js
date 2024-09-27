import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ recentTopics, mostAnswered, mostLiked }) => {
  return (
    <aside className={styles.sidebar}>
      <h3>Tópicos Recentes</h3>
      <ul>
        {recentTopics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
      <h3>Tópicos Mais Respondidos</h3>
      <ul>
        {mostAnswered.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
      <h3>Tópicos Mais Curtidos</h3>
      <ul>
        {mostLiked.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
