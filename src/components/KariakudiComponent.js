import {
    Row,
    Container,
   
  } from "react-bootstrap";
 

  
  const KaraikudiComponent = () => {
    
    return (
      <Container>
      <Row>
        <Row className="justify-content-md-center mt-2">
          <img
          crossorigin="anonymous"
          className="d-block w-50"
          style={{ height: "200px", objectFit: "cover" }}
          src="/images/karaikudi.png"
          alt="Karaikudi"
          />
          </Row>
          <Row className="justify-left-md-center mt-5"></Row>
          
          <p>Karaikudi is a Greater municipolity in Sivaganga district in Tamilnadu.
            It is the part of the area referred to Chettinad.</p>
          <p>One of its defining characteristics is the presence of colorful and vibrant limestone homes.</p> 
          <p>Karaikudi is extremely famous for its spicy dishes.</p>
          <p>The special snacks available in karaikudi for the visitors to buy are Athirasams,Murukkus, Thenkuzhal ,Manakolam,Thattai,Seepu Seedai.</p>
          <p>Karaikudi has a population of 1.5 lakhs (estimated as of year 2010).</p>
          <p>It has an average literacy rate higher than the National average.</p>
          <p>Karaikudi is considered as the best place to live among other towns in the district, 
            owing to its sound educational infrastructure, good ground water, better heath care facilities, 
            and lucrative business possibilities.</p>
          <p>After, Karaikudi was constituted as a Municipality in 1928, 
            it was upgraded to Grade-2 Municipality in 1973, 
            and to Selection Grade Municipality in 1988, later to Special Grade Municipality in 2013.</p>  
          <h5 className="text-primary">Karaikudi is famouses for & Best places to visit:</h5>  
          <ul>
            <li>Then Tirupati - Ariyakudi</li>
            <li>KOPPUDAIYA NAYAKI AMMAN TEMPLE</li>
            <li>KUNNAKUDI / KUNDRAKUDI SHANMUGHANATHAR MURUGAN TEMPLE</li>
            <li>PILLAIYARPATTI PILLAIYAR TEMPLE / KARPAKA VINAYAKAR TEMPLE</li>
            <li>SRI SOLAI ANDAVAR TEMPLE</li>
            <li>CHETTINAD KANADUKATHAN PALACE AND ATTANGUDI / ATHANGUDI PALACE</li>
            <li>Athangudi tiles</li>
            <li>Thirumayam Fort</li>
           </ul>
            
        </Row>
      </Container>
    );
  };
  
  export default KaraikudiComponent;
  
  