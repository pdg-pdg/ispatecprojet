import React from 'react';
import { Image, Layout, Menu} from 'antd';
import { data, Link } from 'react-router-dom';
import ispatecLogo from '../assets/ispatec.png';
const { Header} = Layout;

// Removed duplicate declaration of the 'data' variable

const items = [
    {
        key: 1,
        label: <a href="/" style={{ textDecoration: 'none' }}>Accueil</a>,
    },
    // {
    //     key: 2,
    //     label: <a href="/" style={{ textDecoration: 'none' }}>Accueil</a>,
    // },
];

const Navbar = () =>{
    
    return(
        // <>
            <Header 
                style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '21px', 
                    backgroundColor: 'blue',
                }}
            >
                {/* <div className="demo-logo" /> */}
                <Link to="/">
                    <Image 
                        src={ispatecLogo} 
                        preview={false} 
                        style={{ 
                            width: '70px', 
                            height: '70px',
                            // marginLeft: '20px' 
                        }} 
                    />
                </Link>
                {/* <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ 
                        // flex: 1, 
                        minWidth: 0 ,
                        borderRadius: '21px',
                        fontSize: '35px', 
                        backgroundColor: 'blue',
                    }}
                /> */}
            </Header>
        // </>
    )
}

export default Navbar