import { Component } from 'react';

import ReviewVariants from './ReviewVariants/ReviewVariants';
import ReviewResults from './ReviewResults/ReviewResults';
import ReviewBlock from './ReviewBlock/ReviewBlock';
import NotificationMessage from './NotificationMessage/NotificationMessage';

import styles from './review.module.scss';

class Review extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = status => {
    this.setState(prevState => {
      return { [status]: prevState[status] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage(good) {
    const total = this.countTotalFeedback();
    const value = this.state.good;
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const goodPercent = this.countPositiveFeedbackPercentage('good');
    return (
      <div>
        <h1 className={styles.title}>Cafe "Espresso" feedback</h1>
        <div className={styles.wrapper}>
          <ReviewBlock title="Please leave feedback">
            <ReviewVariants leaveFeedback={this.leaveFeedback} />
          </ReviewBlock>
          <ReviewBlock title="Statistics">
            {total === 0 ? (
              <NotificationMessage message="There is no feedback" />
            ) : (
              <ReviewResults
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                goodPercent={goodPercent}
              />
            )}
          </ReviewBlock>
        </div>
      </div>
    );
  }
}

export default Review;
