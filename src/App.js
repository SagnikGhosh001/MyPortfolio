import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ResponsiveAppBar from './components/header/ResponsiveAppBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Skills from './pages/Skills';
import Qualification from './pages/Qualification';
function App() {
  return (
    <>
      <Router>
        <ResponsiveAppBar/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/aboutme'element={<About/>}/>
          <Route path='/qualification'element={<Qualification/>}/>
          <Route path='/projects'element={<Projects/>}/>
          <Route path='/contact'element={<ContactMe/>}/>
          <Route path='/skills'element={<Skills/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
