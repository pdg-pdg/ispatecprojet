import React from 'react';
import { Image, Layout, Menu} from 'antd';
import { data, Link } from 'react-router-dom';
import ispatecLogo from '../assets/ispateclogo.png';
const { Header} = Layout;


const items = [
    {
        key: 1,
        label: <a href="/" style={{ textDecoration: 'none' }}>Accueil</a>,
    },
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
                    backgroundColor: 'white',
                    height: '120px',
                }}
            >
                <Link to="/">
                    <Image 
                        src={ispatecLogo} 
                        preview={false} 
                        style={{ 
                            width: '120px', 
                            height: '120px',
                        }} 
                    />
                </Link>
            </Header>
        // </>
    )
}

export default Navbar