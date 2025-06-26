import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
// import { fetchCartItems } from '../../redux/slice/CartSlice';
import { AppDispatch, RootState } from '../../redux/store';
import './index.css';
import { Button } from 'antd';
// import { decrementQuantity, incrementQuantity, updateCartItems } from '../../redux/slice/CartSlice'
import { updateCartItems, incrementQuantity, decrementQuantity, fetchCartItems } from '../../redux/slice/CartSlice.ts'; 

type CartItem = {
    id: number; 
    title: string; 
    price: number; 
    category: string; 
    image: string; 
    quantity: number;
}

const CartPage = () => {
    const dispatch = useDispatch<AppDispatch>(); 
    useEffect(() => {
        dispatch(fetchCartItems()); 
    }, [dispatch]); 

    const values: CartItem[] = useSelector((state: RootState) => state?.cart?.cartItems); 
    
    return (
        <div className="container">
          <div className="cart-page">
            <h1>Shopping Cart</h1>
            <p>Deselect all items</p>

            {
              values && values.length > 0 && values.map((item: CartItem) => (
                <div className="cart-item">
                    <img src={item.image} alt={item.title} className='cart-item-image'/>
                    <div className="cart-item-details">
                        <h3>{item.title}</h3>
                        <p style={{color: '#008000'}}>In stock</p>
                        <p style={{
                            fontFamily: 'Amazon Ember, Arial, sans-serif',
                            fontSize: "12px",
                            color: "#565959"
                        }}>Eligible for FREE shipping</p>
                        <div className="cart-item-quantity">
                            <Button 
                              style={{
                                border: "1px solid #d5d9d9",
                                paddingTop: "10px",
                                borderRadius: "24px", 
                                width: "100px", 
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                                <p onClick={() => {
                                    dispatch(decrementQuantity(item.id))
                                    dispatch(updateCartItems({...item, quantity: item.quantity - 1}))
                                }}>-</p>
                                <p>{item.quantity}</p>
                                <p onClick={() => {
                                    dispatch(incrementQuantity(item.id))
                                    dispatch(updateCartItems({...item, quantity: item.quantity + 1}))
                                }}>+</p>
                            </Button>
                        </div>
                    </div>
                    <div className="cart-item-price">
                        <p>₹{ item.price * item.quantity}</p>
                    </div>
                </div>
              )) 
            }
          </div>
        </div>
    )
}

export default CartPage; 