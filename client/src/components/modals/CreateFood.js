import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../..";
const CreateFood = ({show,onHide}) => {
    const {food} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () =>{
        setInfo([...info,{title:'',description:'',number:Date.now()}])
    }
    const removeInfo = (number) =>{
        setInfo(info.filter(i => i.number !== number))
    }
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить товар
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown>
                    <Dropdown.Toggle>
                        Выберите категорию
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {food.categorys.map(category => 
                            <Dropdown.Item key={category.id}>
                                {category.name}
                            </Dropdown.Item>
                            )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                className="mt-3"
                placeholder="Введите название товара"
                />
                <Form.Control
                className="mt-3"
                placeholder="Введите стоимость товара"
                type="number"
                />
                <Form.Control
                className="mt-3"
                placeholder="Введите название товара"
                type="file"
                />
                <hr></hr>
                <Button variant={"outline-dark"} onClick={addInfo}>Добавить новое свойство</Button>
                {
                    info.map(i => 
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control 
                                    placeholder="Введите название характеристики"
                                />
                            </Col>
                            <Col md={4}>
                            <Form.Control 
                                    placeholder="Введите описание"
                                
                                />
                            </Col>
                            <Col md={4}>
                                <Button 
                                onClick={() => removeInfo(i.number)}
                                variant={"outline-danger"}>
                                    Удалить 
                                </Button>
                            </Col>
                        </Row>
                        )
                }
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={onHide}>Добавить</Button>
        </Modal.Footer>
      </Modal>
  
    );
}

export default CreateFood;