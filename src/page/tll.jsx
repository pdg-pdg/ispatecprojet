import Container from "../container/container"
import React from 'react';
import { Carousel } from 'antd';
import image1 from '../assets/is1.jpg';
import image2 from '../assets/is2.jpg';
import image3 from '../assets/is3.jpg';
import image4 from '../assets/is4.jpg';

const Tll = () =>{
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        // width: '120px',
      };

    return(
        <Container>
            
            <div style={{ marginTop: '20px', padding: '0 20px', textAlign: 'center' }}>
                <h1>Explorez les opportunités qui s'offrent à vous !</h1>
                <p>
                    Découvrez les filières passionnantes et les parcours enrichissants que nous proposons à l'Ispatec.
                    Faites défiler pour en savoir plus et commencez à construire votre avenir dès aujourd'hui dans un environnement qui vous inspire et vous soutient.
                </p>
            </div>
            <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000} style={{ borderRadius: '21px' , margin: '4px'}}>
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
            <div style={{ marginTop: '20px', padding: '0 20px', textAlign: 'center' }}>
                <h2>Présentation des Filières</h2>
                <p>
                    La filière TLL (Lettres et Langues) vous ouvre les portes vers des parcours passionnants
                    dans les domaines de la littérature, des langues étrangères, de la communication et bien plus encore.
                    Découvrez comment vos compétences peuvent être mises en valeur dans des carrières enrichissantes
                    et diversifiées.
                </p>
                <p>
                    À l'Ispatec, nous vous accompagnons dans votre réussite en vous proposant des programmes adaptés
                    à vos aspirations et aux exigences du marché du travail. Rejoignez-nous pour transformer vos rêves
                    en réalité !
                </p>
                <h2>Explorez de nouvelles opportunités avec l'Ispatec !</h2>
                <p>Bien que nous ne proposions pas actuellement de filière dédiée aux Lettres et Langues (TLL), l'Ispatec reste votre partenaire idéal pour construire un avenir prometteur. Nos programmes sont conçus pour répondre aux besoins du marché et pour vous offrir des parcours innovants et enrichissants.</p>
                <p>Nous vous encourageons à explorer nos autres filières qui pourraient correspondre à vos aspirations et à vos intérêts. Que vous soyez passionné par les sciences, la technologie, le commerce ou d'autres domaines, nous avons des options qui vous permettront de développer vos compétences et de réussir dans votre carrière.</p>
                <h1>Rejoignez-nous et découvrez des filières qui vous ouvriront les portes d'un avenir brillant !</h1>
            </div>
        </Container>
    )
}

export default Tll


