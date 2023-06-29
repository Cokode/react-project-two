import logo from './assets/logo.svg';
import './App.css';
import Header from "./components/Header";
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header logo= {logo}/>
      <Profile userName={"Kgopfa"}/>
    </div>
  );
}
export default App;