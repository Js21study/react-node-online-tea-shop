import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const {tea} = useContext(Context)

   
    

    return (
        <ListGroup>
            {tea.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    variant={type.id === tea.selectedType.id ? 'warning': 'light'}
                    onClick={() => {
                        tea.setSelectedType(type)
                        tea.setSelectedSort([])
                    }}
            
                    
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
