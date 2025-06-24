import React from 'react'; 
import { Button } from 'antd';

const buttonStyle = {
    marginTop: '10px', 
    width: '80%', 
    backgroundColor: '#f0c14b',
    color: '#111'
}

const AddToCartButton = () => {
    return (
        <Button 
          type='primary' 
          className="custom-button"
          style={buttonStyle}
        >
          Add to Cart
        </Button>
    )
}

export default AddToCartButton; 