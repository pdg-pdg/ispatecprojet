
import Navbar from "../component/navbar"
import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import Footter from "../component/footer";
const {Content} = Layout;



const Container = ({children}) =>{
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return(
        // <>
            <Layout 
                style={{ 
                    minHeight: '100vh', 
                    // backgroundColor: '#f0f2f5' ,
                    borderRadius: '21px',
                }}
            >

                <Navbar />
                <Content 
                    style={{ 
                        padding: '0 4px',
                        marginBottom: '56px',
                        marginTop: '0px',
                        // display: 'flex',
                        // justifyContent: 'center',
                        // alignItems: 'center' ,
                        // flexDirection: 'column'
                    }}>
                    <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        // padding: 24,
                        borderRadius: borderRadiusLG,
                        // marginTop: 4,
                        // display: 'flex',
                        // justifyContent: 'center',
                        // alignItems: 'center' ,
                        // flexDirection: 'column'
                    }}
                    >
                        {children}
                    </div>
                </Content>
                <Footter />
            </Layout>
        // {/* </> */}
    )
}

export default Container