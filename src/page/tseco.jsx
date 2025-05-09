import Container from "../container/container"



const Tseco = () =>{
    return(
        <>
            <Container>
                <div style={{ marginTop: '20px', padding: '0 20px', textAlign: 'center' }}>
                    <h1>Projet réaliser</h1>
                    {/* <p>
                        Découvrez les filières passionnantes et les parcours enrichissants que nous proposons à l'Ispatec.
                        Faites défiler pour en savoir plus et commencez à construire votre avenir dès aujourd'hui dans un environnement qui vous inspire et vous soutient.
                        Rejoignez-nous pour développer vos compétences, explorer vos passions et construire un avenir prometteur.
                        Avec la filière TSE, le succès est à votre portée !
                    </p> */}
                    <video 
                        alt="Présentation des filiere de TSE" 
                        src="/ispatecprojet/src/assets/tse.mp4" 
                        autoPlay= {true}
                        style={{ width: '100%', borderRadius: '21px'}}     
                    >
                        TSE
                    </video>
                </div>
                
                <div style={{ marginTop: '20px', padding: '0 20px', textAlign: 'center' }}>
                    <h1>Présentation des Filières</h1>
                    <p style={{ fontSize: '18px' }}>
                        La série TSE (Terminale Sciences Exactes) est idéale pour les esprits logiques et passionnés par les sciences.
                        Elle offre une base solide en mathématiques, physique et chimie, ouvrant la voie à des études supérieures
                        dans des domaines tels que l'ingénierie, l'informatique, les sciences appliquées et bien plus encore.
                    </p>
                    <p style={{ fontSize: '18px' }}>
                        À l'Ispatec, nous valorisons votre potentiel et vous accompagnons dans la réalisation de vos ambitions.
                    </p>
                    <h3>Les filières disponibles pour ce qui font TSEXP</h3>
                </div>
                <div  style={{ fontSize: '21px' }}>
                    <h4>
                        <ul>
                            <li>filiere 1</li>
                            <li>filiere 2</li>
                            <li>filiere 3</li>
                            <li>filiere 4</li>
                            <li>filiere 5</li>
                            <li>filiere 6</li>
                            <li>filiere 7</li>
                            <li>filiere 8</li>
                            <li>filiere 9</li>
                            <li>filiere 10</li>
                            <li>filiere 11</li>
                            <li>filiere 12</li>
                            <li>filiere 13</li>
                            <li>filiere 14</li>
                            <li>filiere 15</li>
                            <li>filiere 16</li>
                        </ul>
                    </h4>
                </div>
                <div 
                    style={{ 
                        marginTop: '20px', 
                        textAlign: 'center', 
                        padding: '20px', 
                        borderTop: '1px solid #ccc' 
                    }}
                >
                    <h1>Rejoignez l'Ispatec dès aujourd'hui</h1>
                    <p style={{ fontSize: '18px' }}>
                        <strong>Address: </strong> <a href="https://www.google.com/maps?q=Ispatec+Location" rel="noopener noreferrer" target="_blank"   style={{ textDecoration: 'none', fontWeight: 'bold', color: '#001157'}}>Kalaban Coura 30 mètres</a>
                    </p>
                    <p style={{ fontSize: '18px' }}>
                        <strong>Téléphone: </strong> <a href="tel:+22377761112" style={{ textDecoration: 'none', color: '#001157', fontWeight: 'bold'}}>+(223) 77-76-11-12</a>
                    </p>
                    <p style={{ fontSize: '18px' }}>
                        <strong >Email: </strong> <a href="mailto:contact@ispatec.com" style={{ textDecoration: 'none', color: '#001157', fontWeight: 'bold'}}>contact@ispatec.com</a>
                    </p>
                    <p style={{ fontSize: '12px' }}>
                        Faites le choix de l'excellence et de l'innovation.
                        Pour vous s'inscrire a la liste des boursiés, remplire ce <a href="https://docs.google.com/forms/d/1RwbyhwAL2tW-9fm2zQxOdZ_TCiMznI1E76FqOM3uyH8/viewform?edit_requested=true " rel="noopener noreferrer" target="_blank">formulaire d'inscription.</a>
                    </p>
                </div>
                
            </Container>
        </>
    )
}


export default Tseco