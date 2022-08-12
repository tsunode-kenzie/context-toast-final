import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { ToastContext } from './ToastContext';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { addToast } = useContext(ToastContext);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('@context-demo:token');

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get('/profile');

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const signIn = async (data) => {
    try {
      const response = await api.post('/sessions', data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);
      // sessionstorage cookies
      localStorage.setItem('@context-demo:token', token);

      addToast({
        type: 'success',
        title: 'Login realizado com sucesso',
        description: 'Você será redirecionado...',
      });

      const toNavigate = location.state?.from?.pathname || '/dashboard';

      navigate(toNavigate, { replace: true });
    } catch (error) {
      console.error(error);

      addToast({
        type: 'error',
        title: 'Erro ao realizar login',
        description: 'Verifique o e-mail digitado e a senha.',
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
