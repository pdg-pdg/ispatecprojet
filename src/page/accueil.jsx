import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, message, Select, QRCode } from 'antd';
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
import Container from '../container/container';
import { Card } from 'antd';
import { Carousel } from 'antd';
import image1 from '../assets/is1.jpg';
import image2 from '../assets/is2.jpg';
import image3 from '../assets/is3.jpg';
import image4 from '../assets/is4.jpg';
import Qrcode from '../component/qrcode';

const onSearch = value => {
    console.log('search:', value);
};

const Acceuil = () => {
  const navigate = useNavigate();

  const onFinish = values => {
    switch (values.serie) {
      case 'tse':
        navigate('/tse');
        break;
      case 'tsexp':
        navigate('/tsexp');
        break;
      case 'texco':
        navigate('/tseco');
        break;
      case 'tll':
        navigate('/tll');
        break;
      case 'tss':
        navigate('/tss');
        break;
      default:
        alert('Votre choix est indispensable pour le moment!!!');
    }
  };



  return (
    <>
      <Container>
        <div 
            style={{
                
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'center',
                // height: '100vh',
            
        }}>
           
            <div style={{ marginTop: '20px', padding: '0 20px', textAlign: 'center' }}>
                <h1>Bienvenue sur ISPAorienTEC !</h1>
                <p>
                    Découvrez les opportunités qui s'offrent à vous après votre BAC. Sélectionnez votre série pour explorer les filières adaptées à votre parcours et commencez à construire votre avenir avec nous.
                    Faites le premier pas vers votre réussite dès maintenant !
                </p>
            </div>
            <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000} style={{ borderRadius: '21px' , margin: '4px'}}>
                <div>
                    <img src={image1} alt="Slide 1" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '21px' }} />
                </div>
                <div>
                    <img src={image2} alt="Slide 2" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '21px' }} />
                </div>
                <div>
                    <img src={image3} alt="Slide 3" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '21px' }} />
                </div>
                <div>
                    <img src={image4} alt="Slide 4" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '21px' }} />
                </div>
            </Carousel>
            {/* <div style={{ marginTop: '20px', padding: '0 20px', textAlign: 'center' }}>
                <h1>Pourquoi choisir l'Ispatec ?</h1>
                <h3>L'université de l'innovation et de l'excellence !</h3>
                <p>
                L'Ispatec est une institution dédiée à la formation de leaders compétents et visionnaires. Avec des programmes adaptés aux besoins du marché et un environnement propice à l'apprentissage, nous vous accompagnons dans la construction d'un avenir prometteur.
                </p>
                <p>
                    À l'Ispatec, nous croyons en votre potentiel et nous nous engageons à vous offrir une éducation de qualité qui vous prépare à un avenir brillant. Nos filières sont conçues pour répondre aux besoins du marché et pour vous aider à exceller dans votre domaine de prédilection.
                </p>
            </div> */}

            {/* <div style={{ marginTop: '20px', padding: '0 20px', textAlign: 'center' }}>
                <h2>Découvrez IspaOrientec, votre guide vers l'orientation réussie !</h2>
                <p>
                Ce site web a été conçu pour vous aider à explorer les filières disponibles à l'Ispatec en fonction de votre série au BAC. Grâce à IspaOrientec, vous pouvez facilement découvrir les opportunités qui s'offrent à vous et faire des choix éclairés pour votre avenir académique et professionnel.
                </p>
                <h3>Rejoignez-nous et transformez vos ambitions en réalité !</h3>
            </div> */}
            
            <Card 
                title="Selectionner votre serie" 
                variant="borderless" 
                style={{ 
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column' ,
                    justifyContent: 'center',
                    alignItems: 'center'
                    // height: '100%'
                }}
            >
        
                <Form
                name="login"
                initialValues={{ remember: true }}
                style={{ }}
                onFinish={onFinish}
                >
                <Form.Item
                    name="serie"
                    rules={[{ required: true, message: 'Vous devez selectionner une serie' }]}
                >
                    <Select
                        placeholder="Selectionner ton serie"
                        onSearch={onSearch}
                        optionFilterProp="label"
                        variant="underlined"
                        style={{ width: '200px'}}
                        // showSearch
                    >
                    <Select.Option value="tse">TSE</Select.Option>
                    <Select.Option value="tsexp">TSEXP</Select.Option>
                    <Select.Option value="texco">TSECO</Select.Option>
                    <Select.Option value="tll">TLL</Select.Option>
                    <Select.Option value="tss">TSS</Select.Option>
                    {/* <Select.Option value="tal">TAL</Select.Option> */}
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Envoyer
                    </Button>
                </Form.Item>
                </Form>

            </Card>

            

            <Qrcode />
        </div>
      </Container>
    </>
  );
};

export default Acceuil;


<Card title="Card title" variant="borderless" style={{ width: 300 }}>
    
</Card>

