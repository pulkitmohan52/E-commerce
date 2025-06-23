import React from 'react';
import Logo from '../../common/Logo';
import { Form, Input, Button, Typography } from 'antd';

const loginStyles = {
    container: {
        display: 'flex',  
        flexDirection: 'column',
        alignItems: 'center', 
        // backgroundColor: '#f5f5f5', 
    }, 
    form: {
        width: '400px', 
        border: '1px solid #d5d9d9',
        borderRadius: '8px',
        padding: '20px', 
    },
    formLabel: {
        fontWeight: 'bold',
        marginBottom: '2px'
    }, 
    button: {
        width: '100%', 
        backgroundColor: 'rgb(240, 193, 75)',
        color: '#000', 
        marginBottom: '10px'
    }, 
    divider: {
        display: 'flex', 
        height: '1px', 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: '10px auto', 
        backgroundColor: '#d5d9d9', 
    }
}
const Login = () => {
    return (
        <>
          <div style={loginStyles.container}>
            <Logo />
            <Form style={loginStyles.form} className="login-form" layout="vertical">
              <h2>Sign in or create account</h2>
              <Form.Item 
                name="email" 
                label="Enter mobile number or email"
                colon={false}
                labelCol={{ 
                  style: loginStyles.formLabel 
                }}
              >
                <Input />
              </Form.Item>
              <Button type="primary" htmlType="submit" style={loginStyles.button}>Sign in</Button>
              <p>By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>

              <div style={loginStyles.divider} />
              <div>
                <h2>Buying for work?</h2>
                <a href="#">Create a free business account</a>
              </div>
            </Form>
          </div>
        </>
    )
}

export default Login; 