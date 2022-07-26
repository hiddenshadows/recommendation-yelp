import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// important to add this v
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Header() {
    return (
      <div className='Header'>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/features">Features</Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
}