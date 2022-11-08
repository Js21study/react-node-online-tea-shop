import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateSort from "../components/modals/CreateSort";
import CreateTea from "../components/modals/CreateTea";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [sortVisible, setSortVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [teaVisible, setTeaVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"warning"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Додати тип
            </Button>
            <Button
                variant={"success"}
                className="mt-4 p-2"
                onClick={() => setSortVisible(true)}
            >
                Додати сорт
            </Button>
            <Button
                variant={"dark"}
                className="mt-4 p-2"
                onClick={() => setTeaVisible(true)}
            >
                Додати чай
            </Button>
            <CreateSort show={sortVisible} onHide={() => setSortVisible(false)}/>
            <CreateTea show={teaVisible} onHide={() => setTeaVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
