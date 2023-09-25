import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavigationBar = () => {
  return (
    <Navbar expand='lg' className="bg-body-tertiary" sticky="top">
        <Navbar.Brand href='/'><img alt='logo' src='/vite.svg' width='30' height='30' className='d-inline-block align-top'/>BRAND NAME</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
        <Container>
        <Nav className="justify-content-end">
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
            <Button variant='outline-light' size='sm' style={{ borderRadius: '2rem', color:'black', borderColor:'black'}} href='/signin'> Sign in </Button>
            <Button size='sm' style={{ borderRadius: '2rem' }} href='signup'> Sign up! </Button>
          </Nav>
        </Container>
        </Navbar.Collapse>
    </Navbar>
  );
}
export default NavigationBar;