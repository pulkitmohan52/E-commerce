import { useState, useEffect } from 'react'
// import './App.css'
import { useSelector, useDispatch } from 'react-redux'; 
import { fetchProducts } from './redux/slice/ProductSlice';
import Homepage from './components/HomePage'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';
import ProductDetailsPage from './components/ProductsPage';

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
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
