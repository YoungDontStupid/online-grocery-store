import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchOneFood } from '../http/foodAPI';

const FoodPage = () => {
  const [food, setFood] = useState({info: []})
  const {id} = useParams()

  useEffect(() => {
      fetchOneFood(id).then(data => setFood(data))
  }, [id])

  return (
    <Container className='mt-3 '>
        <Col md={3} className='m-auto'>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + food.img} />
          <Row>
            <h2 className='m-auto'>{food.name}</h2>
            <h2 >{food.price + " руб"}</h2>
          </Row>
          <Col md={3}>
        </Col>
          <Card>
            </Card>
            <div className='d-flex flex-column mt-3'>
            {food.info.map(info => 
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
          <Button variant='outline-danger' className='mt-2 '>Добавить в корзину</Button>
        </Col>

    </Container>
  );
}

export default FoodPage;
