import React from 'react';

import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import { Col, Row } from 'react-bootstrap';

const Footer = () => {

    

    return (

        <Navbar bg="dark" variant="dark" className='mt-5'>
            <Container className='mt-5 justify-content-center'>
                <div> <p className='text-light'>+380-55-555-5555</p>
                    <p className=' text-light'>Київ, вулиця Стуса 55 </p>
          
                    <p className='text-light'>Усі права захищені &copy; </p>
               
                    </div>
            </Container>
        </Navbar>

    );
}

export default Footer;
