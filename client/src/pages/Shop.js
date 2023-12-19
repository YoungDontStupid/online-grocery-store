import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryBar from '../components/CategoryBar';
import TypeBar from '../components/TypeBar';

const Shop = () => {
  return (
    <Container>
        <Row className="mt-2">
            <Col md={3}>
                <CategoryBar />
            </Col>
            <Col md={9}>
              {/* <TypeBar /> */}
            </Col>
        </Row>
    </Container>

  );
}

export default Shop;
