import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header'
import Login from './components/layout/Login'
import Register from './components/layout/Register';
import './App.css';
import Homepage from './components/homePage/Homepage';
import Listings from './components/Listings/Listings';
import AllListings from './components/Listings/AllListings';




const App = () => {
  
  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Homepage/>}>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/all-listings' element={<AllListings/>}/>
      <Route path='/listings' element={<Listings/>}/>
      
    
     </Routes>
  
    
    </>
  );
}

export default App;
