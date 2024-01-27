import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          
          <Route path="/contact" exact Component={Contact}/>
         
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
