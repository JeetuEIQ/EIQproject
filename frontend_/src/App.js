import './App.css';
import { Login } from './components/auth/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Signup } from './components/auth/Signup';
import { ForgotPassword } from './components/auth/ForgotPassword';
import { Home } from './components/home/Home';
import { Overview } from './components/directorMaster/Overview';
import { Personal } from './components/directorMaster/Personal';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/overview" element={<Overview/>}/>
          <Route path="/personal" element={<Personal/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
