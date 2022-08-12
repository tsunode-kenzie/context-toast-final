import AuthProvider from './AuthContext';
import ToastProvider from './ToastContext';

const Provider = ({ children }) => (
  <ToastProvider>
    <AuthProvider>{children}</AuthProvider>
  </ToastProvider>
);

export default Provider;
