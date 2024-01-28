import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPass';
import {Shop} from './pages/Shop';
import {Cart} from './pages/Cart';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/contact" exact Component={Contact}/>
          <Route path="/shop" exact Component={Shop}/>
          <Route path="/cart" exact Component={Cart}/>
          <Route path="/login" exact Component={Login}/>
          <Route path="/signup" exact Component={Signup}/>
          <Route path='/forgot-password' exact Component={ForgotPassword}/>
        </Routes>
        <Footer/>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
