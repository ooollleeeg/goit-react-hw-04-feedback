import { useState } from 'react';

import ReviewVariants from './ReviewVariants/ReviewVariants';
import ReviewResults from './ReviewResults/ReviewResults';
import ReviewBlock from './ReviewBlock/ReviewBlock';
import NotificationMessage from './NotificationMessage/NotificationMessage';

import styles from './review.module.scss';

const Review = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = reviews;

  const total = reviews.good + reviews.neutral + reviews.bad;

  const leaveFeedback = status => {
    setReviews(prevState => {
      const value = prevState[status];
      return { ...prevState, [status]: value + 1 };
    });
  };

  const calcPercentage = propName => {
    const value = reviews[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  };

  const goodPercent = calcPercentage('good');

  return (
    <div>
      <h1 className={styles.title}>Cafe "Espresso" feedback</h1>
      <div className={styles.wrapper}>
        <ReviewBlock title="Please leave feedback">
          <ReviewVariants leaveFeedback={leaveFeedback} />
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
};

export default Review;
