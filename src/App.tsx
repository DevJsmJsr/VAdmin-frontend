import "./App.css";
import Routes from "~routes/Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} pauseOnHover />
      <Routes />
    </>
  );
}

export default App;
