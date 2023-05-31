// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHome from './pages/PageHome';
import Competition from './pages/Competition';
import Workshop from './pages/Workshop';
import Seminar from './pages/Seminar';
import About from "./pages/About";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/about" element={<About />} />
    
        </Routes>
      </Router>
    </>
  );
}

export default App;
