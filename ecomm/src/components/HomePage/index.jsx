import React from 'react'; 
import './index.css'; 
import Header from '../Header'; 
import SlideShow from '../SlideShow';
import ProductDetailsPage from '../ProductsPage';

const HomePage = () => {
    return (
        <div>
            <SlideShow />
            <ProductDetailsPage />
        </div>
    )
}

export default HomePage; 