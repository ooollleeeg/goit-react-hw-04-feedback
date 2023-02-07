import PropTypes from 'prop-types';

import styles from './reviewBlock.module.scss';

const ReviewBlock = ({ children, title }) => {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{title}</h2>
      {children}
    </div>
  );
};

export default ReviewBlock;

ReviewBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
