import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createSort, createType} from "../../http/teaAPI";

const CreateSort = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addSort = () => {
        createSort({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати сорт
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введіть назву сорту"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>X</Button>
                <Button variant="success" onClick={addSort}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateSort;
