import React from 'react';
import {Layout} from 'antd';
const { Footer } = Layout;


const Footter = () =>{
    return(
        // <>
            <Footer 
                style={{ 
                    textAlign: 'center', 
                    backgroundColor: 'whitesmoke', 
                    fontSize: '20px', 
                    padding: '10px 0', 
                    position: 'fixed', 
                    bottom: 0, left: 0, right: 0 
                }}
            >
                ISPATEC ©{new Date().getFullYear()} Created by <strong><a href="ibrahimacissepdg@gmail.com" style={{ textDecoration: 'none', color: '#001157', fontWeight: 'bold'}}>ibrahimacissepdg@gmail.com</a></strong>
                
            </Footer>
        // </>
    )
}
                    
export default Footter