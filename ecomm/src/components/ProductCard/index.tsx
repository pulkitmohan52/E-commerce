import React, { useEffect } from 'react'; 
import { CSSProperties } from 'react';
import { Button, Rate } from 'antd';
import './ProductCard.css';
import AddToCartButton from '../../common/AddToCartButton';

const productCardStyles: { 
    container: CSSProperties, 
    imageStyle: CSSProperties, 
    buttonStyle: CSSProperties,
    ratingContainer: CSSProperties
} = {
    container: {
        display: 'flex', 
        flexDirection: 'column' as const, 
        alignItems: 'center', 
        justifyContent: 'center', 
        border: '1px solid #000', 
        padding: '10px',  
    }, 
    imageStyle: {
        height: '300px', 
        width: '300px', 
        marginBottom: '10px', 
    }, 
    buttonStyle: {
        marginTop: '10px', 
        width: '80%', 
        backgroundColor: '#f0c14b',
        color: '#111'
    },
    ratingContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '10px'
    }
}

type Product = {
    id: number, 
    title: string, 
    price: number, 
    description: string,    
    image: string,
    rating?: {
        rate: number,
        count: number
    }
}

const ProductCard = ({
    product, 
}: {
    product: Product
}) => {
    return (
      <div style={productCardStyles.container}>
        <img src={product.image} alt={product.title} style={productCardStyles.imageStyle}/>
        <h3>{product.title}</h3>
        <div style={productCardStyles.ratingContainer}>
          <Rate disabled defaultValue={product.rating?.rate || 0} allowHalf />
          <span>({product.rating?.count || 0})</span>
        </div>
        <p>${product.price}</p>
        <AddToCartButton />
      </div>
    )
}   

export default ProductCard; 