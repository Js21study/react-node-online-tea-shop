import React from 'react';
import { useEffect } from 'react';
import {Button, Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";

import {useHistory} from "react-router-dom"
import {TEA_ROUTE} from "../utils/consts";

const TeaItem = ({tea, addToOrder}) => {
    const history = useHistory()

  
   
    return (
        
        <>
        
     <Col md={3} className={"mt-3 mx-2"} >
    <Card style={{width: 150}} border={"light"}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + tea.img}/>
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
            
            
        </div>
        <p  className=' strelka' onClick={() => history.push(TEA_ROUTE + '/' + tea.id)}>Дізнатись більше <span className='strelka-right'>&#8594;</span> </p>
        <div>{tea.name}</div>
        <div className='text-center'>  {tea.price} грн </div>
        <Button onClick={() => addToOrder(tea)} variant='success'> Купити </Button>
    </Card>
</Col> 
   
    </>
    );
};

export default TeaItem;
