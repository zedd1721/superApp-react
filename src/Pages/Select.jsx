import React from "react";
import styles from "./Select.module.css";
import Cardselect from "../components/Cardselect";
import { useNavigate } from "react-router-dom";

function Select() {
  const navigate = useNavigate();
  const cardData = [
    {
      title: "Action",
      bcg: "#ff5209",
      id: "./home/1.png",
    },
    {
      title: "Drama",
      bcg: "#D7A4FF",
      id: "./home/2.png",
    },
    {
      title: "Romance",
      bcg: "#148A08",
      id: "./home/3.png",
    },
    {
      title: "Thriller",
      bcg: "#84C2FF",
      id: "./home/4.png",
    },
    {
      title: "Western",
      bcg: "#902500",
      id: "./home/5.png",
    },
    {
      title: "Horror",
      bcg: "#7358FF",
      id: "./home/6.png",
    },
    {
      title: "Fantasy",
      bcg: "#FF4ADE",
      id: "./home/7.png",
    },
    {
      title: "Music",
      bcg: "#E61E32",
      id: "./home/8.png",
    },
    {
      title: "Fiction",
      bcg: "#6CD061",
      id: "./home/9.png",
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="./Superlogo.png" alt="" />
        <h1>Choose your entertainment category</h1>
        <div className={styles.selected}></div>
      </div>
      <div className={styles.right}>
        <div className={styles.cate}>
          {cardData.map((item, index) => (
            <Cardselect title={item.title} bcg={item.bcg} img={item.id} />
          ))}
        </div>
        <div className={styles.btn}>
          <button onClick={() => navigate("/home")}>Next Page</button>
        </div>
      </div>
    </div>
  );
}

export default Select;
