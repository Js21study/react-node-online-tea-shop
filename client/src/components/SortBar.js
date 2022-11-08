import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const SortBar = observer(() => {
    const {tea} = useContext(Context)

  
    return (
        <Row className="d-flex">
            {tea.sorts.map(sort =>
                <Card
                    style={{cursor:'pointer'}}
                    key={sort.id}
                    className="p-3"
                    onClick={() => tea.setSelectedSort(sort)}
                    border={sort.id === tea.selectedSort.id ? 'warning' : 'light'}
                >
                    {sort.name}
                </Card>
            )}
        </Row>
    );
});

export default SortBar;
