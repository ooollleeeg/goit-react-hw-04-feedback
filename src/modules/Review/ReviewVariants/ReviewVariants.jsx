import PropTypes from 'prop-types';

import Button from 'shared/components/Button';

import styles from './reviewVariants.module.scss';

const ReviewVariants = ({ leaveFeedback }) => {
  return (
    <>
      <div className={styles.btnWrap}>
        <Button onClick={() => leaveFeedback('good')} type="button">
          Good
        </Button>
        <Button onClick={() => leaveFeedback('neutral')} type="button">
          Neutral
        </Button>
        <Button onClick={() => leaveFeedback('bad')} type="button">
          Bad
        </Button>
      </div>
    </>
  );
};

export default ReviewVariants;

ReviewVariants.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
};
