import React from 'react'; 
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import AddToCartButton from '../../common/AddToCartButton';

type Product = {
    id: number, 
    price: number, 
    title: string, 
    description: string, 
    image: string, 
    rating: {
        rate: number, 
        count: number
    }
}
const ProductDetailsPage = () => {
    const { id } = useParams(); 
    const products: Product[] = useSelector((state: RootState) => state.products.items); 
    const product = products.find((product: Product) => product.id === Number(id)); 

    if (!product) {
        return <div>Product not found</div>; 
    }

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div>
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
                    />
                </div>
                <div>
                    <h1>{product.title}</h1>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>${product.price}</p>
                    <p>{product.description}</p>
                    <div style={{ marginTop: '20px' }}>
                        <p>Rating: {product.rating.rate}/5</p>
                        <p>({product.rating.count} reviews)</p>
                        <AddToCartButton /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsPage; 