

import React from 'react';
import {Layout} from 'antd';
const { Footer } = Layout;


const Footter = () =>{
    return(
        // <>
            <Footer style={{ textAlign: 'center' }}>
                ISPATEC ©{new Date().getFullYear()} Created by <strong>ibrahimacissepdg@gmail.com</strong>
            </Footer>
        // </>
    )
}

export default Footter