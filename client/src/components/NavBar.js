import React, {useContext} from 'react';

import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE, TEA_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa'
import NavBarComp from './NavBarComp';



const NavBar = observer(() => {
    
    const {user} = useContext(Context)
    const {tea} = useContext(Context)
    const history = useHistory()
    
    
    let [cartOpen, setCartOpen] = useState(false)
    let [query, setQuery] = useState("")
    let [sum, setSum] = useState(0)
   

    const filtredTea = tea.teas.filter( tea => {
        return tea.name.toLowerCase().includes(query.toLowerCase())
    })

    


    

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    
    

    const showOrders = () => {
        


        const deleteOrders = (id) => {
       
                tea.setOrders(tea.orders.filter(el => el.id !== id))  
           
        
            
          }

    

        let summa = 0
        tea.orders.forEach(el => summa += Number.parseFloat(el.price))
        return (
            <div>
                {tea.orders.map(el => (
                    <div className='item' key={el.id}>
                    <img src={process.env.REACT_APP_API_URL + el.img} alt='item'/>
                   <h2>{el.title}</h2>
                   <b>{el.price} грн</b>
                   
                    
                   <FaTrash className='delete-icon' onClick={() => deleteOrders(el.id)}/>
                 </div>
                ))}
                
                <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)} грн  <span className='closeBusket' style={{marginLeft: 200}} onClick={() => setCartOpen(cartOpen = !cartOpen)} >X</span></p>
                <Button  className='m-1' variant='success' onClick={() => {
                    
                    history.push(BASKET_ROUTE)
                    setCartOpen(cartOpen = !cartOpen)
                }}>Підтвердити замовлення</Button>
                
                        
    
            </div>
        )
    }
    
    const showNothing = () => {
        return (<div className='empty'>
            <span>У корзині ще нічого немає</span>
            <span className='closeBusket' onClick={() => setCartOpen(cartOpen = !cartOpen)} >X</span>

        </div>)
    }

    return (
        <>
        <Navbar className='header' bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Чайна Файна</NavLink>

                <Form className="d-flex mx-2">
            <Form.Control
              type="search"
              placeholder="Знайти..."
              className="mx-2"
              aria-label="Search"
              onChange={(e) => setQuery(e.target.value)}
            

            />
            <Button variant="outline-warning">Пошук</Button>
          </Form>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Адмін панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Вихід
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Button>
                    </Nav>
                    
                }
                 <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            
                {cartOpen && (
            <div className='shop-cart'>
                {tea.orders.length > 0 ?
                    showOrders() : showNothing()}
            </div>
        )}


                
            </Container>
            
        </Navbar>
        <div>
            <Container className='bg-light d-flex border border-1'>
                    {query !== ""
                    ? filtredTea.map( tea => 
                       <div>{tea.name}
                       <img style={{width: 100}} src={process.env.REACT_APP_API_URL + tea.img} alt="image" />
                       <p style={{cursor: "pointer"}} className='text-danger' onClick={() => { 
                        history.push(TEA_ROUTE + '/' + tea.id)
                        setQuery('')}}>Дізнатись більше ... </p>
                       </div> )
                    : ""
                    }
                </Container>
            </div>
        </>

    );
});

export default NavBar;
