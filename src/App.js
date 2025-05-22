import Navbar from './components/navbar'
import Home from './components/Home'
import Contacts from './components/Contacts'
import About from './components/About'
import Count from './components/count'
import Notfound from './components/Notfound'
import {Route ,Routes} from 'react-router-dom'
import Userprofile from './components/Userprofile.js';
import './App.css';

export default function App() {
  return (
    <Routes >
      <Route path='/' element={<Navbar/>}>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/contacts" element={<Contacts/>} />
          <Route  path="/about" element={<About/>} /> 
          <Route  path="/count" element={<Count/>} /> 
          <Route  path="/count/userprofile/:username" element={<Userprofile/>} /> 
      </Route>
      <Route path="*" element={<Notfound/>}/>
     
    </Routes>
  );
}
