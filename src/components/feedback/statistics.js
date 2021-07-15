import React from "react";
import Notification from "./Notification";
import styles from "./Feedback.module.scss";
const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return total > 0 ? (
    <>
      <ul className={styles.list}>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
      </ul>
      <p>Total:{total}</p>
      <p>Positive percentage: {percentage}%</p>
    </>
  ) : (
    <Notification />
  );
};

export default Statistics;
