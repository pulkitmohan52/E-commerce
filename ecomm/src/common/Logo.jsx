import React from 'react';

import logo from '../assets/images/Logo.png'

const logoStyles = {
    height: '70px',
    width: '120px',
    objectFit: 'contain', 
}

const Logo = (
    {
        height = logoStyles.height, 
        width = logoStyles.width, 
        objectFit = logoStyles.objectFit,
    }
) => {
    return (
        <img src={logo} alt="logo" style={{
            height, 
            width, 
        }} />
    )
}

export default Logo; 