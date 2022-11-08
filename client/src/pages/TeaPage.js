import React, {useEffect, useState} from 'react';
import { useContext } from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

import {useParams} from 'react-router-dom'
import { Context } from '..';
import {fetchOneTea} from "../http/teaAPI";

const TeaPage = () => {
    const [teapage, setTeapage] = useState({info: []})
    const {tea} = useContext(Context)
    
    
    const {id} = useParams()
    useEffect(() => {
        fetchOneTea(id).then(data => setTeapage(data))
    }, [])

    


      const addToOrder = (item) => {
        let isInArray = false
        tea.orders.map(el => {
          if(el.id === item.id)
            isInArray = true
        })
        if(!isInArray){
        tea.setOrders([...tea.orders, item])
        } else {
            alert("Товар вже в корзині")
        }
      }
    return (
       
        <Container className="mt-3" >
            <Row className='d-flex'>
                <Col md={8}>
                    <Image width={300} src={process.env.REACT_APP_API_URL + teapage.img}/>
                </Col>
               
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '1px solid lightgray'}}
                    >
                        <h3> {teapage.price} грн</h3>
                         <Button onClick={() => addToOrder(teapage)} variant='success'> Купити </Button> 
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {teapage.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? '#FAF0E6' : 'transparent', padding: 10}}>
                       <span className='text-info'>{info.title} : </span> <p> { info.description}</p>
                    </Row>
                )}
            </Row>
        </Container>
      
    );
};

export default TeaPage;
