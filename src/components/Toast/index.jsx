import { useContext, useEffect, useState } from 'react';
import {
  FiInfo,
  FiAlertCircle,
  FiCheckCircle,
  FiXCircle,
} from 'react-icons/fi';
import { ToastContext } from '../../contexts/ToastContext';
import { Container } from './styles';

const icons = {
  warning: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast = ({ message }) => {
  const [isLeave, setIsLeave] = useState(false);
  const { removeToast } = useContext(ToastContext);

  useEffect(() => {
    let timer;

    if (isLeave) {
      timer = setTimeout(() => {
        removeToast(message.id);
      }, 700);
    } else {
      // timer = setTimeout(() => {
      //   setIsLeave(true);
      // }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isLeave]);

  return (
    <Container
      isLeave={isLeave}
      hasDescription={!!message.description}
      type={message.type}
    >
      {icons[message.type]}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type='button' onClick={() => setIsLeave(true)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
