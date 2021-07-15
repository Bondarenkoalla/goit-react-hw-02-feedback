import React from "react";

import Statistics from "./statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addGoodFeedback = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    });
  };
  addNeutralFeedback = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  addBadFeedback = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.addGoodFeedback}
            onNeutral={this.addNeutralFeedback}
            onBad={this.addBadFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default Feedback;
