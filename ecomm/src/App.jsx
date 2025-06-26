import { useState, useEffect } from 'react'
// import './App.css'
import { useSelector, useDispatch } from 'react-redux'; 
import { fetchProducts } from './redux/slice/ProductSlice';
import Homepage from './components/HomePage'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';
import ProductsPage from './components/ProductsPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import Header from './components/Header';
import CartPage from './components/CartPage';

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch(); 
  const productCount = useSelector(state => state.product)
  const products = useSelector(state => state.products.items); 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
