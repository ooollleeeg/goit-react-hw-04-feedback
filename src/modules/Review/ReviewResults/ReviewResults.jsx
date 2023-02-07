import PropTypes from 'prop-types';

import styles from './reviewResult.module.scss';

const ReviewResults = ({ good, neutral, bad, total, goodPercent }) => {
  return (
    <>
      <p className={styles.reviewText}>Good: {good}</p>
      <p className={styles.reviewText}>Neutral: {neutral}</p>
      <p className={styles.reviewText}>Bad: {bad}</p>
      <p className={styles.reviewText}>Total: {total}</p>
      <p className={styles.reviewText}>Positive feedback: {goodPercent}%</p>
    </>
  );
};

export default ReviewResults;

ReviewResults.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  goodPercent: PropTypes.number.isRequired,
};
