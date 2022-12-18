import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './component/sidebar';
import Navbar from './component/navbar';
import Login from './component/login';
import Home from './component/home/home';
import { publicRoutes,privateRoute } from './routes';
import { useEffect, useState } from 'react';
import Modal from './lib/modal';
import ModalBody from './lib/modal/modalbody';
import ModalFooter from './lib/modal/modalfooter';
import useModal from './lib/modal/useModal';
import NewHotel from './component/newHotel/newHotel';

function App() {

  useEffect(()=>{

    //checkAuth

  },[])

  return (
    <div>
      <NewHotel/>
      <Router>
       
      </Router>
    </div>
  );
}

export default App;
