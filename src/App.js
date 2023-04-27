import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import characters from './data.js';
import {  Route, Routes, useLocation } from 'react-router-dom';
import Detail from './components/detail/Detail';
import Login from './components/Login';

function App() {
  const { pathname } = useLocation();
   return (
      <div className='App'>
        <Navbar/>
        <Routes>
       
          <Route path='/' element={<Login/>}/>
          <Route path='/details' element={<Detail/>}/>
          <Route path='/home' element={<Cards characters={characters}/>}/>
          
          
        
        </Routes>
      </div>
   );
}

export default App;