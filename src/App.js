
import './App.css';
import Header from './Components/sharedfile/Header';
import { Route, Routes } from 'react-router-dom';
import Profilepage from './Components/ProfilePage/Profilepage'
import Home from './Components/HomePage/Home';
import Login from './Components/LoginOrRegister/Login';
import Register from './Components/LoginOrRegister/Register';
import NotFound from './Components/NotFoundPage/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profilepage/>}/>
      <Route path='*' element={<NotFound/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
