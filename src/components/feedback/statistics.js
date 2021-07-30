import React from "react";
import PropTypes from "prop-types";
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
