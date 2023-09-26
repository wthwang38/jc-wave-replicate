import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavigationBar = () => {
  return (
    <Navbar expand='lg' className="p-4 bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href='/'><img alt='logo' src='/vite.svg' width='150rem' height='50rem' className='d-inline-block align-top'/></Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown title='Features' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/rarity'>Rarity</NavDropdown.Item>
              <NavDropdown.Item href='/accounting'>Accounting</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/pricing'>Pricing</Nav.Link>
            <Nav.Link href='/blog'>Blog</Nav.Link>
            <NavDropdown title='Resources' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/about'>About Us</NavDropdown.Item>
              <NavDropdown.Item href='/helpcenter'>Help Center</NavDropdown.Item>
              <NavDropdown.Item href='/sitemap'>Site Map</NavDropdown.Item>
            </NavDropdown>
            <Container>
            <Row>
              <Col>
                  <Button variant='outline-secondary' size='md' href='/signin'> Sign in </Button>
              </Col>
              <Col xs={6}>
                  <Button className=''size='md' href='signup' > Sign up! </Button>
              </Col>
            </Row>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;