import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ onClick, type, children }) => {
  return (
    <button onClick={onClick} className={styles.btn} type={type}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
