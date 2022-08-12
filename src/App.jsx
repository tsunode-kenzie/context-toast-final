import ToastContainer from './components/ToastContainer';
import Provider from './contexts';
import Routes from './routes';
import Global from './styles/global';

function App() {
  return (
    <Provider>
      <Global />
      <Routes />
      <ToastContainer />
    </Provider>
  );
}

export default App;
