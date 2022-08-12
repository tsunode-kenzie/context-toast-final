import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const ToastContext = createContext({});

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  function addToast({ title, description, type }) {
    const toast = {
      id: uuid(),
      title,
      description,
      type,
    };

    setMessages((previuosMessages) => [...previuosMessages, toast]);
  }

  function removeToast(id) {
    const newMessages = messages.filter((message) => message.id !== id);

    setMessages(newMessages);
  }

  return (
    <ToastContext.Provider value={{ addToast, removeToast, messages }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
