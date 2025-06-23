import React from 'react'; 
import { Button, Input, Layout, Space, Typography } from 'antd';
import { SearchOutlined, EnvironmentOutlined, ShoppingCartOutlined, CodeSandboxOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Logo from '../../common/Logo';
const { Header: AntHeader } = Layout;
const { Text } = Typography;

const headerStyles = {
  topBar: {
    backgroundColor: '#1d2937',
    padding: '8px 24px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    color: '#fff'
  },
  mainHeader: {
    backgroundColor: '#121827',
    padding: '12px 24px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    height: '50px',
    width: '120px',
    objectFit: 'contain', 
  },
  searchContainer: {
    flex: 1,
    margin: '0 24px',
    maxWidth: '600px'
  },
  searchInput: {
    '.ant-input': {
      // height: '40px',
      borderRadius: '4px'
    }
  },
  loginButton: {
    width: '100px',
    backgroundColor: '#f0c14b',
    border: 'none',
    borderRadius: '4px',
    color: '#111',
    '&:hover': {
      backgroundColor: '#ddb347',
      color: '#111'
    }
  },
  loginLink: {
    color: '#111',
    textDecoration: 'none',
    display: 'block',
    width: '100%',
    height: '100%'
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    color: '#fff',
    listStyle: 'none',
    margin: '0 10px',
    cursor: 'pointer'
  },
  cartIcon: {
    fontSize: '40px',
    color: '#fff',
    marginLeft: '10px'
  }
};

const handleSearch = (e) => {
    console.log(e.target.value);
}

const Header = () => {
    return (
        <Layout.Header style={{ padding: 0, height: 'auto' }}>
          <div style={headerStyles.topBar}>
            <Space>
              <EnvironmentOutlined />
              <Text style={{ color: '#fff' }}>Deliver to New York 10001</Text>
            </Space>
          </div>
          <div style={headerStyles.mainHeader}>
            <Logo />
            <div style={headerStyles.searchContainer}>
              <Input 
                size="large"
                placeholder="Search Amazon" 
                prefix={<SearchOutlined />}
                style={headerStyles.searchInput}
                onChange={(e) => handleSearch(e)}
              />
            </div>
            <div style={{display: 'flex', alignItems: 'center', width: '300px', gap: '30px'}}>
              <Link to="/login" style={headerStyles.loginLink}>
                <Button 
                  type="primary"
                  size="large"
                  style={headerStyles.loginButton}
                >
                  Login
                </Button>
              </Link>
              <ShoppingCartOutlined style={headerStyles.cartIcon} />
              <CodeSandboxOutlined style={headerStyles.cartIcon} />
            </div>
          </div>
          <div style={{backgroundColor: '#1d2937'}}>
            <ul style={headerStyles.navContainer}>
              <li style={headerStyles.navItem}>Today's Deals</li>
              <li style={headerStyles.navItem}>Customer Service</li>
              <li style={headerStyles.navItem}>Registry</li>
              <li style={headerStyles.navItem}>Gift Cards</li>
              <li style={headerStyles.navItem}>Sell</li>
            </ul>
          </div>
        </Layout.Header>
    );
};

export default Header; 