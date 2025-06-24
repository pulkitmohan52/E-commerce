import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/slice/ProductSlice'
import { AppDispatch, RootState } from '../../redux/store';
import ProductCard from '../ProductCard'
import { Link } from 'react-router-dom';

const productDetailsPageStyles = {
    container: {
        margin: '0px auto', 
        marginTop: '20px',
    }, 
    innerContainer: {
        backgroundColor: '#f5f5f5',
        width: '90vw', 
        margin: '0px auto', 
        padding: '20px', 
    }, 
    productContainer: {
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '20px', 
    }
}

type Product = {
    id: number, 
    title: string,
    price: number,
    description: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

const ProductDetailsPage = () => {
    const dispatch = useDispatch<AppDispatch>(); 
    const products: Product[] = useSelector((state: RootState) => state.products.items); 

    useEffect(() => {
      dispatch(fetchProducts()); 
    }, [dispatch]); 

    useEffect(() => {
      console.log(products); 
    }, [products]); 

    return (
        <div style={productDetailsPageStyles.container}>
            <div style={productDetailsPageStyles.innerContainer}>
              <h1>Deals of the day</h1>
              <div style={productDetailsPageStyles.productContainer}>
                {products && products/*.slice(0, 4)*/.map((product: Product) => (
                    <>
                      <Link to={`/products/${product.id}`}>
                        <ProductCard product={product} />
                      </Link>
                    </>
                ))}
              </div>    
            </div>
        </div>
    )
}

export default ProductDetailsPage;