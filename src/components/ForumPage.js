import React, { useState } from "react";
import ForumPost from "../components/ForumPost";
import Reply from "../components/Reply";
import ReplyForm from "../components/ReplyForm";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import styles from "./ForumPage.module.css";

const ForumPage = () => {
  const [replies, setReplies] = useState([]);
  const username = "Usuário Teste"; // Usuário autenticado

  const handleNewReply = (response) => {
    const newReply = {
      response,
      author: username,
      date: new Date().toLocaleString(),
      likes: 0,
    };
    setReplies([...replies, newReply]);
  };

  const recentTopics = [
    "Tópico 1",
    "Tópico 2",
    "Tópico 3",
    "Tópico 4",
    "Tópico 5",
  ];
  const mostAnswered = [
    "Tópico A",
    "Tópico B",
    "Tópico C",
    "Tópico D",
    "Tópico E",
  ];
  const mostLiked = [
    "Tópico X",
    "Tópico Y",
    "Tópico Z",
    "Tópico W",
    "Tópico V",
  ];

  return (
    <div className={styles.forumPage}>
      <Menu />
      <main>
        <ForumPost
          title="Título do Tópico"
          subtitle="Subtítulo do Tópico"
          description="Descrição do Tópico"
          author="Autor do Tópico"
          date={new Date().toLocaleString()}
          likes={10}
          replies={replies.length}
        />
        <div className={styles.replies}>
          {replies.map((reply, index) => (
            <Reply
              key={index}
              response={reply.response}
              author={reply.author}
              date={reply.date}
              likes={reply.likes}
            />
          ))}
        </div>
        <ReplyForm onSubmit={handleNewReply} username={username} />
      </main>
      <Sidebar
        recentTopics={recentTopics}
        mostAnswered={mostAnswered}
        mostLiked={mostLiked}
      />
    </div>
  );
};

export default ForumPage;
