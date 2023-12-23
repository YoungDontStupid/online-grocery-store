import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryBar from '../components/CategoryBar';
import FoodList from '../components/FoodList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchCategorys, fetchFoods } from '../http/foodAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {
  const {food} = useContext(Context)

  useEffect(() => {
    fetchCategorys().then(data => food.setCategorys(data))
    fetchFoods(null, null, 1, 5).then(data => {
      food.setFoods(data.rows)
      food.setTotalCount(data.count)
    }
    )
}, [food])

useEffect(() => {
  fetchFoods(food.selectedCategory.id,  food.page, 12).then(data => {
      food.setFoods(data.rows)
      food.setTotalCount(data.count)
  })
}, [food, food.page, food.selectedCategory])



  return (
    <Container>
        <Row>
            <Col md={2}>  
                <h2 className='mt-2 m-auto'>Категории</h2>
                <CategoryBar />
            </Col>  
            <Col md={10}>
            <h2 className='d-flex mt-2 m-end'>Товары</h2>
              <FoodList />
              <Pages/>

            </Col>
        </Row>
    </Container>

  );
})

export default Shop;
