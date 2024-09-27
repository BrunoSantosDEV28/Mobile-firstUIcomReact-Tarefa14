import React, { useState } from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.menu}>
      <button onClick={toggleMenu} className={styles.hamburger}>
        ☰
      </button>
      <ul className={isOpen ? styles.open : styles.closed}>
        <li>
          <a href="#tópicos">Tópicos</a>
        </li>
        <li>
          <a href="#recentes">Recentes</a>
        </li>
        <li>
          <a href="#respondidos">Respondidos</a>
        </li>
        <li>
          <a href="#curtidos">Curtidos</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
