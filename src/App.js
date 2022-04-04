import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import { Routes } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Reviews from './components/Reviews/Reviews';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  

  return (

  
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/Reviews" element={<Reviews/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
