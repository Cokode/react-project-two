import logo from './assets/logo.svg';
import './App.css';
import Header from "./components/Header";
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Simple from './pages/Simple'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header logo= {logo}/>
      <Routes>
        <Route path='/' element={<Profile userName ='Cokode' />} />
        <Route path='/projects' element={<Projects userName='Cokode' />} />
        <Route path='/Simple' element={<Simple /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;