import React from "react";
import PropTypes from "prop-types";
import styles from "./Feedback.module.scss";

// const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
//   <>
//     <button className={styles.button} type="button" onClick={onGood}>
//       Good
//     </button>
//     <button className={styles.button} type="button" onClick={onNeutral}>
//       Neutral
//     </button>
//     <button className={styles.button} type="button" onClick={onBad}>
//       Bad
//     </button>
//   </>
// );

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((option) => (
      <button
        className={styles.button}
        type="button"
        onClick={() => onLeaveFeedback(option)}
        key={option}
      >
        {option}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
FeedbackOptions.prototype = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
