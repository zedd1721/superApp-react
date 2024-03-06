import React from "react";
import styles from "../components/Cardselect.module.css";

function Cardselect({ title, bcg, img }) {
  return (
    <div className={styles.card} style={{ backgroundColor: `${bcg}` }}>
      <h1>{title}</h1>
      <div className={styles.cardimg}>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Cardselect;
