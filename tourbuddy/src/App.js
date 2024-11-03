import './App.css';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import Discover from './pages/Discover';
import { Routes,Route } from 'react-router-dom';
import Help from './componets/Help';
import Profile from './pages/Profile';
import PaymentPage from './pages/Payment';
import Description from './pages/Description';

function App() {  
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Help' element={<Help/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/Description" element={<Description/>}/>
      </Routes>
    </div>
  );
}

export default App;
