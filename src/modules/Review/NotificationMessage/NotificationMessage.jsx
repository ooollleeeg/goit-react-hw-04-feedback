import PropTypes from 'prop-types';

import styles from './notificationMessage.module.scss';

const NotificationMessage = ({ message }) => {
  return (
    <div className={styles.notifMessage}>
      <p>{message}</p>
    </div>
  );
};

export default NotificationMessage;

NotificationMessage.propTypes = { message: PropTypes.string.isRequired };
