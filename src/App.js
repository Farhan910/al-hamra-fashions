import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import { Routes } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Reviews from './components/Reviews/Reviews';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {

  

  return (

  
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
