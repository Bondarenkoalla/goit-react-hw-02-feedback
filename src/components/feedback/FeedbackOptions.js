import React from "react";
import styles from "./Feedback.module.scss";
const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <>
    <button className={styles.button} type="button" onClick={onGood}>
      Good
    </button>
    <button className={styles.button} type="button" onClick={onNeutral}>
      Neutral
    </button>
    <button className={styles.button} type="button" onClick={onBad}>
      Bad
    </button>
  </>
);
export default FeedbackOptions;
