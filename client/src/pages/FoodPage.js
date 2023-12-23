import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const FoodPage = () => {
  const food = { "id": 1, "name": 'Кока-кола', "price": 91, "img": 'https://cm.samokat.ru/processed/l/public/fa51dab157892492_4600494685507.jpg' }
  const description = [
    {"id":1,"title":"Срок хранения", "description":"2 месяца"},
    {"id":2,"title":"Условия хранения", "description":"При температуре от 0 до +6С"},
    {"id":3,"title":"Производитель", "description":"Останкино"},

  ]
  return (
    <Container className='mt-3 '>
        <Col md={4} className='m-auto'>
          <Image width={300} height={300} src={food.img} />
          <Row>
            <h2 className='m-auto'>{food.name}</h2>
            <h2 >{food.price + " руб"}</h2>
          </Row>
          <Col md={4}>
        </Col>
          <Card>
            </Card>
            <div className='d-flex flex-column mt-3'>
            {description.map(info => 
                <Row>
                  <Row className='text-black-50 '>
                  {info.title}
                  </Row>
                  <Row >
                    {info.description}
                  </Row>
                </Row>
              )}
          </div>
          <Button variant='outline-dark' className='mt-2'>Добавить в корзину</Button>
        </Col>

    </Container>
  );
}

export default FoodPage;
