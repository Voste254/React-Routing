import Navbar from './components/navbar'
import Home from './components/Home'
import Contacts from './components/Contacts'
import About from './components/About'
import {Route ,Routes} from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <Routes >
      <Route path='/' element={<Navbar/>}>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/contacts" element={<Contacts/>} />
          <Route  path="/about" element={<About/>} />  
      </Route>
     
    </Routes>
  );
}
