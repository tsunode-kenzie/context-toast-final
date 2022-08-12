import { useContext } from 'react';
import { ToastContext } from '../../contexts/ToastContext';
import Toast from '../Toast';
import { Container } from './styles';

const ToastContainer = () => {
  const { messages } = useContext(ToastContext);

  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
