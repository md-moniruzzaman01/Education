import logo from './logo.svg';
import './App.css';
import Header from './Components/sharedfile/Header';
import { Route, Routes } from 'react-router-dom';
import LandingSection from './Components/HomePage/LandingSection';
import Home from './Components/HomePage/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
