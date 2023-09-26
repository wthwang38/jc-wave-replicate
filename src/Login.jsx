import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Login = ()=>{

    return(
        <Form>
            <Form.Group className='mb-3 col-8' controlId='formBasicEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter your email' />
            </Form.Group>
            <Form.Group className='mb-3 col-8' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Create a password'/>
            </Form.Group>
            <div className='d-grid gap-2 col-8'>
            <Button size='lg' type='submit' style={{textAlign:'center', color: '#001b66', backgroundColor:'#e9abff', borderColor: '#e9abff', fontFamily: 'Dinerodisplay, sans-serif', fontSize: '1rem', fontWeight:'600', borderRadius:'2rem'}}>Create Your Free Account</Button>
            <div className="mx-auto p-2">or</div>
            <Button variant='primary' size='lg' type='submit' style={{fontFamily: 'Dinerodisplay, sans-serif', fontSize: '1rem', fontWeight: '600', borderRadius: '2rem' }}> Sign up With Google</Button>
            </div>
        </Form>
    )
}

export default Login;