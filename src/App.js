import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/cart' element={<Cart></Cart>} />
          <Route path='/checkout' element= {<Checkout></Checkout>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
