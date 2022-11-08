import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import {Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import SortBar from "../components/SortBar";
import TeaList from "../components/TeaList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchSorts, fetchTeas, fetchTypes} from "../http/teaAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {tea} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => tea.setTypes(data))
        fetchSorts().then(data => tea.setSorts(data))
        fetchTeas(null, null, 1, 2).then(data => {
            tea.setTeas(data.rows)
            tea.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchTeas(tea.selectedType.id, tea.selectedSort.id, tea.page, 2).then(data => {
            tea.setTeas(data.rows)
            tea.setTotalCount(data.count)
        })
    }, [tea.page, tea.selectedType, tea.selectedSort,])

    return (
        <Container className='d-flex'>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={6}>
                    <SortBar/>
                    <TeaList/>
                    <Pages/>
                </Col>
                <Col md={3}>
                    <img style={{width: 250}} src='https://n1s1.hsmedia.ru/5b/a8/e8/5ba8e8249ded64dc6d5a477954457ef1/1200x900_0xac120003_7416788391639943180.jpeg' alt='image'/>
                   <p>Чай у Китаї відносять до семи речей, вживаних щодня. Серед них – дрова, рис, сіль, масло, оцет і соєвий соус. Чай тут не просто напій. Він відіграє важливу роль у традиційній китайській медицині, кухні та буддизмі. Існує така приказка: «Чай і чань (буддійська філософія) одного смаку».
А ще чай дуже корисний. Може, саме тому китайці – одна з найздоровіших націй на планеті.</p>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
