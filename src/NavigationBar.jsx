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
    <Navbar expand='lg'>
        <Navbar.Brand href='#home'><img alt='logo' src='/vite.svg' width='30' height='30' className='d-inline-block align-top'/>Johnny's Site
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
        <Container>
        <Nav className="justify-content-end">
            <NavDropdown title='Features' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#invoicing'>Invoicing</NavDropdown.Item>
              <NavDropdown.Item href='#payments'>Payments</NavDropdown.Item>
              <NavDropdown.Item href='#accounting'>Accounting</NavDropdown.Item>
              <NavDropdown.Item href='#payroll'>Payroll</NavDropdown.Item>
              <NavDropdown.Item href='#advisors'>Advisors</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
            <Nav.Link href='#blog'>Blog</Nav.Link>
            <NavDropdown title='Resources' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#aboutus'>About Us</NavDropdown.Item>
              <NavDropdown.Item href='#careers'>Careers</NavDropdown.Item>
              <NavDropdown.Item href='#howitworks'>How Support Works</NavDropdown.Item>
              <NavDropdown.Item href='#affiliates'>Become an Affiliate</NavDropdown.Item>
            </NavDropdown>
            <Button variant='outline-light' size='sm' style={{ borderRadius: '2rem', color:'black', borderColor:'black'}}> Sign in </Button>
            <Button size='sm' style={{ borderRadius: '2rem' }}> Sign up for free </Button>
          </Nav>
        </Container>
        </Navbar.Collapse>
    </Navbar>
  );
}
export default NavigationBar;