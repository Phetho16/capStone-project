import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header'
import Login from './components/layout/Login'
import Register from './components/layout/Register';
import './App.css';
import Homepage from './components/homePage/Homepage';
import axios from 'axios'


import NewYorkPage from './components/Location/NewYorkPage'
import MaldivesPage from './components/Location/MaldivesPage'
import HongKongPage from './components/Location/HongKongPage'
import NetherLandsPage from './components/Location/NetherLandsPage'
 

axios.defaults.baseURL ='http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Homepage/>}>
      </Route>
    <Route path='/newyork' element={<NewYorkPage/>}/>
    <Route path='/maldives' element={<MaldivesPage/>}/>
    <Route path='/hongkong' element={<HongKongPage/>}/>
    <Route path='/netherlands' element={<NetherLandsPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      
    
     </Routes>
  
    
    </>
  );
}

export default App;
