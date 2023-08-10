import {
    Row,
    Container,
   
  } from "react-bootstrap";
 

  
  const AlagappaChettiyarComponent = () => {
    
    return (
      <Container>
      <Row>
        <Row className="justify-content-md-center mt-2">
          <img
          crossorigin="anonymous"
          className="d-block w-50"
          style={{ height: "200px", objectFit: "cover" }}
          src="/images/AlagappaChettiyar.png"
          alt="Karaikudi"
          />
          </Row>
          <Row className="justify-left-md-center mt-5"></Row>
          
          <p>Karaikudi is eternally indebted to one man - Padmabhushan Dr. RM. Alagappa Chettiar. He is called 'Vallal' (philanthropist), more suitably as Vallal Alagappa Chettiar.</p>
          <p>Vallal Alagappa Chettiar, founded the "Alagappa Chettiar Educational Trust" with the aim of developing the backward area of Karaikudi into a centre for higher education.</p> 
          <p>Alagappa Chettiar was a successful businessman who believed in giving  the money he earned 
            from his varied business into social causes. His business interests consisted of rubber plantations 
            in Malaya, tin mines in Burma, textile mills in Kerala, insurance companies in Calcutta, 
            hotels in Bombay, theatres in Madras, a flourishing stock broking company and a private airline.</p>
          <p>The first school started was AL.V. Valliammai Achi School referred to as the Board School in Kottaiyur.</p>
          <p>Other schools that he established include the Alagappa Model School, Alagappa Montessori School & Hostel, Alagappa Elementary School, and Alagappa Preparatory School.</p>
          <h5 className="text-primary">Few of his other foundations and charitable donations included:</h5>
          <ul>
            <li>Alagappa Chettiar College of Technology,(Now known as Alagappa College of Technology Campus- Anna University Chennai)</li>
            <li>Alagappa Chettiar Government College of Engineering & Technology (ACCET) at Karaikudi, Tamil Nadu. (Now an autonomous government institution)</li>
            <li>Alagappa Arts College, Karaikudi, Tamil Nadu</li>
            <li>Alagappa College of Polytechnic, Karaikudi, Tamil Nadu</li>
            <li>Alagappa Physical Education College, Karaikudi, Tamil Nadu</li>
            <li>Alagappa Model Higher Secondary School, Karaikudi, Tamil Nadu</li>
          </ul>
        </Row>
      </Container>
    );
  };
  
  export default AlagappaChettiyarComponent;
  
  