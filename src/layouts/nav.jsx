import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

function BarraNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">InstaYa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Envios" >Envios</Nav.Link>
            <Nav.Link as={Link} to="/" >Login</Nav.Link>            
            <Nav.Link as={Link} to="/Register">Registrate</Nav.Link>
          </Nav>
        </Container>
      </Navbar>  
     

     <section>
        <Outlet></Outlet>
     </section>
    </>
  );
}

export default BarraNav;