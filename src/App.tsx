import React from 'react'
import ProductCard from './components/ProductCard';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/Products/Product';
const App:React.FC = () => {
  return (
    <div>
     <Router>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path='/product' element={<Product/>} />
        </Routes>
      </Router> 
     
    </div>
  )
}

export default App;
