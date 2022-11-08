import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import TeaItem from "./TeaItem";


const TeaList = observer(({}) => {
    const {tea} = useContext(Context)
    

    let teaLength = tea.teas

    

    if (!teaLength.length) {
      return (
          <h1 style={{textAlign: 'center'}}>
              Нема в наявності!
          </h1>
      )
  }

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
    
// const addToOrder = (item) => {
//     let isInArray = false
//     tea.orders.map(el => {
//       if(el.id === item.id)
//         isInArray = true
//     })

// if(!isInArray) {
//     tea.setOrders([...tea.orders, item])
//     tea.setNum(tea.num+1)	
// } else {
// tea.setNum(tea.num+1)	
// }
//   }


    return (
        <Row className="d-flex">
            {tea.teas.map(tea => 
                <TeaItem addToOrder={addToOrder} key={tea.id} tea={tea}/>   
             )
            }
         
            
        </Row>
    );
});

export default TeaList;
