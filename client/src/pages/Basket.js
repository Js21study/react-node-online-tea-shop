import React, {useContext, useEffect, useState} from 'react';

import {Context} from "../index";

import { Container, Button, Form, Alert} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {SHOP_ROUTE} from "../utils/consts";
import { createBasket, fetchBasket } from '../http/clientAPI';






const Basket = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    
    const {tea} = useContext(Context)

    // const summaCount = () => {

    // let summa = 0
    //     tea.orders.forEach(el => summa += Number.parseFloat(el.price))
    //     return summa
    // }

//     useEffect(() => {
//         tea.orders.map(or => setOrders(...order, or)
//    },[tea.orders])

// , number: Date.now()



    
// useEffect(() => {
//     console.log(tea.orders);
//     tea.orders.map((t) =>

//     setOrder([...order, {name: t.name, price: t.price, teaId: t.id}])
    
//     )
// }, [tea.orders]) 







    const finish = async () => {
        try {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('order', JSON.stringify(tea.orders))
    createBasket(formData)
            history.push(SHOP_ROUTE)
            alert('Ваше замовлення прийнято! Чекайте на дзвінок!')
            
        } catch (e) {
            alert(e.response.data.message)
        }
    }



   
      

   

   


    return (
        <div>
            <div>
                <Container>
                {tea.orders.length > 0 ?
                <div className='m-5 border border-1 p-5'>
                    
                    
                    {/* <p className='summa-basket'>  Сумма замовлення: {new Intl.NumberFormat().format(summaCount())} грн  </p> */}
                    <Button variant={"outline-danger"} onClick={() => history.push(SHOP_ROUTE)}>Змінити або додати щось до замовлення</Button>

                    <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть Ваше ім'я"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть Ваше email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть Ваш телефон"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        type="number"
                    />
                    
                        <Button
                        className='m-1'
                            variant={"outline-success"}
                            onClick={() =>{
                         
                                finish()
                            }
                        }
                        >
                            Підтвердити
                        </Button>
                    

                </Form>
                    </div>  
                    : <p>Корзина пуста</p> }
                
                
                
                
                </Container>       
    
            </div>
        </div>
    );
};

export default Basket;
