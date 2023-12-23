import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryBar from '../components/CategoryBar';
import FoodList from '../components/FoodList';

const Shop = () => {
  return (
    <Container>
        <Row>
            <Col md={3}>
                <h2 className='mt-2 m-auto'>Категории</h2>
                <CategoryBar />
            </Col>  
            <Col md={9}>
            <h2 className='d-flex mt-2 m-end'>Товары</h2>
              <FoodList />
            </Col>
        </Row>
    </Container>

  );
}

export default Shop;
